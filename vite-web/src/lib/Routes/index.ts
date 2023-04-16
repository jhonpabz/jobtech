import { Navigate } from 'react-router-dom';

// Public page
import Register from '@pages/Auth/Register';

// Private page
import Dashboard from '@pages/Dashboard';

// Roles
import { Roles } from '@lib/Roles';

const { admin, all, user } = Roles;

export const RouteList = [
  // Public routes
  {
    path: '/register',
    isPrivateRoute: false,
    Component: Register,
    roles: [all],
  },

  // Private routes
  {
    path: '/',
    Component: Dashboard,
    isPrivateRoute: true,
    roles: [all],
  },
];
