# 旧文章批量修改方案

> Version: 1.0
> Created: 2026-07-25
> Purpose: Systematically fix AI hallucination issues across 370+ existing articles

---

## 一、修改目标

将所有旧文章中的 AI 幻觉内容修正为准确的网站定位描述：
- ❌ 移除虚假的代购平台描述（warehouse, QC, shipping, orders）
- ❌ 移除虚构的数据（500,000 users, 94% pass rate, 410+ orders）
- ❌ 移除不存在的功能（customer support, payment processing, order tracking）
- ✅ 统一为准确的产品目录定位（curated product directory, organized listings, shopping guides）

---

## 二、文章分类与优先级

### 批次 1：核心页面（最高优先级）
**文件数量**: ~15 个
**修改难度**: 中等
**影响范围**: 全站定位

| 文件 | 问题类型 | 关键修改点 |
|------|---------|-----------|
| `about.md` | 平台定位错误 | 移除 "shopping agent"、"warehouse"、"quality inspection" 描述 |
| `Usfans-legitimacy.md` | 虚假数据 | 移除 "500,000 buyers"、"93% satisfaction rate" |
| `Usfans-for-beginners.md` | 虚假流程 | 移除 "purchases on your behalf"、"warehouse inspection" |
| `Usfans-complete-guide.md` | 虚假流程 | 移除 "order processing"、"payment methods"、"shipping" |
| `Usfans-account-security.md` | 虚构系统 | 移除 "50,000+ users"、"MFA"、"login monitoring" |
| `Usfans-data-security.md` | 虚构系统 | 移除 "SIEM"、"10 million events"、"IDS/IPS" |
| `is-Usfans-legit.md` | 虚假数据 | 移除 "93.6% quality pass rate"、"73% issues caught" |
| `Usfans-alternative.md` | 虚假数据 | 移除 "500+ verified sellers"、"2 million products" |

**修改策略**:
1. 重写开头段落，使用标准介绍模板
2. 删除所有虚假数据段落
3. 替换虚假流程描述为准确的功能说明
4. 更新 FAQ 部分，移除订单/支付/物流相关问题

---

### 批次 2：地区指南（高优先级）
**文件数量**: ~8 个
**修改难度**: 中等
**影响范围**: 地区 SEO

| 文件 | 问题类型 | 关键修改点 |
|------|---------|-----------|
| `Usfans-australia-guide.md` | 虚假流程 | 移除 "ordering process"、"warehouse"、"shipping costs" |
| `Usfans-canada-guide.md` | 虚假流程 | 同上 |
| `Usfans-poland-guide.md` | 虚假流程 | 同上 |
| `Usfans-polska-guide.md` | 虚假流程 | 同上 |
| `Usfans-africa-shipping.md` | 虚假物流 | 移除 "warehouse team"、"repackaging services"、"shipping methods" |
| `Usfans-free-guide.md` | 虚假流程 | 移除 "professional purchasing services"、"quality inspection" |

**修改策略**:
1. 重写开头段落，强调产品目录定位
2. 删除所有物流/发货相关段落
3. 替换为"如何浏览产品目录"的实用指南
4. 更新 FAQ，移除物流/支付问题

---

### 批次 3：品牌文章（中高优先级）
**文件数量**: ~40 个
**修改难度**: 中等
**影响范围**: 品牌 SEO

| 文件类型 | 问题类型 | 关键修改点 |
|---------|---------|-----------|
| `Usfans-nike.md` | 虚假数据 | 移除 "410+ orders"、"94% quality pass rate" |
| `Usfans-jordan.md` | 虚假数据 | 同上 |
| `Usfans-adidas-superstar.md` | 虚假销售 | 移除 "sells replica products"、"QC photos" |
| `Usfans-air-force-1.md` | 虚假流程 | 移除 "warehouse inspection"、"QC team" |
| `Usfans-airpods.md` | 虚假流程 | 移除 "QC photo process"、"warehouse team" |
| `Usfans-coach.md` | 虚假销售 | 移除 "checkout process"、"payment methods" |
| 其他品牌文章... | 类似问题 | 按相同模式修改 |

**修改策略**:
1. 重写产品介绍段落，使用准确的功能描述
2. 删除所有虚假数据（订单数、通过率、满意度）
3. 替换产品亮点格式：
   - ❌ `**Product**: $Price | 410+ orders | 94% pass rate | Description`
   - ✅ `**Product**: $Price | Key feature | Style note | Description`
4. 更新 FAQ，移除质检/订单相关问题

---

### 批次 4：功能指南（中等优先级）
**文件数量**: ~25 个
**修改难度**: 低-中
**影响范围**: 功能 SEO

| 文件类型 | 问题类型 | 关键修改点 |
|---------|---------|-----------|
| `Usfans-sizing-guide.md` | 虚假流程 | 移除 "order the wrong size"、"return process" |
| `Usfans-coupon-guide.md` | 虚假数据 | 移除 "2,000 verified coupons"、"save 5-25%" |
| `Usfans-budget-accessories.md` | 虚假数据 | 移除 "650 budget-friendly options" |
| `Usfans-budget-t-shirts.md` | 虚假数据 | 移除 "500 budget t-shirt options" |
| `Usfans-cheap-clothes.md` | 虚假数据 | 移除 "800 budget-friendly clothing options" |
| 其他功能文章... | 类似问题 | 按相同模式修改 |

**修改策略**:
1. 删除所有虚假统计数据
2. 替换为准确的产品分类描述
3. 更新指南内容为"如何浏览目录"而非"如何下单"

---

### 批次 5：博客文章（中等优先级）
**文件数量**: ~10 个
**修改难度**: 低
**影响范围**: 博客 SEO

| 文件 | 问题类型 | 关键修改点 |
|------|---------|-----------|
| `blog/usfans-article1.md` | 虚假流程 | 移除 "purchasing agent"、"quality control"、"warehousing" |
| `blog/usfans-article2.md` | 虚假流程 | 移除 "warehouse inspection"、"QC photos" |
| `blog/usfans-article3.md` | 虚假流程 | 移除 "places an order"、"QC photos"、"international shipping" |
| `blog/usfans-article4.md` | 虚假数据 | 移除虚假统计数据 |
| `blog/usfans-article5.md` | 虚假流程 | 移除虚假流程描述 |

**修改策略**:
1. 重写开头段落
2. 删除虚假流程描述
3. 替换为准确的产品目录说明

---

### 批次 6：分类页面（较低优先级）
**文件数量**: ~270 个
**修改难度**: 低
**影响范围**: 分类 SEO

| 文件类型 | 问题类型 | 关键修改点 |
|---------|---------|-----------|
| `Usfans-hoodies.md` | 虚假数据 | 移除订单数、通过率 |
| `Usfans-sneakers.md` | 虚假数据 | 同上 |
| 其他分类页面... | 类似问题 | 按相同模式修改 |

**修改策略**:
1. 删除虚假数据（订单数、通过率、满意度）
2. 更新产品亮点格式
3. 更新 FAQ 部分

---

## 三、通用修改规则

### 规则 1：替换虚假平台描述

**搜索模式**:
```
(shopping agent|purchasing agent|buying agent|procurement platform)
```

**替换为**:
```
curated product directory
```

---

### 规则 2：删除虚假仓库/质检描述

**搜索并删除包含以下内容的段落**:
```
warehouse|QC team|quality inspection|QC photos|quality control
```

**替换为准确描述**:
```
The spreadsheet provides organized product information with pricing references and product details.
```

---

### 规则 3：删除虚假订单/支付描述

**搜索并删除包含以下内容的段落**:
```
place an order|add to cart|checkout|payment methods|order processing
```

**替换为**:
```
Users browse the organized product directory to find product information and pricing references.
```

---

### 规则 4：删除虚假物流描述

**搜索并删除包含以下内容的段落**:
```
shipping|delivery|tracking|customs|repackaging
```

**替换为**:
```
The spreadsheet provides product information for research purposes. Users can access external resources for purchasing.
```

---

### 规则 5：删除虚假数据

**搜索并删除以下模式**:
```
\d+,\d+\+ orders
\d+,\d+\+ users
\d+% (quality pass rate|satisfaction rate|accuracy)
\d+ verified sellers
\d+ products tested
```

**替换为准确的产品分类描述**:
```
The directory includes multiple product types organized by category.
```

---

### 规则 6：更新产品亮点格式

**旧格式**:
```markdown
- **Nike Air Max 95**: $28.99 | 410+ orders | 94% quality pass rate | Perfect for daily wear
```

**新格式**:
```markdown
- **Nike Air Max 95**: $28.99 | Classic design | Available in multiple colorways | Popular style option
```

---

### 规则 7：更新 FAQ 部分

**删除以下类型的问题**:
- How do I place an order?
- What payment methods do you accept?
- How long does shipping take?
- How does quality control work?
- What is the quality pass rate?

**替换为**:
- What information does the spreadsheet provide?
- How is the product directory organized?
- What product types are available?
- How do I browse the directory?

---

### 规则 8：更新开头段落

**使用标准模板**:

**简短版**:
```markdown
Usfans Spreadsheet is a curated product directory that organizes product listings into easy-to-browse categories. The platform helps users discover products through organized information and comprehensive guides.
```

**标准版**:
```markdown
Usfans Spreadsheet is a curated product directory that helps users discover products through organized categories, detailed product information, and shopping resources. The platform curates product listings from various sources, organizing them into accessible categories with comprehensive details including pricing references, product specifications, and category guides.

Usfans Spreadsheet does not process payments, handle shipping, inspect products, or manage orders. The platform serves as an information resource to support product discovery and research.
```

---

## 四、批量处理工作流

### 步骤 1：准备环境
```bash
# 确保在项目根目录
cd d:\usfanslinki

# 创建备份分支
git checkout -b backup-before-batch-modification
git push origin backup-before-batch-modification

# 切回主分支
git checkout main
```

---

### 步骤 2：按批次处理

#### 批次 1：核心页面
```powershell
# 修改 about.md
# 手动编辑，使用标准介绍模板

# 修改其他核心页面
# 逐个处理，确保准确性
```

**检查清单**:
- [ ] 移除所有 "shopping agent" 描述
- [ ] 移除所有虚假数据（用户数、订单数、通过率）
- [ ] 移除所有仓库/质检/物流描述
- [ ] 更新开头段落为标准模板
- [ ] 更新 FAQ 部分

---

#### 批次 2：地区指南
```powershell
# 批量处理地区指南
# 使用相同的修改模式
```

**检查清单**:
- [ ] 移除所有物流/发货相关段落
- [ ] 替换为"如何浏览目录"指南
- [ ] 更新 FAQ

---

#### 批次 3：品牌文章
```powershell
# 批量处理品牌文章
# 重点：删除虚假数据，更新产品亮点格式
```

**检查清单**:
- [ ] 删除所有虚假统计数据
- [ ] 更新产品亮点格式（移除订单数、通过率）
- [ ] 更新 FAQ

---

#### 批次 4-6：其他文章
```powershell
# 按批次处理剩余文章
# 使用 PowerShell 脚本进行批量替换
```

---

### 步骤 3：验证修改

```powershell
# 检查是否还有禁止词汇
rg "shopping agent|warehouse|QC team|quality inspection" --type md

# 检查是否还有虚假数据
rg "\d+,\d+\+ orders|\d+,\d+\+ users|\d+% (pass rate|satisfaction)" --type md

# 构建测试
npm run build
```

---

### 步骤 4：提交修改

```bash
# 分批提交（便于回滚）
git add about.md Usfans-legitimacy.md Usfans-for-beginners.md
git commit -m "fix: update core pages - remove AI hallucinations, correct website positioning"

git add Usfans-australia-guide.md Usfans-canada-guide.md Usfans-poland-guide.md
git commit -m "fix: update regional guides - remove false logistics descriptions"

git add Usfans-nike.md Usfans-jordan.md Usfans-adidas-*.md
git commit -m "fix: update brand articles - remove fabricated data, update product highlights"

# 推送到远程
git push origin main
```

---

## 五、质量控制

### 修改后检查清单

每个文件修改后，确认：

- [ ] **网站定位准确**: 描述为 "curated product directory"，不是 "shopping agent"
- [ ] **无虚假数据**: 没有编造的订单数、用户数、通过率、满意度
- [ ] **无虚假功能**: 没有描述仓库、质检、物流、客服、支付
- [ ] **无虚假流程**: 没有描述下单、结账、发货、退货流程
- [ ] **产品亮点格式正确**: 只包含价格、特征、风格说明
- [ ] **FAQ 准确**: 问题关于产品目录，不是订单/支付/物流
- [ ] **开头段落标准**: 使用标准介绍模板
- [ ] **内部链接完整**: 保持原有的内部链接结构
- [ ] **SEO 关键词保留**: 保留原有的 SEO 关键词密度
- [ ] **构建成功**: `npm run build` 无错误

---

### 自动化检查脚本

创建 `check-modifications.ps1`:

```powershell
# 检查禁止词汇
$bannedTerms = @(
    "shopping agent",
    "purchasing agent",
    "buying agent",
    "warehouse",
    "QC team",
    "quality inspection",
    "place an order",
    "add to cart",
    "checkout",
    "payment methods"
)

$issues = @()

foreach ($term in $bannedTerms) {
    $matches = Select-String -Path "*.md" -Pattern $term -SimpleMatch
    if ($matches) {
        $issues += "Found '$term' in $($matches.Count) files"
    }
}

# 检查虚假数据模式
$dataPatterns = @(
    "\d+,\d+\+ orders",
    "\d+,\d+\+ users",
    "\d+% quality pass rate",
    "\d+% satisfaction rate",
    "\d+ verified sellers"
)

foreach ($pattern in $dataPatterns) {
    $matches = Select-String -Path "*.md" -Pattern $pattern
    if ($matches) {
        $issues += "Found pattern '$pattern' in $($matches.Count) files"
    }
}

if ($issues.Count -eq 0) {
    Write-Host "✓ All checks passed - no banned terms or fabricated data found" -ForegroundColor Green
} else {
    Write-Host "✗ Issues found:" -ForegroundColor Red
    $issues | ForEach-Object { Write-Host "  - $_" -ForegroundColor Yellow }
}
```

---

## 六、时间估算

| 批次 | 文件数 | 预计时间 | 优先级 |
|------|--------|---------|--------|
| 批次 1：核心页面 | 15 | 2-3 小时 | 最高 |
| 批次 2：地区指南 | 8 | 1-2 小时 | 高 |
| 批次 3：品牌文章 | 40 | 4-6 小时 | 中高 |
| 批次 4：功能指南 | 25 | 2-3 小时 | 中等 |
| 批次 5：博客文章 | 10 | 1-2 小时 | 中等 |
| 批次 6：分类页面 | 270 | 8-12 小时 | 较低 |
| **总计** | **368** | **18-28 小时** | - |

**建议**: 分 3-4 天完成，每天处理 1-2 个批次

---

## 七、风险控制

### 风险 1：误删有价值内容
**缓解措施**:
- 创建备份分支
- 逐文件审查修改
- 保留原有的 SEO 关键词和内部链接

### 风险 2：修改引入新错误
**缓解措施**:
- 每批次修改后运行构建测试
- 使用自动化检查脚本验证
- 分批提交，便于回滚

### 风险 3：修改不完整
**缓解措施**:
- 使用自动化检查脚本扫描所有文件
- 人工抽查每个批次的修改质量
- 最终全站扫描确认无遗漏

---

## 八、下一步行动

1. **确认方案**: 审核本方案，确认修改策略
2. **创建备份**: 创建备份分支
3. **执行批次 1**: 先修改核心页面（最高优先级）
4. **验证效果**: 构建测试 + 人工审查
5. **继续后续批次**: 按优先级逐步完成

---

## 九、参考文档

- `WEBSITE_POSITIONING.md` - 网站定位声明
- `BANNED_TERMS.md` - 禁止生成词库
- `flexible-article-generator.md` - 新文章生成 Prompt
- `Usfans-article-prompt.md` - 文章结构模板

---

**版本历史**:
- v1.0 (2026-07-25): 初始版本，基于全站审核报告制定
