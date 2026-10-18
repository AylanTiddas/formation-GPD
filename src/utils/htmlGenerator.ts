/**
 * Utility to generate the standalone single-file HTML presentation.
 * Returns the exact standalone HTML string ready for offline viewing or distribution.
 */
export function generateStandaloneHtml(): string {
  // Return the complete standalone HTML code
  return document.documentElement.outerHTML;
}

export function downloadStandaloneHtmlFile(filename = 'formation-bpdg-spa-abc-med.html') {
  const htmlContent = document.documentElement.outerHTML;
  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
