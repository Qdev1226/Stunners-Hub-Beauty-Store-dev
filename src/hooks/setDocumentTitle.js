import { useEffect } from "react";

export const setDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, []);
};
