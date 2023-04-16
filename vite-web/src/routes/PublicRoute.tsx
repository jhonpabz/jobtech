import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const PublicRoute = () => {
  const location = useLocation();

  const isAuthenticated = false; // ? hooks for authentication

  if (isAuthenticated)
    return <Navigate to="/" state={{ from: location }} replace />;

  return <Outlet />;
};

export default PublicRoute;
