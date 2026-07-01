# Screenshots — real captures from the running PrismLab app

Captured from the live local app (localhost:3000) logged in as the seeded demo
account (display name anonymized to "Mark Thompson"), dark theme, 1440px viewport
@2x. Brand chrome relabeled "PrismLab" at capture time. All data is the seeded
multi-currency demo (NZD base + AED + USD). No fabricated stats.

| File | Feature | Notes for the site |
|---|---|---|
| 01-dashboard.png | Dashboard hero | Multi-currency cards (Investments, Cash in hand AED+USD), Income/Expense, Savings rate +55.3%, Cash Forecast w/ NZD/AED/USD toggle. **Primary hero image.** |
| 02-fire-projection.png | FIRE calculator | Inputs (spending, SWR 4%, return 7%, age) + live projection chart. Hero feature. |
| 03-fire-quiz.jpeg | FIRE quiz | "Which FIRE style fits you?" 3-question router → Coast/Full. |
| 04-import-upload.jpeg | Statement import — upload | Dropzone: CSV, PDF, JPG, PNG, WEBP. |
| 05-import-preview.jpeg | Statement import — extraction | "16 transactions found", period, statement closing balance. |
| 06-import-review.jpeg | Statement import — AI review | **Money shot.** Balance reconciliation + variance guardrail, cleaned merchants, AI categories w/ confidence %, transfer detection. Hero feature. |
| 07-transactions.jpeg | Transactions | Filters + multi-currency ledger (Wise USD, Emirates NBD AED, Kiwibank NZD). |
| 08-analytics.jpeg | Analytics | YTD cards + Spending Trends line chart + Category Comparison. |
| 09-budget.jpeg | Budget | Budget-vs-actual grid by month, currency toggle, over-budget flags. |
| 10-goals.jpeg | Goals | Progress cards + "At current pace → Aug 2026" auto-timeline from real savings rate. |
| 11-insurance.jpeg | Insurance | Multi-currency premiums, policies-by-type donut, **overdue reminder**. |
| 12-properties.jpeg | Properties | 4 properties across Waikato / Auckland / Dubai / Kerala (expat story). Crop above "Area by Land Type" (empty chart). |
| 13-fixed-deposits.jpeg | Fixed deposits | Multi-currency principal/maturity/interest, deposits-by-bank donut. |
| 14-family-vault.jpeg | Family vault | People/documents, category donut, emergency contacts. Crop above passport cards (seeded titles say "Pashu"). |
| 15-reports.jpeg | Reports | Income statement + Excel/PDF export. |
| 16-nl-entry.jpeg | Natural-language entry | Add Transaction modal: typed phrase → Claude fills amount/merchant/category ("Dining Out"). Also shows Attach Receipt (OCR). |

**Not captured (represent as a designed card):** monthly AI insights — the live
generation errored in local dev (a client request-body bug), but the feature is
verified in code (`/api/insights`, Claude Haiku, warning/tip/achievement chips).
The site will show a styled, honest insight card, not a fake screenshot.
