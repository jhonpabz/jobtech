import { Navigate } from 'react-router-dom';

// Public page
import Register from '@pages/Register';

// Private page

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
    Component: Register,
    isPrivateRoute: true,
    isPresenterMode: false,
    roles: [all],
  },
];
