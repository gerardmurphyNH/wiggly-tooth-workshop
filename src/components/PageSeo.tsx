import { useEffect } from "react";

interface PageSeoProps {
  /** Full <title> for the page */
  title?: string;
  /** Meta description */
  description?: string;
  /** Canonical URL */
  canonical?: string;
  /** Absolute URL for og:image / twitter:image */
  image?: string;
  /** Keep this page out of search indexes (e.g. the 404 page) */
  noindex?: boolean;
  /** JSON-LD structured data object (or array) */
  jsonLd?: unknown;
}

/**
 * Per-page SEO for this client-rendered SPA.
 *
 * Sets document.title + meta description + canonical via effect (Google renders
 * JS and reads these), and injects JSON-LD structured data as a <script> in the
 * DOM. Replaces the per-page <Helmet> blocks that were lost when react-helmet-async
 * was removed — without adding a dependency.
 */
const PageSeo = ({ title, description, canonical, image, noindex, jsonLd }: PageSeoProps) => {
  useEffect(() => {
    const prevTitle = document.title;
    if (title) document.title = title;

    const setMeta = (selector: string, attr: string, name: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement | HTMLLinkElement>(selector);
      if (!el) {
        el = document.createElement(selector.startsWith("link") ? "link" : "meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute(selector.startsWith("link") ? "href" : "content", content);
      return el;
    };

    if (description) {
      setMeta('meta[name="description"]', "name", "description", description);
      setMeta('meta[property="og:description"]', "property", "og:description", description);
    }
    if (title) {
      setMeta('meta[property="og:title"]', "property", "og:title", title);
    }
    if (canonical) {
      setMeta('link[rel="canonical"]', "rel", "canonical", canonical);
      setMeta('meta[property="og:url"]', "property", "og:url", canonical);
    }
    if (image) {
      setMeta('meta[property="og:image"]', "property", "og:image", image);
      setMeta('meta[name="twitter:image"]', "name", "twitter:image", image);
      setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    }
    if (noindex) {
      setMeta('meta[name="robots"]', "name", "robots", "noindex, nofollow");
    }

    return () => {
      // Restore the global title on unmount so navigation doesn't leak stale titles
      document.title = prevTitle;
      // Restore indexability when leaving a noindex page (SPA navigation)
      if (noindex) {
        setMeta('meta[name="robots"]', "name", "robots", "index, follow");
      }
    };
  }, [title, description, canonical, image, noindex]);

  if (!jsonLd) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default PageSeo;
