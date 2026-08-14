import re, os

# Read key.txt
with open(r'd:\fansbuy\finsbuy-main\key.txt', 'r', encoding='utf-8') as f:
    raw_keywords = [line.strip() for line in f if line.strip()]

# Step 1: Deduplicate
seen = set()
unique_keywords = []
for kw in raw_keywords:
    kw_lower = kw.lower()
    if kw_lower not in seen:
        seen.add(kw_lower)
        unique_keywords.append(kw)

print(f"Total raw: {len(raw_keywords)} | After dedup: {len(unique_keywords)}")

# Step 2: Existing articles
existing_articles = set()
skip_files = {'blog','about','index','shoes','clothes','hats','watches','platform',
    'bags','accessories','WEBSITE_STRUCTURE','PRODUCT_WORKFLOW','CONTENT_CHECKLIST',
    'LOCAL_SETUP','ideas','topic-matrix','flexible-article-generator','fansbuy-topic-list',
    'fansbuy-product-reference','fansbuy-internal-link-rules','fansbuy-article-prompt',
    'fansbuy-review-report','key'}
for f in os.listdir(r'd:\fansbuy\finsbuy-main'):
    if f.endswith('.md') and not f.startswith('.'):
        name = f[:-3].lower()
        if name not in skip_files:
            existing_articles.add(name)

print(f"Existing articles: {len(existing_articles)}")

# Step 3: Filter - remove non-fansbuy keywords
fansbuy_keywords = []
non_fansbuy = []
for kw in unique_keywords:
    kw_lower = kw.lower()
    if 'fansbuy' in kw_lower or 'fans buy' in kw_lower:
        fansbuy_keywords.append(kw)
    else:
        non_fansbuy.append(kw)

print(f"\nFansbuy-related: {len(fansbuy_keywords)} | Non-fansbuy: {len(non_fansbuy)}")
if non_fansbuy:
    print("Non-fansbuy keywords (excluded):")
    for k in non_fansbuy:
        print(f"  - {k}")

# Step 4: Remove already covered keywords
covered = []
remaining = []
for kw in fansbuy_keywords:
    kw_lower = kw.lower().strip()
    # Check if keyword matches an existing article
    if kw_lower in existing_articles:
        covered.append(kw)
        continue
    # Check if keyword is a substring of existing article or vice versa
    matched = False
    for art in existing_articles:
        if kw_lower in art or art in kw_lower:
            # Only mark as covered if it's a close match (same core topic)
            kw_words = set(kw_lower.split())
            art_words = set(art.split())
            if kw_words == art_words or kw_words.issubset(art_words) or art_words.issubset(kw_words):
                matched = True
                break
    if matched:
        covered.append(kw)
    else:
        remaining.append(kw)

print(f"\nAlready covered: {len(covered)}")
for c in sorted(covered):
    print(f"  - {c}")

print(f"\nRemaining (need new articles): {len(remaining)}")

# Step 5: Classify remaining keywords
# Define category patterns
categories = {
    "Brand - Sneakers/Shoes": {
        "patterns": ["adidas superstar", "air force", "air max", "jordan 4", "jordan 5", "jordan 1", "jordan 3", "jordan 11", "new balance", "yeezy", "vapormax", "golden goose", "balenciaga track", "balenciaga slides", "dior b30", "ugg lowmel", "asics", "crocs", "vans", "timberland", "g shock", "kobe", "kobe 6", "nike tn", "nike mind", "balenciaga"],
        "keywords": []
    },
    "Brand - Clothing": {
        "patterns": ["acne studios", "alo", "alpha industries", "bape", "burberry", "canada goose", "carhartt", "corteiz", "cp company", "diesel", "denim tears", "ea7", "ed hardy", "eric emanuel", "essentials", "gallery dept", "gymshark", "hellstar", "isabel marant", "jeremy scott", "juicy couture", "lacoste", "lanvin", "lululemon", "mertra", "miu miu", "moncler", "north face", "nocta", "off white", "palm angels", "polo ralph", "prada", "ralph lauren", "rick owens", "stone island", "stussy", "supreme", "tech fleece", "tommy hilfiger", "trapstar", "true religion", "vetements", "youngla", "zara", "chrome hearts", "palm angels"],
        "keywords": []
    },
    "Brand - Luxury/Accessories": {
        "patterns": ["alexander mcqueen", "hermes", "louis vuitton", "lv bag", "lv skate", "lv ", "rolex", "cartier", "omega", "labubu", "hot wheels", "lego"],
        "keywords": []
    },
    "Product Category": {
        "patterns": ["accessories", "bags", "handbag", "purse", "wallet", "backpack", "caps", "hats", "headwear", "hoodie", "hoodies", "jeans", "jorts", "jacket", "jackets", "jersey", "jerseys", "jewelry", "earrings", "shorts", "shirts", "t shirt", "t-shirt", "sweatpants", "tracksuit", "vest", "underwear", "socks", "gloves", "sunglasses", "glasses", "dress", "pants", "clothes", "shoes", "sneakers", "slides", "cleats", "basketball", "football", "soccer", "tennis", "running", "golf", "fishing", "hiking", "mtb", "motocross", "motorcycle", "sports", "gym", "mma"],
        "keywords": []
    },
    "Electronics/Tech": {
        "patterns": ["airpods", "apple watch", "iphone", "ipad", "dyson", "jbl", "phone case", "phone", "mobile", "electronics"],
        "keywords": []
    },
    "Quality/Trust": {
        "patterns": ["qc", "quality", "legit", "review", "trustpilot", "original", "best batch", "budget batch", "good quality", "high quality", "premium quality", "with qc"],
        "keywords": []
    },
    "Price/Value": {
        "patterns": ["cheap", "cheapest", "budget", "low price", "best", "the best", "ultimate", "free"],
        "keywords": []
    },
    "Spreadsheet/Platform": {
        "patterns": ["spreadsheet", "google sheets", "google docs", "excel", "link", "linktree", "docs", "site", "org", "com", "website", "finder", "findindex", "list", "hub", "archive"],
        "keywords": []
    },
    "Community/Social": {
        "patterns": ["reddit", "tiktok", "instagram", "discord", "telegram", "rep", "repgalaxy", "reselling"],
        "keywords": []
    },
    "Demographic": {
        "patterns": ["women", "men", "kids", "junior", "girls", "female", "male", "big sizes", "xxl", "plus size"],
        "keywords": []
    },
    "Regional/International": {
        "patterns": ["australia", "canada", "uk", "poland", "polska", "romania", "euro", "pl ", "tanie", "buty", "damskie", "dla dzieci", "dla kobiet", "koszulki", "korki", "kosmetyki", "kurtki", "zegarki", "elektronika", "arkusz", "opinie"],
        "keywords": []
    },
    "Seasonal/Trend": {
        "patterns": ["summer", "winter", "spring", "fall", "2024", "2025", "2026", "vintage", "y2k", "old money", "underground", "niche", "unique", "fashion", "streetwear", "designer", "outfits", "fragrance", "perfume", "makeup", "room decor"],
        "keywords": []
    },
    "Competitor": {
        "patterns": ["pandabuy", "hoobuy", "oopbuy", "litbuy"],
        "keywords": []
    },
    "Modifier/Long-tail": {
        "patterns": ["10 000", "10k", "15000", "20000", "3000", "4000", "5000", "6000", "8000", "v2", "#1", "template", "with photos", "with reviews", "with sales", "with qc reddit", "for kids", "for girls", "maker", "numeris", "grisch", "taibi", "oxy", "vladimir", "derschutze", "beacons", "formula 1", "nba", "ig brand"],
        "keywords": []
    },
}

unclassified = []
for kw in remaining:
    kw_lower = kw.lower()
    matched_cat = None
    for cat_name, cat_info in categories.items():
        for pattern in cat_info["patterns"]:
            if pattern in kw_lower:
                cat_info["keywords"].append(kw)
                matched_cat = cat_name
                break
        if matched_cat:
            break
    if not matched_cat:
        unclassified.append(kw)

# Print results
print("\n" + "="*70)
print("KEYWORD CLASSIFICATION RESULTS")
print("="*70)

for cat_name, cat_info in categories.items():
    if cat_info["keywords"]:
        print(f"\n### {cat_name} ({len(cat_info['keywords'])} keywords)")
        for kw in sorted(set(cat_info["keywords"])):
            print(f"  - {kw}")

if unclassified:
    print(f"\n### UNCLASSIFIED ({len(unclassified)} keywords) - Need new tag suggestions")
    for kw in sorted(unclassified):
        print(f"  - {kw}")

# Summary
print("\n" + "="*70)
print("SUMMARY")
print("="*70)
total_classified = sum(len(c["keywords"]) for c in categories.values())
print(f"Total remaining keywords: {len(remaining)}")
print(f"Classified: {total_classified}")
print(f"Unclassified: {len(unclassified)}")
print(f"\nCategory breakdown:")
for cat_name, cat_info in sorted(categories.items(), key=lambda x: -len(x[1]["keywords"])):
    if cat_info["keywords"]:
        print(f"  {cat_name}: {len(cat_info['keywords'])}")
