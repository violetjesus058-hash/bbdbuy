# Usfans Spreadsheet Editorial Uniqueness Guide

## Purpose

Every Usfans Spreadsheet page must offer a distinct reader purpose, search intent, and editorial angle. The site should not publish near-duplicate guides with swapped product names, recycled opening paragraphs, or generic image labels. This standard applies to all articles, category pages, landing pages, and future updates.

## Page Brief Before Writing

Each page needs a one-sentence editorial brief that states the reader, the decision or question being addressed, the relevant product or service context, and the page's unique perspective. Writers should identify a primary angle such as comparison, buyer checklist, sizing decision, materials review, seasonal use case, budget constraint, regional delivery context, or product-category discovery. A new page may not reuse another page's first paragraph, outline sequence, conclusion pattern, or more than one short supporting sentence.

| Field | Required standard |
|---|---|
| Title | Write one specific, engaging title that names the primary topic and intended value. Avoid templates that differ only by one brand or product word. |
| Description | Use 150–160 characters. Summarize the page's particular question, evidence, or decision context in a reader-first voice. |
| Category | Choose one precise primary category, such as `Footwear`, `Outerwear`, `Accessories`, `Electronics`, `Sizing & Fit`, `Buying Guide`, `Shipping`, or `Platform Guide`. |
| Tags | Use 3–5 distinct tags. Combine the topic, a concrete product or audience, and an intent or use case. Avoid site-wide generic tag sets. |
| Updated | Use an ISO 8601 timestamp in 2026 that reflects the most recent editorial change. |
| Image alt text | Describe the visual subject, setting, item attributes, and only keywords that are genuinely visible or relevant to the page. Do not repeat a stock phrase across pages. |

## Article Structure

A standard article should open with a topic-specific scenario or decision, not a generic statement about comparing styles. The core sections should vary according to the page's intent. A sizing guide can use fit signals and measurement checks, while a materials page can use construction details, care implications, and trade-offs. Conclusions must resolve the page's own question rather than repeat a generic recommendation.

Image captions and image alt text are part of the content. Keep each image inside its `figure` block, retain the matching caption, and ensure that each visual supports the section immediately before or after it. A primary image belongs near the top of the article; a secondary image belongs in the relevant middle section rather than directly beside the first image.

## Similarity Gate

Before publishing, run the content-quality checker. The page must satisfy all of the following requirements:

1. Its maximum five-word-shingle Jaccard similarity to any other published page must be below **0.30**.
2. Its title and description must be unique across the site.
3. Its description must contain 150–160 characters.
4. Its category must be present, and its tags must contain 3–5 meaningful values.
5. Every image alt value must be unique across the site unless two pages intentionally use the same image; in that rare case, the surrounding caption and context must still differ.
6. All internal links, Markdown images, and frontmatter syntax must pass the site build.

## Editorial Review Checklist

Review the target page against its closest topic peers before publication. Confirm that the opening, headings, examples, decision criteria, image language, and conclusion are not formulaic variations. When revising an existing article, update the `updated` field and revise the title or description only when the new page angle warrants it. Do not add keywords that are not supported by the article's content or image.
