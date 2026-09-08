# Expense Analyzer Official Website (GitHub Pages)

This folder (`docs/`) contains the complete physical multi-page static website for **Expense Analyzer**, designed for hosting on **GitHub Pages**.

---

## 📂 File & Resource Structure

```text
docs/
├── README.md                # Website & GitHub Pages Documentation (This File)
├── index.html               # Main Landing Page (Hero, Screenshot Carousel, Architecture)
├── features.html            # Complete Feature Matrix & Architecture Flow
├── statement-guide.html     # Statement Upload Parser Guide & 40+ Date Formats
├── privacy.html             # Official Privacy Policy
├── terms.html               # Official Terms of Service
├── contact.html             # About Acube Labs, Contact Form & FAQ
├── css/
│   └── styles.css           # Design System (Plus Jakarta Sans, Emerald #10B981 & Logo Teal)
├── js/
│   └── main.js              # Touch Carousel, Tab Switcher, Accordion & Mobile Drawer Controller
└── assets/
    └── images/
        ├── logo.png         # Official App Logo
        ├── banner.png       # App Dashboard Banner Graphic
        └── ss/              # App Screenshots (SS_1.png through SS_8.png)
            ├── SS_1.png     # Dashboard & Financial Overview
            ├── SS_2.png     # Multi-Bank & Multi-Account Tracker
            ├── SS_3.png     # Statement Upload & Document Parser
            ├── SS_4.png     # Finley AI Assistant
            ├── SS_5.png     # Visual Analytics & Spend Breakdown
            ├── SS_6.png     # Category Budgeting & Spend Caps
            ├── SS_7.png     # Lend & Owe Debt Settlement Tracker
            └── SS_8.png     # Multi-Tenant Profile & Theme Settings
```

---

## 🌐 Website Pages Breakdown

### 1. `index.html` — Main Landing Page
- **Hero Section**: High-impact headline, brand value metrics, CTA buttons, and featured banner image framing.
- **Interactive 8-Screenshot Carousel**: Real app screenshots inside mobile mockups with touch/swipe support, dot indicators, and caption bars.
- **4 Core Architecture Pillars**: Physical Multi-Tenant DB isolation (`expense_analyzer_user.db`), Multi-Bank/Account consolidation, Multi-Document parsing (PDF/Excel/Receipts), and Finley AI Assistant.
- **Privacy & Security Spotlight**: Local-First SQLite storage, zero developer servers, Google Drive backup.

### 2. `features.html` — Complete Feature Matrix & Flow Guide
- **Local-First vs Cloud Comparison Matrix**: Head-to-head architectural comparison table.
- **Multi-Tenant Isolation Flow**: Step-by-step walkthrough of SQLite file switching on shared devices.
- **Comprehensive Feature Grid**: Multi-bank consolidation, PDF/Excel engine, OpenCV receipt scanner, rule engine, debt settlement tracker, and encrypted backups.

### 3. `statement-guide.html` — Statement Upload & Supporting Docs Guide
- **Supported Formats**: Digital PDF (with password support) and Excel (`.xlsx`/`.xls`).
- **Recognized Column Headers Matcher**: Table of mapped keywords for Date, Description, Debit, Credit, Unified Amount, and Balance.
- **40+ Date Formats Reference**: Full specification table covering numeric, ISO, US, month names, timestamps, and Excel serial dates (`46113`).
- **Document Rejection Criteria**: Transparent documentation of the 6 strict auto-rejection rules (scanned PDF images without text, utility bills, medical invoices, telecom/school fees).

### 4. `privacy.html` — Privacy Policy
- Complete text of the official Expense Analyzer Privacy Policy, formatted with clean sections, anchor links, and data retention rules.

### 5. `terms.html` — Terms of Service
- Complete text of the official Expense Analyzer Terms of Service covering service description, no financial advice disclaimers, AI verification, and liability limits.

### 6. `contact.html` — About Us & Contact Support
- **About Acube Labs**: Mission statement behind local-first financial engineering and privacy.
- **Direct Support**: `acubelabs.dev@gmail.com` direct link.
- **Interactive Contact Form**: HTML contact form with name, email, topic selector, and message body.
- **Frequently Asked Questions (FAQ)**: Accordion answers regarding local storage, statement privacy, multi-tenant databases, and backups.

---

## 🎨 Design System & Styling Rules

* **Typography**: `@import` of **Plus Jakarta Sans** and **Outfit** from Google Fonts.
* **Color Palette**:
  * Primary Emerald: `#10B981`
  * Secondary Teal: `#00C9A7`
  * Accent Blue: `#3B82F6`
  * Background Dark: `#090D14` & Surface `#111723`
  * Glassmorphic Cards: `rgba(23, 32, 46, 0.7)` with `1px solid rgba(255, 255, 255, 0.08)`
* **Zero AI Cliché Icons**: Hand-crafted SVG icons representing actual financial, bank, and database concepts.

---

## 🚀 How to Deploy on GitHub Pages

1. Commit and push the `docs/` folder to your GitHub repository.
2. In your GitHub repository, navigate to **Settings > Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`.
4. Select branch `main` (or `master`) and folder **/docs**, then click **Save**.
5. Your website will be live at `https://<your-github-username>.github.io/<repository-name>/`.
