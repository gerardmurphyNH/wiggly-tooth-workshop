// Google Analytics 4 helper functions
import { GA_MEASUREMENT_ID } from "./config";

// Check if GA is configured and loaded
const isGAConfigured = (): boolean => {
  return (
    GA_MEASUREMENT_ID !== "G-XXXXXXXXXX" &&
    typeof window !== "undefined" &&
    typeof window.gtag === "function"
  );
};

// Track custom events
export const trackEvent = (
  eventName: string,
  parameters?: Record<string, string | number | boolean>
): void => {
  if (!isGAConfigured()) {
    console.log("[Analytics] GA not configured — event dropped:", eventName, parameters);
    return;
  }

  try {
    window.gtag("event", eventName, parameters);
    // Log in dev so you can verify events fire without opening GA4 DebugView
    if (import.meta.env.DEV) {
      console.log("[Analytics] ✓ Event sent:", eventName, parameters);
    }
  } catch (error) {
    console.error("[Analytics] Error tracking event:", error);
  }
};

// ============================================
// CONVERSION EVENT 1 — Email Signup
// ============================================
export const trackSignupSuccess = (virtue?: string): void => {
  // sign_up is the GA4 standard event — already marked as a key event in the GA4 property
  trackEvent("sign_up", {
    method: "workshop_form",
    virtue: virtue || "none",
  });
  // generate_lead is a GA4 recommended event for lead generation
  trackEvent("generate_lead", {
    event_category: "conversion",
    event_label: "workshop_signup",
    virtue: virtue || "none",
    currency: "USD",
    value: 1,
  });
};

export const trackFormStart = (): void => {
  trackEvent("form_start", {
    event_category: "engagement",
    form_name: "workshop_signup",
  });
};

export const trackFormError = (errorType: string): void => {
  trackEvent("form_error", {
    event_category: "engagement",
    form_name: "workshop_signup",
    error_type: errorType,
  });
};

// ============================================
// CONVERSION EVENT 2 — Virtue Quiz
// ============================================
export const trackQuizStart = (): void => {
  trackEvent("quiz_start", {
    event_category: "engagement",
    quiz_name: "virtue_quiz",
  });
};

export const trackQuizAnswer = (questionNumber: number, answer: string): void => {
  trackEvent("quiz_answer", {
    event_category: "engagement",
    quiz_name: "virtue_quiz",
    question_number: questionNumber,
    answer_virtue: answer,
  });
};

export const trackQuizCompletion = (virtue: string): void => {
  // quiz_completion — mark this as a conversion in GA4
  trackEvent("quiz_completion", {
    event_category: "conversion",
    event_label: "virtue_quiz",
    quiz_name: "virtue_quiz",
    result_virtue: virtue,
  });
};

export const trackQuizReset = (): void => {
  trackEvent("quiz_reset", {
    event_category: "engagement",
    quiz_name: "virtue_quiz",
  });
};

// ============================================
// CONVERSION EVENT 3 — Coloring Page Download
// ============================================
export const trackColoringPageDownload = (): void => {
  // file_download is a GA4 recommended event — mark this as a conversion in GA4
  trackEvent("file_download", {
    event_category: "conversion",
    event_label: "coloring_page",
    file_name: "tooth-fairy-coloring-page.pdf",
    file_extension: "pdf",
    link_text: "Download coloring page",
  });
  // Secondary custom event for filtering
  trackEvent("coloring_page_download", {
    event_category: "conversion",
    file_name: "coloring-page.pdf",
  });
};

// ============================================
// TEACHER RESOURCES DOWNLOADS
// ============================================
export const trackTeacherWorksheetDownload = (): void => {
  trackEvent("file_download", {
    event_category: "conversion",
    event_label: "teacher_worksheet",
    file_name: "tooth-fairy-worksheet.pdf",
    file_extension: "pdf",
  });
  trackEvent("teacher_resources_worksheet_download", {
    event_category: "conversion",
  });
};

export const trackTeacherGuideDownload = (): void => {
  trackEvent("file_download", {
    event_category: "conversion",
    event_label: "teacher_guide",
    file_name: "tooth-fairy-teacher-guide.pdf",
    file_extension: "pdf",
  });
  trackEvent("teacher_resources_guide_download", {
    event_category: "conversion",
  });
};

export const trackTeacherColoringDownload = (): void => {
  trackEvent("file_download", {
    event_category: "conversion",
    event_label: "teacher_coloring",
    file_name: "tooth-fairy-coloring-page.pdf",
    file_extension: "pdf",
  });
  trackEvent("teacher_resources_coloring_download", {
    event_category: "conversion",
  });
};

export const trackTeacherBundleDownload = (): void => {
  trackEvent("file_download", {
    event_category: "conversion",
    event_label: "teacher_bundle",
    file_name: "tooth-fairy-activity-bundle.zip",
    file_extension: "zip",
  });
  trackEvent("teacher_resources_bundle_download", {
    event_category: "conversion",
  });
};

export const trackTeacherSignupSubmit = (): void => {
  trackEvent("teacher_resources_signup_submit", {
    event_category: "conversion",
    form_name: "teacher_resources_signup",
  });
};

export const trackTeacherResourcesPageClick = (location: string): void => {
  trackEvent("teacher_resources_page_click", {
    event_category: "engagement",
    click_location: location,
  });
};

// ============================================
// SOCIAL FOLLOW TRACKING
// ============================================
export const trackSocialFollow = (platform: string, location: string): void => {
  trackEvent("social_follow", {
    event_category: "engagement",
    platform,
    link_location: location,
  });
};

// ============================================
// CTA & BUTTON TRACKING
// ============================================
export const trackCTAClick = (location: string): void => {
  trackEvent("cta_click", {
    event_category: "engagement",
    cta_type: "join_workshop",
    cta_location: location,
  });
};

export const trackButtonClick = (buttonName: string, location: string): void => {
  trackEvent("button_click", {
    event_category: "engagement",
    button_name: buttonName,
    button_location: location,
  });
};

// ============================================
// FAQ TRACKING
// ============================================
export const trackFAQOpen = (question: string): void => {
  trackEvent("faq_open", {
    event_category: "engagement",
    faq_question: question,
  });
};

// Type declaration for gtag
declare global {
  interface Window {
    gtag: (
      command: "event" | "config" | "js",
      targetId: string,
      params?: Record<string, unknown>
    ) => void;
    dataLayer: unknown[];
  }
}
