# 禁止生成词库 (Banned Terms List)

> AI 生成文章时，禁止使用以下词汇和短语。
> 这些词汇会导致 AI 幻觉，生成不符合网站实际功能的虚假描述。

---

## 一、平台定位类（禁止）

这些词会将网站错误定位为代购/购物代理平台。

| 禁止词汇 | 错误示例 | 正确替代 |
|---------|---------|---------|
| shopping agent | "Usfans Spreadsheet is a shopping agent" | "product directory" / "product discovery resource" |
| buying agent | "your buying agent" | "shopping guide" / "product resource" |
| purchasing agent | "purchasing agent platform" | "product curation platform" |
| sourcing agent | "sourcing agent service" | "product information resource" |
| China agent | "China shopping agent" | "product discovery platform" |
| procurement platform | "trusted procurement platform" | "product directory" |
| middleman | "acts as a middleman" | "organizes product information" |
| proxy buyer | "proxy buying service" | "product listing resource" |

---

## 二、仓储物流类（禁止）

网站没有仓库，不处理任何物流。

| 禁止词汇 | 错误示例 | 正确替代 |
|---------|---------|---------|
| warehouse | "arrives at our warehouse" | （删除，或改为 "product listings include..."） |
| our warehouse | "our warehouse team photographs" | （整句删除） |
| Guangzhou warehouse | "Guangzhou warehouse inspection" | （整句删除） |
| warehouse team | "warehouse team inspects" | （整句删除） |
| warehouse arrival | "notification of warehouse arrival" | （整句删除） |
| warehouse verification | "three-stage warehouse verification" | （整句删除） |
| warehouse services | "warehouse services allow consolidation" | （整句删除） |
| storage facility | "storage facility inspection" | （整句删除） |
| fulfillment center | "fulfillment center processing" | （整句删除） |

---

## 三、质检认证类（禁止）

网站不进行产品质检，不提供 QC 照片。

| 禁止词汇 | 错误示例 | 正确替代 |
|---------|---------|---------|
| QC team | "QC team photographs each item" | "product listings include available images" |
| QC photos | "you will receive QC photos" | "product listings include available images and descriptions" |
| QC photo | "review QC photos before approving" | "review available product information" |
| quality control inspection | "15-point quality control inspection" | "organized product information" |
| quality pass rate | "94% quality pass rate" | （删除此数据） |
| quality verification | "quality verification process" | "product information details" |
| inspection process | "multi-step inspection process" | （整句删除） |
| factory inspection | "factory inspection stage" | （整句删除） |
| pre-shipment photo | "pre-shipment photo review" | （整句删除） |
| legit check | "legit check process" | "product information guide" |
| authentication check | "authentication verification system" | "product information resource" |

---

## 四、订单交易类（禁止）

网站不处理订单、不收款、不发货。

| 禁止词汇 | 错误示例 | 正确替代 |
|---------|---------|---------|
| place an order | "place your order with confidence" | "browse product listings" |
| add to cart | "add items to your cart" | "explore product categories" |
| checkout | "proceed to checkout" | （删除） |
| payment | "multiple payment methods" | （删除） |
| payment methods | "accepts cryptocurrency" | （删除） |
| order processing | "order enters the processing queue" | （删除） |
| order confirmation | "order confirmation notification" | （删除） |
| order tracking | "tracking from production to delivery" | （删除） |
| order volume | "410+ orders" | （删除此数据） |
| orders processed | "8,200 orders processed in 2026" | （删除此数据） |
| purchase on your behalf | "purchases the item on your behalf" | "provides product information and links" |
| buy directly | "buy directly from the spreadsheet" | "browse products through the spreadsheet" |
| transaction | "thousands of successful transactions" | （删除此数据） |
| refund | "request a replacement or refund" | （删除） |
| replacement window | "48-72 hours replacement window" | （删除） |
| dispute resolution | "dispute resolution process" | （删除） |
| escrow | "escrow-style payment protection" | （删除） |

---

## 五、虚假数据类（禁止）

所有具体数字如果没有真实来源，一律禁止生成。

| 禁止模式 | 错误示例 | 说明 |
|---------|---------|------|
| X+ orders | "410+ orders" | 网站没有订单数据 |
| X users/buyers | "500,000 buyers" | 网站没有用户统计 |
| X% pass rate | "94% quality pass rate" | 网站不做质检 |
| X% satisfaction | "93% satisfaction rate" | 网站没有满意度调查 |
| X% accuracy | "95% inventory accuracy" | 网站不管理库存 |
| X orders annually | "500,000 orders annually" | 网站不处理订单 |
| X+ registered users | "50,000+ registered users" | 网站没有注册系统 |
| blocked X attempts | "blocked 12,000 unauthorized attempts" | 网站没有安全系统 |
| X million events | "10 million events daily" | 网站没有事件监控系统 |
| X attack attempts | "450,000 attack attempts annually" | 网站没有 IDS/IPS |
| X+ verified sellers | "500+ verified seller network" | 网站没有卖家验证 |
| X+ products tested | "500 products tested" | 网站不测试产品 |
| repurchase rate | "58% repeat purchase rate" | 网站没有复购数据 |
| reorder rate | "72% of buyers reorder" | 网站没有复购数据 |

---

## 六、客服支持类（禁止）

网站没有客服系统。

| 禁止词汇 | 错误示例 | 正确替代 |
|---------|---------|---------|
| customer support | "24/7 customer support" | （删除） |
| customer service | "responsive customer service" | （删除） |
| support team | "contact our support team" | （删除） |
| support staff | "Usfans Spreadsheet support staff" | （删除） |
| live chat | "live chat support" | （删除） |
| response time | "under 2-hour response times" | （删除） |
| ticket system | "support ticket tracking" | （删除） |
| help desk | "help desk assistance" | （删除） |

---

## 七、夸大营销类（禁止）

这些词汇缺乏事实依据，属于 AI 生成的空洞宣传。

| 禁止词汇 | 错误示例 | 正确替代 |
|---------|---------|---------|
| leading platform | "the leading platform for affordable fashion" | "a curated product directory" |
| premier shopping agent | "premier shopping agent" | "product discovery resource" |
| most trusted | "the most trusted shopping agent" | "a helpful product resource" |
| top platform | "top platform for quality items" | "organized product directory" |
| trusted by X | "trusted by thousands of buyers" | "helps users discover products" |
| industry-leading | "industry-leading quality control" | （删除） |
| best-in-class | "best-in-class inspection" | （删除） |
| world-class | "world-class logistics" | （删除） |
| number one | "the number one shopping platform" | "a curated product directory" |
| go-to destination | "go-to destination for buyers" | "organized product resource" |
| definitive resource | "the definitive resource" | "a helpful guide" |

---

## 八、商业关系类（禁止）

网站不是品牌官方，不是制造商，不是授权经销商。

| 禁止词汇 | 错误示例 | 正确替代 |
|---------|---------|---------|
| official store | "official store for [brand]" | "product listings for [brand]" |
| official partner | "official partner of [brand]" | （删除） |
| authorized dealer | "authorized dealer" | （删除） |
| direct sourcing | "direct sourcing model" | "curated product listings" |
| factory-direct | "factory-direct pricing" | "pricing references" |
| manufacturer | "connects buyers with manufacturers" | "organizes product information" |
| wholesale | "wholesale pricing" | "pricing references" |
| supplier network | "verified supplier network" | "organized product listings" |
| supply chain | "manages the supply chain" | （删除） |

---

## 九、物流发货类（禁止）

| 禁止词汇 | 错误示例 | 正确替代 |
|---------|---------|---------|
| shipping service | "reliable shipping service" | （删除） |
| international shipping | "international shipping to 150 countries" | （删除） |
| express shipping | "express shipping available" | （删除） |
| shipping costs | "shipping costs calculated" | （删除） |
| delivery | "delivery success rate 95-98%" | （删除） |
| tracking | "tracking updates every 2-3 days" | （删除） |
| consolidated shipping | "consolidated shipping options" | （删除） |
| repackaging | "repackaging services" | （删除） |
| volumetric weight | "volumetric weight calculations" | （删除） |
| customs | "customs fees and duties" | （删除） |
| parcel consolidation | "parcel consolidation service" | （删除） |
| signature confirmation | "signature confirmation for high-value items" | （删除） |

---

## 十、账户安全类（禁止）

网站没有用户账户系统。

| 禁止词汇 | 错误示例 | 正确替代 |
|---------|---------|---------|
| account security | "account security measures" | （删除） |
| MFA / multi-factor | "multi-factor authentication" | （删除） |
| login monitoring | "login attempt monitoring" | （删除） |
| session management | "session management system" | （删除） |
| credential | "strong password requirements" | （删除） |
| unauthorized access | "blocked unauthorized access" | （删除） |
| account compromise | "account compromise detection" | （删除） |
| SIEM | "SIEM systems process events" | （删除） |
| IDS/IPS | "IDS/IPS block attacks" | （删除） |
| vulnerability management | "vulnerability management system" | （删除） |

---

## 十一、上下文敏感词（需根据语境判断）

这些词不是绝对禁止，但在描述网站功能时容易导致幻觉，需要谨慎使用。

| 敏感词 | 安全用法 | 危险用法 |
|--------|---------|---------|
| product | ✅ "product information" / "product listings" | ❌ "product quality guaranteed" |
| price | ✅ "pricing references" / "price range" | ❌ "lowest price guaranteed" |
| quality | ✅ "quality information" / "product details" | ❌ "quality pass rate 94%" |
| buyer | ✅ "helps buyers discover products" | ❌ "thousands of satisfied buyers" |
| shopping | ✅ "shopping guides" / "shopping resources" | ❌ "shopping experience on our platform" |
| collection | ✅ "curated collection of listings" | ❌ "our collection ships worldwide" |
| seller | ✅ "seller information" (仅引用外部数据) | ❌ "our verified seller network" |
| batch | ✅ "batch information" (产品信息) | ❌ "batch quality pass rate" |
| community | ✅ "community discussions" (引用 Reddit 等) | ❌ "our community of 500,000 members" |
| platform | ✅ "the platform organizes information" | ❌ "the platform processes orders" |

---

## 十二、安全替代词库

生成文章时，优先使用以下词汇：

### 描述网站：
- curated product directory
- organized product listings
- product discovery resource
- shopping guide
- information resource
- product catalog
- category organization

### 描述功能：
- curates (策划)
- organizes (组织)
- provides (提供)
- helps users (帮助用户)
- displays (展示)
- links to (链接到)
- guides (指导)
- aggregates (聚合)

### 描述用户行为：
- browse (浏览)
- explore (探索)
- discover (发现)
- find (找到)
- research (研究)
- compare (比较)
- navigate (导航)

### 描述内容：
- product information (产品信息)
- pricing references (价格参考)
- category guides (分类指南)
- organized listings (有组织的列表)
- product details (产品详情)
- shopping resources (购物资源)

---

## 十三、AI 生成时的硬性规则

1. **不要编造任何数字**：订单数、用户数、通过率、满意度等，除非来自可验证的公开数据源
2. **不要描述网站执行的操作**：网站只组织信息，不执行采购、质检、发货、支付
3. **不要假设用户账户存在**：网站没有注册系统、登录系统、仪表板
4. **不要描述客服互动**：没有客服团队、支持系统、响应时间
5. **不要描述物流流程**：没有仓库、承运商、追踪号、发货时间
6. **不要声称平台关系**：不是官方商城、不是授权经销商、不是合作伙伴
7. **不要使用绝对化表述**：避免 "guaranteed"、"always"、"never"、"100%"

---

## 版本历史

- **v1.0** (2026-07-25): 初始版本，基于全站审核报告建立禁止词库
