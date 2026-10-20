/**
 * Utility to generate and download the standalone single-file HTML presentation.
 * Downloads the complete standalone offline-ready HTML presentation.
 */
export async function downloadStandaloneHtmlFile(filename = 'formation-bpdg-spa-abc-med.html') {
  try {
    const res = await fetch('/formation-bpdg.html');
    if (res.ok) {
      const text = await res.text();
      const blob = new Blob([text], { type: 'text/html;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      return;
    }
  } catch (err) {
    console.warn('Could not fetch /formation-bpdg.html, falling back to document content', err);
  }

  // Fallback to direct DOM export
  const htmlContent = '<!DOCTYPE html>\n' + document.documentElement.outerHTML;
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
