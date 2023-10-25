import { useEffect } from "react";

export const scrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};
