import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { RouteList } from '@lib/Routes';

const Router = () => {
  return (
    <Routes>
      {RouteList.map((route) => {
        const { path, Component, isPrivateRoute, roles } = route;

        // Private routes
        if (isPrivateRoute)
          return (
            <Route key={path} element={<PrivateRoute roles={roles} />}>
              <Route path={path} element={<Component />} />
            </Route>
          );

        // Public routes
        return (
          <Route key={path} element={<PublicRoute />}>
            <Route path={path} element={<Component />} />
          </Route>
        );
      })}
    </Routes>
  );
};

export default Router;
