# 15 平台独立站项目总指南

> 本文件是 CSSBuy、Gtbuy、Litbuy、Oopbuy、Hipobuy、Superbuy、Lovegobuy、UsFans、Hoobuy、Weidian、Orientdig、Sugargoo、Fishgoo、Vigorbuy 和 BbdBuy 项目的统一交接文档，供人类维护者和 AI 项目助手读取。
>
> **如果旧的项目记忆、旧脚本或旧文章与本指南冲突，以本指南和用户最新明确要求为准。**

## 1. 项目总览

这是一个由 15 个独立 GitHub 公开仓库组成的内容型静态网站网络。每个平台拥有独立的品牌、首页、博客文章、SEO 配置、Google Analytics 衡量 ID、favicon、Logo 和 GitHub 仓库，但整体使用相近的 VitePress 站点结构。

这些网站的主要功能是提供平台相关的商品发现、购买研究、社区信息整理、类目指南、物流和支付解释，以及前往外部交易或商品站点的行动入口。网站本身不是仓储、客服、质量检查机构、物流商或订单处理系统，文章不得把社区经验写成平台官方承诺。

| 平台 | GitHub 仓库 | 内容定位 |
|---|---|---|
| CSSBuy | `violetjesus058-hash/cssbuy` | 面向巴西用户的产品发现和购买资源目录 |
| Gtbuy | `violetjesus058-hash/gtbuy` | 入门购买流程、运费比较和优惠研究 |
| Litbuy | `violetjesus058-hash/litbuy` | 优惠券驱动的产品发现与问题排查 |
| Oopbuy | `violetjesus058-hash/oopbuy` | 新手教程、Spreadsheet、精选发现和包裹成本教育 |
| Hipobuy | `violetjesus058-hash/hipobuy` | 替代平台、竞争性物流和运费研究 |
| Superbuy | `violetjesus058-hash/superbuy` | 成熟型综合购买研究、市场覆盖和结构化指南 |
| Lovegobuy | `violetjesus058-hash/lovegobuy` | 轻量替代平台发现与社区评价框架 |
| UsFans | `violetjesus058-hash/usfans` | 包裹限制、鞋类规划、仓储、QC 和承运商政策研究 |
| Hoobuy | `violetjesus058-hash/hoobuy` | 退款、退货、配送异常和问题解决指南 |
| Weidian | `violetjesus058-hash/weidian` | Weidian 市场、卖家风险和 sourcing 教育 |
| Orientdig | `violetjesus058-hash/orientdig` | 小型平台评估、物流和仓库验证框架 |
| Sugargoo | `violetjesus058-hash/sugargoo` | 多市场购买研究与合并运输教育 |
| Fishgoo | `violetjesus058-hash/fishgoo` | QC/图片政策、报价比较和沟通风险清单 |
| Vigorbuy | `violetjesus058-hash/vigorbuy` | 仓储期限、季节性积压、QC 选项和承运商研究 |
| BbdBuy | `violetjesus058-hash/bbdbuy` | 保守的新手评估、费用/优惠券比较和测试订单 |

## 2. 技术栈和目录结构

每个仓库是一个独立的 VitePress 静态站点，主要技术栈为 **VitePress 1.6.4、Vue 3、Node.js 22 和 pnpm 10.15.1**。生产分支统一为 `main`，标准构建产物目录为 `.vitepress/dist`。

常用目录如下：

```text
repo/
├── .github/workflows/build-validation.yml  # 自动构建与产物检查
├── .vitepress/
│   ├── config.mjs                          # 站点、SEO、Analytics、head 配置
│   ├── theme/
│   │   ├── components/                     # 首页、导航、页脚、CTA 等 Vue 组件
│   │   └── custom.css                      # 全局样式和响应式样式
│   └── dist/                               # 本地生成的生产产物，不作为源码编辑目录
├── blog/                                   # Markdown 博客文章
├── public/
│   ├── favicon.ico                         # 浏览器 ICO 图标
│   └── favicon.png                         # PNG 回退图标
├── package.json                            # 构建脚本和 pnpm 版本
├── pnpm-lock.yaml                          # 必须提交的依赖锁文件
├── pnpm-workspace.yaml                      # esbuild 构建许可配置
└── DEPLOYMENT-RECOVERY.md                  # 部署失败处理和回滚手册
```

标准命令为：

```bash
pnpm install --frozen-lockfile
pnpm run build
pnpm run dev
pnpm run preview
```

不要直接编辑 `.vitepress/dist`。所有页面、文章、组件和 SEO 修改必须在源码目录中完成，然后重新运行构建。

## 3. 平台差异规则

### CSSBuy 的特殊规则

CSSBuy 面向巴西市场，不能使用 `Spreadsheet` 作为站点或文章概念。CSSBuy 的标题、描述、关键词、正文、内部锚文本、CTA 标签、图片名称、图片 alt、Open Graph 文案和结构化数据中都不能出现 Spreadsheet 相关表达。

CSSBuy 应重点使用 Brazil、Brazilian shoppers、Portuguese-friendly guidance、payment、Pix、shipping、customs、QC、category discovery 等符合巴西购买者意图的内容。CSSBuy 首页和文章的交易 CTA 只允许指向：

```text
https://repsootd.com/
```

CSSBuy 外链需要使用仓库现有的“不传递权重”规则，例如 `rel="nofollow sponsored noopener"` 或项目中已经采用的等价写法。不要为 CSSBuy 恢复 Spreadsheet 链接、Spreadsheet CTA 或其他平台的电子表格概念。

### 其他平台的 Spreadsheet 规则

Gtbuy、Litbuy、Oopbuy、Hipobuy、Superbuy、Lovegobuy、UsFans、Hoobuy、Weidian、Orientdig、Sugargoo、Fishgoo、Vigorbuy 和 BbdBuy 可以在确有搜索意图的页面中保留平台词 + Spreadsheet 长尾词，但不能机械地把 Spreadsheet 塞进所有文章。Weidian 作为底层市场时，应优先使用 `Weidian shopping agent`、`Weidian seller guide` 和 `Weidian link research` 等意图，不能把 Weidian 本身描述成 agent。

### E-E-A-T 和社区内容

社区研究只能作为方向性证据，不能直接证明平台性能。应区分三类信息：平台官方公开信息、社区用户报告、编辑部的比较建议。使用“community-reported”“in the sampled discussions”“verify the current official policy”“compare a live quote before checkout”等谨慎表述。

除非有当前的一手来源，不要使用 fastest、cheapest、best、guaranteed、officially supported、verified 等绝对表达，也不要保证固定运费、时效、退款、QC、仓储时间或客服结果。

## 4. 内容和文章规则

文章必须与平台定位、标题和搜索意图一致。不要只通过替换品牌词复制另一平台的文章。优先修订已有文章，再考虑新增文章；只有关键词信号明确且平台确实缺失时才新增文章。

文章推荐结构为：平台特定的意图说明、可用证据和限制、用户需要自行核实的事项、实用比较清单、谨慎 FAQ。涉及购买流程时，说明用户应该检查什么，不要声称本网站代替平台处理订单。

每篇文章应尽量包含两张与文章主题相关的图片：一张位于文章头部，一张位于文章中部，不能连续出现。每张图片必须有准确的图片标题和 alt 文本，alt 应描述图片内容和文章语境，不要堆砌关键词。

文章内部链接必须指向真实存在的站内页面或明确允许的外部目标。修改 Markdown 文件名时，文件名使用文章标题语义和英文连字符，不要无理由添加 `-guide`；如果改动 slug，必须同步检查旧 URL、内部链接、导航、sitemap 和可能的 301 规则。

## 5. 首页、博客和 CTA 交互

首页和文章头部的主要 CTA 需要保持平台自己的文案与目标。支持桌面端 hover Preview Card：默认隐藏，hover 时使用 opacity + scale 动画显示，预览卡片不改变布局、不遮挡按钮、不影响点击；移动端不强制显示 hover 预览。

预览图应采用统一尺寸和 `object-fit: cover`，卡片带圆角和轻微阴影。CSSBuy 不得使用 `spreadsheet-preview.png` 或 Spreadsheet CTA；其他平台的 Spreadsheet 预览图应使用对应平台命名，例如：

```text
{platform}-spreadsheet-preview.png
```

Start shopping CTA 的交易目标必须根据平台既定规则处理。CSSBuy 只能指向 `https://repsootd.com/`；其他平台如需外部导流，必须检查平台词、目标 URL、`rel` 属性和用户最新要求，不能擅自复用 CSSBuy 规则。

## 6. 品牌图标映射

同一个首字母的平台共用一张品牌图标，不要重复制作不同版本。当前映射如下：

| 首字母 | 平台 |
|---|---|
| C | CSSBuy |
| G | Gtbuy |
| L | Litbuy、Lovegobuy |
| O | Oopbuy、Orientdig |
| H | Hipobuy、Hoobuy |
| S | Superbuy、Sugargoo |
| U | UsFans |
| W | Weidian |
| V | Vigorbuy |
| B | BbdBuy |
| F | Fishgoo |

每个仓库至少应保持以下文件有效：

```text
public/favicon.ico
public/favicon.png
```

站点配置目前通过 `/favicon.png` 注入 icon、Apple Touch Icon 和 Open Graph 图标。更换图标时，必须同时检查源文件和 `.vitepress/dist` 构建产物。

## 7. SEO、Analytics 和外链

每个平台都必须使用自己的品牌关键词、正式域名、canonical、sitemap hostname、Open Graph、robots、JSON-LD 和 Google Analytics 衡量 ID。不要将一个平台的 Analytics ID、标题、域名或品牌词复制到其他平台。

外链需要先判断目的：内部页面使用站内相对路径；商品转化链接使用明确的绝对 URL；商业或 affiliate 外链按仓库既有规则标记 `nofollow`、`sponsored` 和 `noopener`。CSSBuy 的 `repsootd.com` 商品链接必须保持“不传递权重”的要求。

修改 SEO 时要同时检查页面 title、description、keywords、canonical、OG image、文章 frontmatter、图片 alt、导航文字和 footer，不能只改一个字段。

## 8. 部署预案

所有仓库都包含 `.github/workflows/build-validation.yml`。该工作流在推送到 `main` 和 Pull Request 时自动执行以下步骤：

1. 使用 Node.js 22；
2. 使用 pnpm 10.15.1；
3. 执行 `pnpm install --frozen-lockfile`；
4. 执行 `pnpm run build`；
5. 检查 `.vitepress/dist/index.html`、`.vitepress/dist/favicon.ico` 和 `.vitepress/dist/favicon.png`。

托管平台应显式配置：

```text
Install command: pnpm install --frozen-lockfile
Build command: pnpm run build
Output directory: .vitepress/dist
Node version: 22
pnpm version: 10.15.1
```

如果安装失败，不要删除或重新生成锁文件。先检查 Node/pnpm 版本和 `pnpm-workspace.yaml`。如果构建失败，先修复第一个错误，不要用关闭校验、忽略错误或删除文章的方式绕过问题。如果线上页面异常但构建成功，优先使用托管平台的上一个成功部署版本；需要 Git 回滚时使用：

```bash
git log --oneline -10
git revert <bad-commit>
git push origin main
```

不要对共享的 `main` 分支执行 force-push。

## 9. AI 项目助手工作协议

AI 助手开始工作前必须先读取本指南、目标仓库的 `package.json`、`.vitepress/config.mjs`、相关 Vue 组件和目标文章。必须确认当前目标平台，不得把其他平台的规则套用到 CSSBuy。

开始修改前先执行：

```bash
git status --short --branch
git log -5 --oneline
```

修改时只处理用户要求的范围，不覆盖已有的用户工作区变更，不删除未理解的文章、图片或脚本。批量修改前先创建可回滚提交或分支，并把平台映射、替换范围和排除规则写清楚。

修改完成后必须执行：

```bash
pnpm install --frozen-lockfile
pnpm run build
git diff --check
git status --short --branch
```

还要检查目标页面的品牌词、Analytics ID、favicon、CTA 链接、`rel` 属性、内部链接、图片 alt 和移动端样式。若任务涉及多个仓库，逐仓库记录成功、失败和未修改状态，不能只验证一个仓库后宣称全部完成。

AI 助手不得：

- 把 CSSBuy 当作 Spreadsheet 平台；
- 将社区评论写成官方保证；
- 擅自更换正式域名、Analytics ID 或外部交易目标；
- 删除旧文章或旧 URL 而不检查重定向；
- 把本地预览地址当成生产地址；
- 在没有用户确认时执行付款、发布广告、修改第三方托管设置或其他不可逆操作。

## 10. 当前交接检查表

| 项目 | 要求 |
|---|---|
| 仓库数量 | 15 个独立公开 GitHub 仓库 |
| 生产分支 | 全部为 `main` |
| 构建技术 | VitePress + Vue |
| 构建输出 | `.vitepress/dist` |
| 依赖安装 | `pnpm install --frozen-lockfile` |
| 构建命令 | `pnpm run build` |
| 品牌图标 | 11 张首字母图标覆盖 15 个平台 |
| CI 校验 | 15 个仓库均有 `build-validation.yml` |
| 回滚手册 | 15 个仓库均有 `DEPLOYMENT-RECOVERY.md` |
| CSSBuy 特殊约束 | 巴西市场、禁止 Spreadsheet、仅允许 repsootd.com 外部 CTA |
| 后续重点 | 正式域名、托管平台设置、SEO 事实核查、移动端回归测试 |

## 11. 新 AI 助手启动提示词

以下内容可以直接复制给新的 AI 项目助手：

```text
你正在维护一个由 15 个独立 VitePress 静态站点组成的项目网络。开始前必须读取仓库根目录的 AI-PROJECT-GUIDE.md 和 DEPLOYMENT-RECOVERY.md，并确认当前仓库对应的平台。

所有仓库使用 Node.js 22、pnpm 10.15.1，生产构建命令为 pnpm run build，输出目录为 .vitepress/dist。依赖必须使用 pnpm install --frozen-lockfile。修改前检查 git status，不得覆盖用户已有未提交变更；修改后必须构建、执行 git diff --check，并检查 favicon、SEO、Analytics、CTA、内部链接和图片 alt。

CSSBuy 是巴西市场产品发现和购买资源目录，不得出现 Spreadsheet，不得使用 Spreadsheet CTA 或链接，外部交易 CTA 只能使用 https://repsootd.com/，且不能传递 SEO 权重。其他平台可以在符合搜索意图的页面使用平台词 + Spreadsheet，但不能机械堆砌，也不能把社区经验写成官方保证。

相同首字母的平台共用品牌图标：C CSSBuy，G Gtbuy，L Litbuy/Lovegobuy，O Oopbuy/Orientdig，H Hipobuy/Hoobuy，S Superbuy/Sugargoo，U UsFans，W Weidian，V Vigorbuy，B BbdBuy，F Fishgoo。

任何批量修改都必须先说明范围和排除项；任何部署问题都先修复依赖、锁文件、构建和静态产物检查，不得用关闭校验或 force-push 绕过问题。
```
