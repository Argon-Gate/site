function trackEvent(eventName: string, params?: Record<string, string | number | boolean>) {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;

    window.gtag('event', eventName, params);
}

export const AnalyticsEvents = {
    whatsappClick: () => trackEvent('whatsapp_click'),

    heroCtaClick: () => trackEvent('hero_cta_click'),

    headerCtaClick: () => trackEvent('header_cta_click'),

    emailCopy: () => trackEvent('email_copy'),

    sectionView: (name: string) => trackEvent('section_view', { section_name: name }),
};
