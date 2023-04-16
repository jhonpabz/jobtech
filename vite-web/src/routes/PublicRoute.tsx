import React, { useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthStore, useTokenStore } from '@stores/index';

const PublicRoute = () => {
  const location = useLocation();
  const setIsAuthenticated = useAuthStore((state) => state.setIsAuthenticated);
  const { isAuthenticated } = useAuthStore((state) => ({
    isAuthenticated: state.isAuthenticated,
  }));

  const { token } = useTokenStore((state) => ({
    token: state.token,
  }));

  useEffect(() => {
    if (token !== null) {
      setIsAuthenticated(true);
    }
  }, [token]);

  if (isAuthenticated)
    return <Navigate to="/" state={{ from: location }} replace />;

  return <Outlet />;
};

export default PublicRoute;
