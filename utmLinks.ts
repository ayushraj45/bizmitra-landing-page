export enum UTMSource {
  MITHYLL = 'mithyll',
  // Add more sources as needed
}

export const UTM_LINKS: Record<UTMSource, string> = {
  [UTMSource.MITHYLL]: 'https://app.bizmitra-ai.com/#/register?utm_source=mithyll&utm_medium=link_click&utm_campaign=intro_offer',
  // Add more mappings as needed
};

export const DEFAULT_LINK = 'https://app.bizmitra-ai.com/#/register';
