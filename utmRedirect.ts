import { UTMSource, UTM_LINKS, DEFAULT_LINK } from './utmLinks';

export function getRedirectUrl(): string {
  const utmSource = localStorage.getItem('utm_source');
  if (utmSource && Object.values(UTMSource).includes(utmSource as UTMSource)) {
    return UTM_LINKS[utmSource as UTMSource];
  }
  return DEFAULT_LINK;
}

export function redirectToApp(): void {
  window.location.href = getRedirectUrl();
}
