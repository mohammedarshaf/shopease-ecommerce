import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop helper: scrolls window back to top on every route change
 */
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior,
    });
  }, [pathname]);

  return null;
};
