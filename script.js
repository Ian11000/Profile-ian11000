// Minimal script for the professional portfolio.
// No heavy animations or canvas. Kept for future small enhancements only (e.g. smooth anchors if needed).
// The page is intentionally clean and text-focused.

console.log('%c[Lavian Dsouza Portfolio] Clean professional version loaded.', 'color:#6b7280');

// Certifications data embedded here (from certifications.json) so the list shows when you double-click index.html directly.
// (fetch doesn't work reliably on raw file:// )
const CERTS_DATA = [
  {"name":"IBM Data Analyst Professional Certificate","provider":"IBM","icon":"ibm","link":"https://coursera.org/share/b11a9e8e001eee8b900df7b7f7ae78f0","pdf":"ibm-data-analyst.pdf","date":"2025","description":"Mastered the complete data analytics workflow — from sourcing and cleaning data to building visualizations and generating actionable insights using Excel, Python (Pandas, NumPy), Jupyter Notebooks, and IBM Cognos Analytics."},
  {"name":"Snowflake Data Engineering Professional Certificate","provider":"Snowflake","icon":"snowflake","link":"https://coursera.org/share/db52f7b411426d8ba19310166d401cca","pdf":"snowflake-data-engineering.pdf","date":"2025","description":"Developed expertise in modern cloud data engineering with Snowflake, including advanced SQL, data transformation, warehousing architecture, and building scalable analytics pipelines."},
  {"name":"IBM Data Engineering Professional Certificate","provider":"IBM","icon":"ibm","link":"https://coursera.org/share/7ca8d1846fc398d8769326e008604958","pdf":"ibm-data-engineering.pdf","date":"2025","description":"Built production-grade data engineering skills including Python, SQL, ETL processes, relational and NoSQL databases, big data technologies, and Apache Spark for large-scale data pipelines."},
  {"name":"BI Essentials for Finance Analysts (Power BI Edition)","provider":"Corporate Finance Institute","link":"https://coursera.org/share/3522933b56ec904625fc2ae3289c9879","pdf":"bi-finance-powerbi.pdf","date":"2026","description":"Advanced data visualization and financial analytics using Power BI, including data modeling, DAX, and building executive-ready dashboards from financial statements and operational data."},
  {"name":"BI Essentials for Finance Analysts (Tableau Edition)","provider":"Corporate Finance Institute","link":"https://coursera.org/share/feb0b30661fd41862c24a74e43b40c4f","pdf":"bi-finance-tableau.pdf","date":"2026","description":"Developed advanced Tableau skills for financial analysis, including calculated fields, LOD expressions, interactive dashboards, and SQL integration for e-commerce and financial metrics."},
  {"name":"Meta Data Analyst","provider":"Meta","icon":"meta","link":"https://coursera.org/share/612edae63a70914c83bdd513a4169030","pdf":"meta-data-analyst.pdf","date":"2025","description":"Gained comprehensive data analytics expertise using the OSEMN framework, advanced SQL, spreadsheet-based data cleaning, Python for analysis, statistics, and data management best practices."},
  {"name":"Data Science Fundamentals","provider":"University of California","link":"https://coursera.org/share/eae4a92277e681b4980540fad931a51e","pdf":"data-science-fundamentals.pdf","date":"2025","description":"Built a strong foundation in data science methodology, statistical modeling, data mining algorithms, big data techniques, and data quality management across the full analytics lifecycle."},
  {"name":"SQL for Any IT Professional","provider":"Pearson","link":"https://coursera.org/share/1d611d12dc3b74070c500d77f114e7b2","pdf":"sql-it-professional.pdf","date":"2025","description":"Developed professional-grade SQL skills for querying, managing, and optimizing relational databases — essential for data professionals working with modern enterprise data systems."},
  {"name":"Google Data Analytics","provider":"Google","icon":"google","link":"https://coursera.org/share/47e56dbf58d5c1c2d39d09aef2c207db","pdf":"google-data-analytics.pdf","date":"2025","description":"Completed Google's industry-leading program covering data preparation, analysis, visualization, and storytelling using spreadsheets, SQL, Tableau, and R to drive business decisions."},
  {"name":"Generative AI for Growth Marketing","provider":"IBM - Starweaver","icon":"ibm","link":"https://coursera.org/share/9d70c6815fe907efa34661a7955a4d2c","pdf":"generative-ai-growth-marketing.pdf","date":"2025","description":"Learned to apply Generative AI and automation across the full marketing funnel, including AI-powered content creation, customer segmentation, campaign strategy, and performance tracking."},
  {"name":"Oracle Cloud and AI","provider":"Oracle","icon":"oracle","link":"https://coursera.org/share/24d316c186722556041f60386a406f92","pdf":"oracle-cloud-ai.pdf","date":"2025","description":"Gained hands-on experience with Oracle Cloud infrastructure, enterprise applications, and integrating Generative AI to build intelligent, real-world business solutions."},
  {"name":"Google IT Support","provider":"Google","icon":"google","link":"https://coursera.org/share/a0b3e0ac7abc63b83d9922ed377f175d","pdf":"google-it-support.pdf","date":"2024","description":"Developed foundational IT support skills including troubleshooting, networking, operating systems, system administration, security, and customer service best practices."},
  {"name":"Google Cybersecurity","provider":"Google","icon":"google","link":"https://coursera.org/share/2eb505558df09804b1cb3fbe7ef2c2f4","pdf":"google-cybersecurity.pdf","date":"2024","description":"Built practical cybersecurity skills covering threat identification, risk mitigation, Python for security, Linux, SQL, SIEM tools, and intrusion detection systems."},
  {"name":"Introduction to MongoDB","provider":"MongoDB Inc.","link":"https://coursera.org/share/ad818b73c6db3ea6ddde392b93f23be7","pdf":"mongodb-introduction.pdf","date":"2025","description":"Learned to design data models, perform CRUD operations, build aggregation pipelines, create indexes, and implement full-text search with MongoDB Atlas."},
  {"name":"Data Management with Databricks: Big Data with Delta Lakes","provider":"Databricks","link":"https://coursera.org/share/20682ebc5ce334adb1a9458b8ea75da7","pdf":"databricks-delta-lakes.pdf","date":"2025","description":"Mastered Delta Lake architecture on Databricks, including creating and transforming Delta Tables with Python and SQL, merge operations, time travel, and building reliable data pipelines."},
  {"name":"The Data Science Course: Complete Data Science Bootcamp 2026","provider":"Udemy","icon":"udemy","link":"https://www.udemy.com/certificate/UC-260788b7-17de-404f-a2d2-f4aa588c5e5c/","pdf":"udemy-data-science-bootcamp.pdf","date":"2026","description":"Comprehensive training covering mathematics, statistics, Python programming, advanced statistical modeling, machine learning, and deep learning for end-to-end data science projects."},
  {"name":"Mastering Data Cleansing: Techniques and Best Practices","provider":"Udemy","icon":"udemy","link":"https://www.udemy.com/certificate/UC-fcdec413-0b6b-4b37-9fe1-3d07cadf8b2a/","pdf":"udemy-data-cleansing.pdf","date":"2025","description":"Developed advanced techniques for data cleaning, transformation, and quality assurance using Python and industry best practices to prepare reliable datasets for analysis."}
];

function loadCertifications() {
  const container = document.getElementById('cert-list');
  if (!container) return;

  const certs = CERTS_DATA;

  if (!Array.isArray(certs) || certs.length === 0) {
    container.innerHTML = '<div class="text-[#6b7280]">No certifications added yet.</div>';
    return;
  }

  container.innerHTML = '';

  certs.forEach(cert => {
    const item = document.createElement('div');
    item.className = 'py-2 border-b border-[#e5e7eb] last:border-b-0';

    let iconHtml = '';
    if (cert.icon) {
      iconHtml = `<img src="https://cdn.simpleicons.org/${cert.icon}" style="width:16px;height:16px;vertical-align:middle;margin-right:8px;" alt="${cert.provider || ''}">`;
    }

    let html = `<div class="flex items-start gap-2">`;
    html += `<div class="flex-shrink-0 mt-0.5">${iconHtml}</div>`;
    html += `<div class="flex-1">`;
    html += `<a href="${cert.link}" target="_blank" rel="noopener" class="font-medium hover:underline">${cert.name}</a>`;

    if (cert.provider || cert.date) {
      html += ` <span class="text-[#6b7280] text-sm">`;
      if (cert.provider) html += cert.provider;
      if (cert.provider && cert.date) html += ' • ';
      if (cert.date) html += cert.date;
      html += `</span>`;
    }
    html += `</div></div>`;

    if (cert.description) {
      html += `<div class="pl-6 mt-1 text-sm text-[#4b5563] leading-snug">${cert.description}</div>`;
    }

    if (cert.pdf) {
      html += `<div class="pl-6 mt-1">
        <a href="certificates/${cert.pdf}" target="_blank" class="inline-flex items-center text-xs font-medium text-[#1e40af] hover:underline">📄 View certificate (PDF)</a>
      </div>`;
    }

    item.innerHTML = html;
    container.appendChild(item);
  });
}

// Run after DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadCertifications);
} else {
  loadCertifications();
}