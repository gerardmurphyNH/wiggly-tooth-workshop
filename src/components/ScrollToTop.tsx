import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Resets scroll position to top on every route change.
// Hash links (e.g. /#signup) are left alone so the browser can handle them naturally.
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
