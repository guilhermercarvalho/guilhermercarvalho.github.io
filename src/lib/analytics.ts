import ReactGA from "react-ga4";

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export const initGA = () => {
  if (MEASUREMENT_ID) {
    ReactGA.initialize(MEASUREMENT_ID);
  } else {
    console.warn("Google Analytics Measurement ID não definido.");
  }
};

export const trackPageView = (pagePath: string) => {
  if (MEASUREMENT_ID) {
    ReactGA.send({ hitType: "pageview", page: pagePath });
  }
};

export const trackEvent = (category: string, action: string, label?: string) => {
  if (MEASUREMENT_ID) {
    ReactGA.event({
      category,
      action,
      label,
    });
  }
};
