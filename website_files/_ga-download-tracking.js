// The following javascript code is to enable how many times each
// CSV file is downloaded within Google Analytics.
// Quarto will include this code in the html site files via the line in _quarto.yml:
// `include-after-body: "website_files/_ga-download-tracking.js"`

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href$=".csv"]').forEach(function (link) {
    link.addEventListener('click', function () {
      const fileUrl = link.getAttribute('href');
      gtag('event', 'file_download', {
        file_name: fileUrl,
        event_category: 'engagement',
        event_label: fileUrl
      });
    });
  });
});