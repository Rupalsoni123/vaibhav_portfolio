// Minimal Analytics component - safe version
export const trackEvent = (action, category = 'engagement', label = '', value = 0) => {
  // Only track if Google Analytics is available
  if (typeof window !== 'undefined' && window.gtag) {
    try {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    } catch (error) {
      // Silently fail
    }
  }
};

export const trackProjectView = (projectName) => {
  trackEvent('view_project', 'projects', projectName);
};

export const trackSkillView = (skillName) => {
  trackEvent('view_skill', 'skills', skillName);
};

export const trackContactFormSubmit = () => {
  trackEvent('submit_form', 'contact', 'contact_form');
};

export const trackResumeDownload = () => {
  trackEvent('download', 'resume', 'pdf_download');
};

export const trackChatbotInteraction = (action, message = '') => {
  trackEvent(action, 'chatbot', message.substring(0, 100));
};

export const trackSocialClick = (platform) => {
  trackEvent('click', 'social', platform);
};

export const trackExternalLink = (url) => {
  trackEvent('click', 'external_link', url);
};

// Hook for tracking in components
export const useAnalytics = () => {
  return {
    trackEvent,
    trackProjectView,
    trackSkillView,
    trackContactFormSubmit,
    trackResumeDownload,
    trackChatbotInteraction,
    trackSocialClick,
    trackExternalLink,
  };
};

// Minimal component that does nothing
const Analytics = () => {
  return null;
};

export default Analytics;
