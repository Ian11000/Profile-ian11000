# Certifications

Drop your Coursera (and other) certificate PDFs in this folder.

## How to add a new certification

1. Edit `certifications.json` (in the parent folder).

2. Add a new object in the array, for example:

```json
{
  "name": "Google Data Analytics Professional Certificate",
  "provider": "Google",
  "link": "https://www.coursera.org/professional-certificates/google-data-analytics",
  "pdf": "google-data-analytics.pdf",
  "date": "2026",
  "description": "Foundational data analytics skills including data cleaning, visualization, and R programming."
}
```

Fields:
- `name`: Full course / certificate name (required)
- `provider`: Issuing organization (e.g. Google, IBM, Coursera)
- `link`: URL to the course page on Coursera (or wherever)
- `pdf`: Exact filename of the PDF certificate you placed in this folder (optional but recommended)
- `date`: Completion year or date (optional)
- `description`: Short one-sentence summary (optional)

3. Save the JSON.

4. Copy the actual PDF certificate file into this `certificates/` folder using the exact name you put in `"pdf"`.

5. Refresh `index.html` in your browser.

The page will automatically pick up the new entries.

---

Tip: Keep the JSON file clean and sorted however you like (newest first, alphabetical, etc.). The site will display them in the order they appear in the file.