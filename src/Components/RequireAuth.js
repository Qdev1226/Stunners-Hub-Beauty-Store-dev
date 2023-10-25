import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export function RequireAuth({ children, isLoggedIn }) {
  let location = useLocation();
  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
