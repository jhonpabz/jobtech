import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const PrivateRoute = ({ roles }) => {
  const location = useLocation();

  const isAuthenticated = true; // ? hooks for authentication
  const isAuthorized = true; // ? logic for authorization

  if (!isAuthenticated)
    return <Navigate to="/login" state={{ from: location }} replace />;

  if (!isAuthorized)
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;

  return <Outlet />;
};

export default PrivateRoute;
