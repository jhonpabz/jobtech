import { Navigate } from 'react-router-dom';

// Public page
import Register from '@pages/Auth/Register';

// Private page
import Dashboard from '@pages/Dashboard';

// Roles
import { Roles } from '@lib/Roles';
import Login from '@pages/Auth/Login';
import Profile from '@pages/Profile';

const { admin, all, user } = Roles;

export const RouteList = [
  // Public routes
  {
    path: '/register',
    isPrivateRoute: false,
    Component: Register,
    roles: [all],
    pageName: 'Register',
  },
  {
    path: '/login',
    isPrivateRoute: false,
    Component: Login,
    roles: [all],
    pageName: 'Login',
  },

  // Private routes
  {
    path: '/',
    Component: Dashboard,
    isPrivateRoute: true,
    roles: [all],
    pageName: 'Dashboard',
  },

  {
    path: '/profile',
    Component: Profile,
    isPrivateRoute: true,
    roles: [all],
    pageName: 'Profile',
  },
];
