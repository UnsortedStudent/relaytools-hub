# Awesome RelayTools — 40 Public-Data APIs, MCP Servers & 12 Free Browser Tools

[![Public-Data APIs](https://img.shields.io/badge/Public--Data_APIs-40-0f766e?style=flat-square)](https://apify.com/regenerative_cornice)
[![Live in Apify Store](https://img.shields.io/badge/Live_in_Apify_Store-5-047857?style=flat-square)](https://apify.com/regenerative_cornice)
[![Free Browser Tools](https://img.shields.io/badge/Free_Browser_Tools-12-1d4ed8?style=flat-square)](https://unsortedstudent.github.io/relaytools-hub/)
[![MCP Ready](https://img.shields.io/badge/MCP-Claude_%7C_Cursor_%7C_Windsurf_%7C_n8n-7c3aed?style=flat-square)](https://mcp.apify.com)
[![Pricing](https://img.shields.io/badge/Pay--Per--Event-$0.002--$0.008-b45309?style=flat-square)](https://unsortedstudent.github.io/relaytools-hub/catalog.html)

A curated fleet of **40 cloud-verified, zero-key public-data APIs & Model Context Protocol (MCP) servers** on [Apify Store](https://apify.com/regenerative_cornice), paired with **12 free zero-signup interactive browser tools** on [RelayTools Hub](https://unsortedstudent.github.io/relaytools-hub/).

- **Live Web Hub (12 Free Tools):** [https://unsortedstudent.github.io/relaytools-hub/](https://unsortedstudent.github.io/relaytools-hub/)
- **Searchable 40-API Catalog:** [https://unsortedstudent.github.io/relaytools-hub/catalog.html](https://unsortedstudent.github.io/relaytools-hub/catalog.html)
- **MCP Setup Guide (Claude / Cursor / Windsurf / n8n):** [https://unsortedstudent.github.io/relaytools-hub/mcp-guide.html](https://unsortedstudent.github.io/relaytools-hub/mcp-guide.html)
- **Official Apify Creator Store:** [https://apify.com/regenerative_cornice](https://apify.com/regenerative_cornice)

---

## 60-Second MCP Quickstart (Claude Desktop & Cursor)

Connect live vulnerability feeds, passive DNS/DMARC audits, SEC Form D filings, FDA recalls, and website profiling directly to your AI assistant using Apify's official MCP server:

```json
{
  "mcpServers": {
    "apify-relaytools": {
      "command": "npx",
      "args": [
        "-y",
        "@apify/actors-mcp-server",
        "--actors",
        "regenerative_cornice/email-auth-dns-auditor,regenerative_cornice/cve-kev-security-intel,regenerative_cornice/fda-recalls-compliance-monitor,regenerative_cornice/sec-edgar-form-d-fundraising,regenerative_cornice/website-tech-security-profiler"
      ],
      "env": {
        "APIFY_TOKEN": "<YOUR_APIFY_API_TOKEN>"
      }
    }
  }
}
```

### Python SDK Quickstart (`pip install apify-client`)

```python
from apify_client import ApifyClient

client = ApifyClient("<YOUR_APIFY_API_TOKEN>")
run = client.actor("regenerative_cornice/email-auth-dns-auditor").call(
    run_input={"domains": ["cloudflare.com", "github.com"], "checkSubdomains": True}
)
for row in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(row["domain"], row["grade"], row["spfLookups"], row["dmarcPolicy"])
```

### REST API / n8n One-Liner (`curl`)

```bash
curl -X POST "https://api.apify.com/v2/acts/regenerative_cornice~cve-kev-security-intel/run-sync-get-dataset-items" \
  -H "Authorization: Bearer $APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"mode": "kev_recent", "maxItems": 10}'
```

---

## 12 Free Interactive Browser Tools

All tools below run directly in the browser with zero sign-up or API keys:

| # | Free Browser Tool | Category | Paired Bulk API(s) |
|---:|---|---|---|
| 1 | [Live Email Auth, SPF, DMARC & DKIM DNS Checker](https://unsortedstudent.github.io/relaytools-hub/tools/email-auth-checker.html) | Security & DNS | [`email-auth-dns-auditor`](https://apify.com/regenerative_cornice/email-auth-dns-auditor) |
| 2 | [SPF Record Merger, 10-Lookup Simulator & 3-Phase DMARC Builder](https://unsortedstudent.github.io/relaytools-hub/tools/dmarc-spf-generator.html) | Security & DNS | [`email-auth-dns-auditor`](https://apify.com/regenerative_cornice/email-auth-dns-auditor) |
| 3 | [CVSS v3.1 Severity Calculator & HTTP Security Headers Builder](https://unsortedstudent.github.io/relaytools-hub/tools/cvss-security-headers-tool.html) | Security & DNS | [`cve-kev-security-intel`](https://apify.com/regenerative_cornice/cve-kev-security-intel), [`website-tech-security-profiler`](https://apify.com/regenerative_cornice/website-tech-security-profiler) |
| 4 | [JSON/CSV Flattener, Deduplicator & Schema Generator](https://unsortedstudent.github.io/relaytools-hub/tools/json-csv-cleaner.html) | AI & Dev | [`json-csv-schema-cleaner-utility`](https://apify.com/regenerative_cornice/json-csv-schema-cleaner-utility) |
| 5 | [HTML-to-Clean-Markdown & LLM RAG Chunk Splitter](https://unsortedstudent.github.io/relaytools-hub/tools/html-to-markdown-rag.html) | AI & Dev | [`web-markdown-llm-cleaner`](https://apify.com/regenerative_cornice/web-markdown-llm-cleaner), [`pdf-table-json-extractor`](https://apify.com/regenerative_cornice/pdf-table-json-extractor) |
| 6 | [Live Hacker News Trends & GitHub Repo Health Explorer](https://unsortedstudent.github.io/relaytools-hub/tools/hackernews-github-explorer.html) | AI & Dev | [`hackernews-trends-jobs-extractor`](https://apify.com/regenerative_cornice/hackernews-trends-jobs-extractor), [`github-repo-signals-analyzer`](https://apify.com/regenerative_cornice/github-repo-signals-analyzer) |
| 7 | [Live ECB FX Currency Converter & U.S. Treasury Interest Rates](https://unsortedstudent.github.io/relaytools-hub/tools/fx-treasury-calculator.html) | Finance & Research | [`open-exchange-crypto-fx-rates`](https://apify.com/regenerative_cornice/open-exchange-crypto-fx-rates), [`us-treasury-fiscal-rates-api`](https://apify.com/regenerative_cornice/us-treasury-fiscal-rates-api) |
| 8 | [Live DOI to APA 7th & BibTeX Citation Generator + OpenAlex Search](https://unsortedstudent.github.io/relaytools-hub/tools/doi-citation-bibtex.html) | Finance & Research | [`crossref-doi-citation-resolver`](https://apify.com/regenerative_cornice/crossref-doi-citation-resolver), [`openalex-academic-citations-api`](https://apify.com/regenerative_cornice/openalex-academic-citations-api) |
| 9 | [Live US ZIP Geo, Global Weather/AQI & GLEIF LEI Verifier](https://unsortedstudent.github.io/relaytools-hub/tools/zip-weather-lei-lookup.html) | Finance & Research | [`us-zip-census-geo-enricher`](https://apify.com/regenerative_cornice/us-zip-census-geo-enricher), [`open-meteo-climate-weather-api`](https://apify.com/regenerative_cornice/open-meteo-climate-weather-api), [`gleif-lei-company-registry`](https://apify.com/regenerative_cornice/gleif-lei-company-registry) |
| 10 | [Google SERP Preview & Schema.org JSON-LD Builder](https://unsortedstudent.github.io/relaytools-hub/tools/seo-meta-serp-preview.html) | SEO & Compliance | [`seo-onpage-broken-links-auditor`](https://apify.com/regenerative_cornice/seo-onpage-broken-links-auditor), [`schema-org-jsonld-contact-miner`](https://apify.com/regenerative_cornice/schema-org-jsonld-contact-miner) |
| 11 | [Live U.S. FDA Recall & Federal Register Regulatory Search](https://unsortedstudent.github.io/relaytools-hub/tools/fda-fedreg-compliance-search.html) | SEO & Compliance | [`fda-recalls-compliance-monitor`](https://apify.com/regenerative_cornice/fda-recalls-compliance-monitor), [`federal-register-rules-monitor`](https://apify.com/regenerative_cornice/federal-register-rules-monitor) |
| 12 | [AI-Aware robots.txt (GPTBot/ClaudeBot) & XML Sitemap Generator](https://unsortedstudent.github.io/relaytools-hub/tools/robots-sitemap-builder.html) | SEO & Compliance | [`sitemap-url-inventory-auditor`](https://apify.com/regenerative_cornice/sitemap-url-inventory-auditor) |

---

## Complete Catalog: All 40 Deployed Public-Data APIs & MCP Servers

Status legend: **Live** = publicly listed on Apify Store right now (5 Actors) &bull; **Launching Soon** = built, unit-tested, cloud smoke-verified, and queued for Store listing (35 Actors).

### Security, DNS & Infrastructure (4)

Real-time vulnerability feeds, passive DNS email authentication auditing, website security headers, SSL expiry, and RDAP intelligence.

| Status | API / MCP Server | PPE Event & Price | Summary |
|---|---|---|---|
| 🟢 Live | **[CVE, CISA KEV & Open-Source Package Vulnerability Intelligence](https://apify.com/regenerative_cornice/cve-kev-security-intel)**<br>`regenerative_cornice/cve-kev-security-intel` | `vulnerability-record`<br>$0.005 / event | Unified real-time cybersecurity intelligence from CISA Known Exploited Vulnerabilities (KEV), OSV.dev (npm, PyPI, Go, Maven, Cargo, NuGet), and NIST NVD CVE API v2. Built for DevSecOps alerts, MSPs, n8n Slack bots, and AI coding agents (MCP). |
| 🟢 Live | **[Bulk Email Auth, SPF, DKIM, DMARC & DNSBL Auditor](https://apify.com/regenerative_cornice/email-auth-dns-auditor)**<br>`regenerative_cornice/email-auth-dns-auditor` | `domain-audited`<br>$0.005 / event | Bulk passive DNS email authentication auditor for 1 to 1,000+ domains: recursive SPF lookup counting, DMARC alignment & duplicate checks, Google/M365/GoHighLevel/Klaviyo DKIM & subdomain scan, MTA-STS, RDAP age, safe DNSBL check, and 0-100 grade. |
| 🟢 Live | **[Website Tech-Stack, Security Headers & SSL Profiler](https://apify.com/regenerative_cornice/website-tech-security-profiler)**<br>`regenerative_cornice/website-tech-security-profiler` | `website-profiled`<br>$0.005 / event | Bulk website profiler extracting 50+ tech-stack fingerprints (Shopify, WordPress, Webflow, Next.js, Klaviyo, HubSpot, Stripe), HTTP security header grade, TLS/SSL expiry days, robots/sitemap stats, and public social/email links for n8n & MCP. |
| 🟡 Launching Soon | **[Bulk Domain RDAP WHOIS, DNS Records & SSL Expiry API](https://apify.com/regenerative_cornice/domain-rdap-dns-ssl-intel)**<br>`regenerative_cornice/domain-rdap-dns-ssl-intel` | `domain-intel`<br>$0.005 / event | Bulk domain WHOIS/RDAP ownership, registrar, age & expiry countdown, full public DNS (A, AAAA, NS, MX, CAA, SOA, TXT), DNSSEC, BGP ASN/CDN hosting detection & TLS/SSL certificate expiry intelligence for domain investors, security teams, brand protection, and MSPs. |

### Finance, SEC Filings, FX & Corporate KYB (6)

Structured SEC EDGAR Form D fundraising & XBRL financials, U.S. Treasury rates, ECB FX & crypto markets, World Bank macro series, and GLEIF LEI records.

| Status | API / MCP Server | PPE Event & Price | Summary |
|---|---|---|---|
| 🟢 Live | **[SEC EDGAR Form D Fundraising & 8-K/10-K Extractor](https://apify.com/regenerative_cornice/sec-edgar-form-d-fundraising)**<br>`regenerative_cornice/sec-edgar-form-d-fundraising` | `filing-extracted`<br>$0.006 / event | Extract freshly funded startups & private rounds from official SEC EDGAR Form D filings (offering amount, amount sold, industry, state, executives) plus 8-K/10-K/10-Q/S-1 search. Built for VCs, B2B sales enrichment, n8n, and AI agents (MCP). |
| 🟡 Launching Soon | **[SEC EDGAR XBRL Company Financials by Ticker API](https://apify.com/regenerative_cornice/sec-xbrl-company-financials)**<br>`regenerative_cornice/sec-xbrl-company-financials` | `company-financials`<br>$0.008 / event | Extract normalized annual (10-K) & quarterly (10-Q) financials by stock ticker from official SEC EDGAR XBRL APIs: revenue, net income, operating income, assets, liabilities, cash, debt, equity, EPS, free cash flow & YoY growth. Built for quants, n8n & AI agents. |
| 🟡 Launching Soon | **[US Treasury Interest Rates, Debt & FX Fiscal Data API](https://apify.com/regenerative_cornice/us-treasury-fiscal-rates-api)**<br>`regenerative_cornice/us-treasury-fiscal-rates-api` | `treasury-record`<br>$0.004 / event | Extract official U.S. Treasury average interest rates (Bills, Notes, Bonds, TIPS), daily National Debt to the Penny, Treasury FX exchange rates, and Monthly Treasury Statements from the Fiscal Data API. Free government JSON, zero API key; built for finance, n8n & MCP. |
| 🟡 Launching Soon | **[ECB Global FX Exchange Rates & Crypto Markets API](https://apify.com/regenerative_cornice/open-exchange-crypto-fx-rates)**<br>`regenerative_cornice/open-exchange-crypto-fx-rates` | `rate-record`<br>$0.003 / event | Fetch official European Central Bank (ECB) fiat FX rates (latest & historical) across 30+ currencies with exact amount conversion, plus live top crypto market prices, market cap, 24h volume & ATH. Free public JSON, zero API keys; built for fintech, ERP, n8n & MCP. |
| 🟡 Launching Soon | **[World Bank Macro Economics, GDP & Inflation Data API](https://apify.com/regenerative_cornice/worldbank-macro-indicators-api)**<br>`regenerative_cornice/worldbank-macro-indicators-api` | `indicator-series`<br>$0.004 / event | Extract official World Bank API v2 macroeconomic time series (GDP, GDP per capita, CPI inflation, unemployment, population & custom WDI indicators) across 200+ countries with YoY growth and region/income metadata. Zero API key; ready for analysts, n8n & AI. |
| 🟡 Launching Soon | **[GLEIF Global Legal Entity (LEI) & KYB Registry API](https://apify.com/regenerative_cornice/gleif-lei-company-registry)**<br>`regenerative_cornice/gleif-lei-company-registry` | `lei-record`<br>$0.005 / event | Verify global companies via the official GLEIF LEI REST API (3.5M+ entities). Look up by name, LEI code, BIC/SWIFT, or country to extract official legal name, status, legal & HQ addresses, jurisdiction, legal form, registration authority ID, BICs, and renewal dates. |

### Government, Regulatory Compliance & Geospatial (6)

Official U.S. FDA recalls & 510(k) clearances, Federal Register rules, USAspending GovCon awards, USGS/NOAA hazard alerts, U.S. Census ZIP demographics, and Open-Meteo climate data.

| Status | API / MCP Server | PPE Event & Price | Summary |
|---|---|---|---|
| 🟢 Live | **[FDA Recalls, Enforcement & 510(k) Compliance Monitor](https://apify.com/regenerative_cornice/fda-recalls-compliance-monitor)**<br>`regenerative_cornice/fda-recalls-compliance-monitor` | `fda-record`<br>$0.006 / event | Extract structured U.S. FDA Food, Drug, and Medical Device recalls plus 510(k) clearances from the official openFDA API. Filter by recall class, keyword, state, or date range for compliance, legal-tech, n8n alerts, and AI agents (MCP). |
| 🟡 Launching Soon | **[US Federal Contracts & GovCon Awards Extractor](https://apify.com/regenerative_cornice/usaspending-federal-contracts)**<br>`regenerative_cornice/usaspending-federal-contracts` | `contract-award`<br>$0.006 / event | Extract live U.S. federal contracts, grants, and IDVs from the official Treasury USAspending.gov REST API v2. Filter by keywords, NAICS codes, state, award amount, and date range for GovCon BD, B2B sales triggers, n8n/Make workflows, and AI agents (MCP). |
| 🟡 Launching Soon | **[US Federal Register Rules & Executive Orders Monitor](https://apify.com/regenerative_cornice/federal-register-rules-monitor)**<br>`regenerative_cornice/federal-register-rules-monitor` | `regulation-record`<br>$0.005 / event | Monitor official U.S. Federal Register final rules, proposed rules, agency notices, and executive orders via the Federal Register API v1. Filter by keyword, agency slug, document type, significance, and days back for legal, compliance, n8n, and AI agents (MCP). |
| 🟡 Launching Soon | **[USGS Earthquakes & NOAA Severe Weather Alerts API](https://apify.com/regenerative_cornice/usgs-noaa-hazard-alerts-api)**<br>`regenerative_cornice/usgs-noaa-hazard-alerts-api` | `hazard-alert`<br>$0.003 / event | Real-time USGS global earthquakes and NOAA National Weather Service active severe weather alerts (tornado, hurricane, flood, heat, winter storm) in unified JSON. Zero API keys; built for insurtech, supply chain, logistics, n8n, and AI agents (MCP). |
| 🟡 Launching Soon | **[US ZIP Code & Census Demographics Enricher (ACS)](https://apify.com/regenerative_cornice/us-zip-census-geo-enricher)**<br>`regenerative_cornice/us-zip-census-geo-enricher` | `geo-enriched`<br>$0.004 / event | Bulk enrich U.S. ZIP codes with city, state, latitude/longitude, population, median household income, median home value, gross rent, and median age using official public Zippopotam.us and U.S. Census Bureau ACS 5-Year ZCTA data. Zero API key required. |
| 🟡 Launching Soon | **[Global Weather Forecast & Air Quality Bulk API](https://apify.com/regenerative_cornice/open-meteo-climate-weather-api)**<br>`regenerative_cornice/open-meteo-climate-weather-api` | `weather-report`<br>$0.003 / event | Bulk fetch current weather, 7-day forecasts, precipitation, UV index, wind, sunrise/sunset, and US/EU air quality (AQI, PM2.5) for any global cities or lat/lon coordinates via official Open-Meteo APIs. Zero API key required; built for n8n, Make, and AI agents (MCP). |

### AI, RAG, Document Parsing & Data Utilities (4)

LLM-ready webpage Markdown cleaning, PDF table & entity extraction, JSON/CSV schema cleaning, and Wikipedia/Wikidata structured enrichment.

| Status | API / MCP Server | PPE Event & Price | Summary |
|---|---|---|---|
| 🟡 Launching Soon | **[PDF to Structured JSON, Markdown & Entities Extractor](https://apify.com/regenerative_cornice/pdf-table-json-extractor)**<br>`regenerative_cornice/pdf-table-json-extractor` | `pdf-extracted`<br>$0.005 / event | Download 1 to 100+ public PDF URLs with SSRF protection and extract structured JSON, LLM-ready Markdown, RAG chunks, metadata, emails, URLs, dates, phone numbers, and currency amounts. Zero browser overhead, built for n8n, Make, RAG, and MCP. |
| 🟡 Launching Soon | **[Webpage to Clean LLM Markdown & RAG Chunks Converter](https://apify.com/regenerative_cornice/web-markdown-llm-cleaner)**<br>`regenerative_cornice/web-markdown-llm-cleaner` | `page-cleaned`<br>$0.004 / event | Convert public web URLs into clean, noise-free LLM-ready Markdown, RAG text chunks, headings, links, OpenGraph & JSON-LD metadata. Strips scripts, navs, footers, ads & cookie banners with strict SSRF guards for AI agents, RAG pipelines, n8n, Make & MCP. |
| 🟡 Launching Soon | **[JSON & CSV Deduplicator, Flattener & Schema Cleaner](https://apify.com/regenerative_cornice/json-csv-schema-cleaner-utility)**<br>`regenerative_cornice/json-csv-schema-cleaner-utility` | `dataset-cleaned`<br>$0.003 / event | Clean, flatten, deduplicate, and normalize messy JSON, CSV, or NDJSON datasets with zero browser overhead. Flattens nested objects (a.b.c), trims whitespace, normalizes emails, URLs & ISO dates, strips duplicates, and outputs an inferred JSON Schema + QUALITY_REPORT. |
| 🟡 Launching Soon | **[Wikipedia & Wikidata Structured Entity Enricher](https://apify.com/regenerative_cornice/wikipedia-wikidata-entity-enricher)**<br>`regenerative_cornice/wikipedia-wikidata-entity-enricher` | `entity-enriched`<br>$0.004 / event | Enrich companies, people, topics, and locations via the official Wikimedia REST & Wikidata APIs into structured JSON: summaries, QIDs, websites, founding years, HQ, countries, stock tickers, industries, coordinates, and aliases for RAG, CRM, and AI agents. |

### Academic, Biomedical & Clinical Research (5)

Structured extractors for arXiv papers, OpenAlex scholarly graphs, Crossref DOI/BibTeX resolution, PubMed biomedical literature, and ClinicalTrials.gov pipelines.

| Status | API / MCP Server | PPE Event & Price | Summary |
|---|---|---|---|
| 🟡 Launching Soon | **[arXiv AI & Research Papers Structured JSON Extractor](https://apify.com/regenerative_cornice/arxiv-ai-research-extractor)**<br>`regenerative_cornice/arxiv-ai-research-extractor` | `paper-extracted`<br>$0.004 / event | Query the official arXiv Atom API by keyword, category (cs.AI, cs.LG, cs.CR, q-fin.TR), author, and sort order to extract clean structured JSON papers with titles, authors, abstracts, DOIs, and PDF/abs links for RAG pipelines, n8n, and MCP agents. |
| 🟡 Launching Soon | **[OpenAlex Academic Papers, Citations & Authors API](https://apify.com/regenerative_cornice/openalex-academic-citations-api)**<br>`regenerative_cornice/openalex-academic-citations-api` | `work-extracted`<br>$0.004 / event | Search 250M+ OpenAlex scholarly works for citation counts, reconstructed abstracts, authors, institutions, topics, DOIs, and open-access PDF URLs via the official OpenAlex REST API. Zero API key required—built for R&D, RAG pipelines, n8n, and AI agents (MCP). |
| 🟡 Launching Soon | **[Crossref DOI Metadata, Citations & BibTeX Resolver](https://apify.com/regenerative_cornice/crossref-doi-citation-resolver)**<br>`regenerative_cornice/crossref-doi-citation-resolver` | `doi-resolved`<br>$0.004 / event | Resolve DOIs or search 150M+ Crossref academic works via the official Crossref REST API. Extracts authors, journals, citation counts, funders, licenses, and APA 7th & BibTeX citations for literature reviews, RAG pipelines, n8n workflows, and AI agents (MCP). |
| 🟡 Launching Soon | **[PubMed Biomedical Literature & Abstracts Extractor](https://apify.com/regenerative_cornice/pubmed-biomedical-extractor)**<br>`regenerative_cornice/pubmed-biomedical-extractor` | `pubmed-article`<br>$0.005 / event | Search and extract NIH PubMed biomedical papers, full abstracts, DOIs, PMCIDs, authors, journals, MeSH terms, and article types from the official NCBI E-utilities API. Built for pharma R&D, literature reviews, RAG pipelines, n8n workflows, and AI agents (MCP). |
| 🟡 Launching Soon | **[ClinicalTrials.gov Studies & Biotech Pipeline API](https://apify.com/regenerative_cornice/clinicaltrials-gov-extractor)**<br>`regenerative_cornice/clinicaltrials-gov-extractor` | `trial-extracted`<br>$0.006 / event | Extract structured clinical trials from the official U.S. NIH ClinicalTrials.gov REST API v2. Filter by condition, drug/intervention, sponsor, recruitment status, phase, and country for biotech VCs, pharma intelligence, n8n workflows, and AI agents (MCP). |

### Developer Ecosystems, Packages & Tech Signals (6)

Repository health, package downloads, container image metadata, Hacker News trends, and Stack Exchange Q&A intelligence.

| Status | API / MCP Server | PPE Event & Price | Summary |
|---|---|---|---|
| 🟡 Launching Soon | **[GitHub Repo Health, Releases & Startup Signals API](https://apify.com/regenerative_cornice/github-repo-signals-analyzer)**<br>`regenerative_cornice/github-repo-signals-analyzer` | `repo-analyzed`<br>$0.005 / event | Extract developer & startup traction signals via the official GitHub REST API v3: stars, forks, issues, language share, licenses, topics, latest releases, push freshness, and 0-100 health scores. Built for VCs, recruiters, B2B DevTools, n8n workflows, and AI agents (MCP). |
| 🟡 Launching Soon | **[PyPI & npm Package Downloads, Releases & Intel API](https://apify.com/regenerative_cornice/pypi-npm-package-intel)**<br>`regenerative_cornice/pypi-npm-package-intel` | `package-profiled`<br>$0.004 / event | Extract live PyPI & npm package versions, monthly downloads, licenses, maintainers, dependencies, repo links, Python/Node compatibility, and 0-100 supply-chain freshness scores via official public APIs. Zero API keys. Built for DevTools, VCs, n8n, and AI agents (MCP). |
| 🟡 Launching Soon | **[Crates.io, RubyGems & NuGet Package Intelligence API](https://apify.com/regenerative_cornice/crates-rubygems-nuget-intel)**<br>`regenerative_cornice/crates-rubygems-nuget-intel` | `package-intel`<br>$0.004 / event | Query Rust Crates.io, RubyGems.org, and .NET NuGet registries in one unified JSON schema for versions, total & recent downloads, licenses, authors/owners, repo links, and update timestamps. Zero API keys. Built for DevTools, AppSec, VCs, n8n, and AI agents (MCP). |
| 🟡 Launching Soon | **[Docker Hub Container Pulls, Tags & Image Intel API](https://apify.com/regenerative_cornice/dockerhub-container-registry-api)**<br>`regenerative_cornice/dockerhub-container-registry-api` | `image-profiled`<br>$0.004 / event | Extract Docker Hub pull counts, stars, latest tags, image sizes (MB), CPU architectures (amd64/arm64), digests, and update freshness via the official Docker Hub API v2. Zero API key—built for DevSecOps, VC tracking, n8n workflows, and AI agents (MCP). |
| 🟡 Launching Soon | **[Hacker News Trends, Show HN & Tech Jobs Extractor](https://apify.com/regenerative_cornice/hackernews-trends-jobs-extractor)**<br>`regenerative_cornice/hackernews-trends-jobs-extractor` | `hn-item`<br>$0.003 / event | Extract Hacker News front-page stories, Show HN launches, Ask HN discussions, comments, and Who is Hiring tech jobs via the official Algolia HN API. Filter by keyword, tag, points, and date with trend velocity metrics for VCs, founders, n8n, and AI agents (MCP). |
| 🟡 Launching Soon | **[Stack Overflow & Stack Exchange Q&A Knowledge API](https://apify.com/regenerative_cornice/stackexchange-qa-knowledge-api)**<br>`regenerative_cornice/stackexchange-qa-knowledge-api` | `qa-item`<br>$0.004 / event | Search Stack Overflow, Server Fault, Super User, Security, DevOps, Stats & 170+ Stack Exchange sites via official API v2.3. Extract structured questions, accepted answers (plain text + code snippets), tags, scores, views, author reputation & links. |

### SEO, E-Commerce, Local Leads & Content Feeds (9)

Technical SEO audits, Schema.org JSON-LD contact mining, recursive sitemaps, Shopify catalogs, OpenStreetMap POIs, WordPress REST, RSS, newsletters, and podcasts.

| Status | API / MCP Server | PPE Event & Price | Summary |
|---|---|---|---|
| 🟡 Launching Soon | **[Bulk On-Page Technical SEO & Broken Links Auditor](https://apify.com/regenerative_cornice/seo-onpage-broken-links-auditor)**<br>`regenerative_cornice/seo-onpage-broken-links-auditor` | `page-audited`<br>$0.005 / event | Bulk technical SEO & broken-link auditor for 1 to 500+ URLs. Audits title & meta length, canonicals, robots noindex/nofollow, H1-H3 structure, missing image alt text, OpenGraph, Twitter Cards, JSON-LD, live 404/5xx broken links, and a 0-100 SEO score & grade. |
| 🟡 Launching Soon | **[Schema.org JSON-LD, Products & Business Info Extractor](https://apify.com/regenerative_cornice/schema-org-jsonld-contact-miner)**<br>`regenerative_cornice/schema-org-jsonld-contact-miner` | `structured-page`<br>$0.004 / event | Extract every Schema.org JSON-LD block (flattening @graph arrays), HTML Microdata itemtype, OpenGraph metadata, and public contact signals (emails, phones, PostalAddress, sameAs social profiles) into clean normalized entities for B2B enrichment, e-commerce, and SEO. |
| 🟡 Launching Soon | **[Recursive XML Sitemap & robots.txt URL Extractor](https://apify.com/regenerative_cornice/sitemap-url-inventory-auditor)**<br>`regenerative_cornice/sitemap-url-inventory-auditor` | `sitemap-url`<br>$0.002 / event | Auto-discover sitemaps from robots.txt and standard fallbacks, recursively expand nested sitemapindex and .xml.gz sitemaps with SSRF & XXE protection, filter URLs by regex, and export clean URL inventory records with lastmod, priority, depth, and section. |
| 🟡 Launching Soon | **[Shopify Store Catalog, Pricing & App-Stack Analyzer](https://apify.com/regenerative_cornice/shopify-store-catalog-analyzer)**<br>`regenerative_cornice/shopify-store-catalog-analyzer` | `product-extracted`<br>$0.004 / event | Extract public Shopify product catalogs, variant pricing, discount percentages, stock status, collections, and 30+ installed Shopify apps (Klaviyo, Yotpo, Recharge, Judge.me, Gorgias, Attentive, Triple Whale, Loox, Okendo, Smile.io) for DTC monitors, n8n & MCP. |
| 🟡 Launching Soon | **[OpenStreetMap Local Business & POI Leads Extractor](https://apify.com/regenerative_cornice/osm-overpass-local-poi-extractor)**<br>`regenerative_cornice/osm-overpass-local-poi-extractor` | `poi-extracted`<br>$0.004 / event | Extract local businesses & POIs (cafes, restaurants, dentists, pharmacies, gyms, hotels, EV chargers, law firms, supermarkets, banks) around any city or lat/lon radius via OpenStreetMap Nominatim & Overpass APIs with addresses, phones, websites & hours. |
| 🟡 Launching Soon | **[WordPress REST API Posts, Pages & Content Extractor](https://apify.com/regenerative_cornice/wordpress-rest-content-extractor)**<br>`regenerative_cornice/wordpress-rest-content-extractor` | `wp-post-extracted`<br>$0.004 / event | Extract structured posts, pages, clean Markdown, plain text, categories, tags, excerpts, featured images, and site metadata from any public WordPress site via the official WP REST API (/wp-json/wp/v2). |
| 🟡 Launching Soon | **[RSS, Atom & Sitemap Feed to Clean JSON Monitor](https://apify.com/regenerative_cornice/rss-changelog-monitor-json)**<br>`regenerative_cornice/rss-changelog-monitor-json` | `feed-item`<br>$0.003 / event | Monitor 1 to 200+ public RSS 2.0, Atom 1.0 & XML Sitemap feeds concurrently into clean, deduplicated JSON with keyword/recency filters, SHA-256 contentHash change detection, plain-text summaries & SSRF/XXE protection for n8n, Make & AI agents. |
| 🟡 Launching Soon | **[Substack & Public Newsletter Archive JSON Extractor](https://apify.com/regenerative_cornice/substack-ghost-newsletter-api)**<br>`regenerative_cornice/substack-ghost-newsletter-api` | `newsletter-post`<br>$0.004 / event | Extract public Substack, Ghost, Beehiiv, and RSS/Atom newsletter posts, subtitles, authors, publication dates, tags, word counts, clean Markdown summaries, and canonical URLs in JSON. Strictly public free articles only, SSRF/XXE-safe, ready for AI RAG, n8n & MCP. |
| 🟡 Launching Soon | **[Podcast Directory & RSS Episodes Audio URL Extractor](https://apify.com/regenerative_cornice/podcast-rss-episodes-extractor)**<br>`regenerative_cornice/podcast-rss-episodes-extractor` | `episode-extracted`<br>$0.004 / event | Search the official Apple Podcasts iTunes directory or parse any public podcast RSS feed into structured episode JSON with direct MP3/audio URLs, durations, show notes, categories, and artwork. SSRF/XXE-safe, zero API key required—ready for Whisper, RAG & AI agents. |

---

## Self-Host the Web Hub for $0/Month

The static web hub under `web_hub/public/` deploys for free on **Cloudflare Pages** or **GitHub Pages** with zero backend servers:

```bash
python web_hub/build_hub.py --base-url https://your-site.pages.dev
```

See the full plain-English walkthrough in [deploy-free.html](https://unsortedstudent.github.io/relaytools-hub/deploy-free.html).

_Catalog automatically generated from `apify_factory/fleet_status.json` (2026-11-22)._
