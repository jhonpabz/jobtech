import { Layout } from '@components/Layout';
import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthStore } from '@stores/index';

const PrivateRoute = ({ roles }) => {
  const location = useLocation();
  const { isAuthenticated } = useAuthStore((state) => ({
    isAuthenticated: state.isAuthenticated,
  }));

  const isAuthorized = true; // ? logic for authorization

  if (!isAuthenticated)
    return <Navigate to="/login" state={{ from: location }} replace />;

  if (!isAuthorized)
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default PrivateRoute;
