#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 配置
const PRODUCTS_FILE = path.join(__dirname, '../products.json');
const HOMEPAGE_FILE = path.join(__dirname, '../.vitepress/theme/components/HomePage.vue');

// 验证函数
function validateProduct(product) {
  const required = ['id', 'name', 'price', 'primaryCategory', 'secondaryCategory', 'image', 'link'];
  for (let field of required) {
    if (!product[field]) {
      throw new Error(`❌ 商品 #${product.id} 缺少必需字段: ${field}`);
    }
  }

  // 验证一级分类
  const validCategories = ['Clothing', 'Pants', 'Shoes', 'Watches', 'Accessories'];
  if (!validCategories.includes(product.primaryCategory)) {
    throw new Error(`❌ 无效的一级分类: ${product.primaryCategory}`);
  }

  return true;
}

// 主函数
function updateProducts() {
  try {
    // 1. 检查 products.json 是否存在
    if (!fs.existsSync(PRODUCTS_FILE)) {
      console.error('❌ 错误: products.json 文件不存在');
      process.exit(1);
    }

    // 2. 读取 products.json
    console.log('📖 读取 products.json...');
    const productsData = JSON.parse(fs.readFileSync(PRODUCTS_FILE, 'utf8'));

    if (!productsData.products || !Array.isArray(productsData.products)) {
      throw new Error('products.json 格式错误: 必须包含 "products" 数组');
    }

    console.log(`✓ 检测到 ${productsData.products.length} 个商品`);

    // 3. 验证所有商品
    console.log('🔍 验证商品数据...');
    productsData.products.forEach(validateProduct);
    console.log('✓ 所有商品数据验证通过');

    // 4. 读取 HomePage.vue
    console.log('📖 读取 HomePage.vue...');
    let homePageContent = fs.readFileSync(HOMEPAGE_FILE, 'utf8');

    // 5. 生成新的 products 数组代码
    console.log('🔧 生成商品代码...');
    const productsCode = productsData.products.map(product => {
      const badge = product.badge ? `'${product.badge}'` : "''";
      return `  {
    id: ${product.id},
    badge: ${badge},
    name: '${product.name.replace(/'/g, "\\'")}',
    price: '${product.price}',
    primaryCategory: '${product.primaryCategory}',
    secondaryCategory: '${product.secondaryCategory}',
    image: '${product.image}',
    link: '${product.link}'
  }`;
    }).join(',\n');

    const newProductsArray = `const products = [\n${productsCode}\n]`;

    // 6. 替换 HomePage.vue 中的 products 数组
    const productsArrayRegex = /const products = \[([\s\S]*?)\]/;

    if (!productsArrayRegex.test(homePageContent)) {
      throw new Error('无法在 HomePage.vue 中找到 products 数组');
    }

    homePageContent = homePageContent.replace(productsArrayRegex, newProductsArray);

    // 7. 写入更新后的 HomePage.vue
    console.log('✍️  更新 HomePage.vue...');
    fs.writeFileSync(HOMEPAGE_FILE, homePageContent, 'utf8');

    console.log('');
    console.log('✅ 成功！');
    console.log(`📊 已更新 ${productsData.products.length} 个商品`);
    console.log('');
    console.log('下一步:');
    console.log('  1. git add .vitepress/theme/components/HomePage.vue');
    console.log('  2. git commit -m "Update products from products.json"');
    console.log('  3. git push origin main');
    console.log('');

  } catch (error) {
    console.error('');
    console.error('❌ 错误:', error.message);
    console.error('');
    process.exit(1);
  }
}

// 运行
updateProducts();
