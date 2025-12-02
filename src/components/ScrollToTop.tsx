import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Always scroll to top when route changes
    window.scrollTo(0, 0);
    
    // If there's a hash, scroll to that element after a brief delay
    // This ensures we scroll to top first, then to the hash target
    if (hash) {
      const timer = setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [pathname, hash]);

  return null;
}

