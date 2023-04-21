import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';

export const routes = [
  {
    name: 'Dashboard',
    Icon: <DashboardOutlinedIcon />,
    path: '/',
  },
  {
    name: 'All Jobs',
    Icon: <DesignServicesOutlinedIcon />,
    path: '/all-jobs',
  },
  {
    name: 'Add Job',
    Icon: <AssignmentOutlinedIcon />,
    path: '/add-job',
  },
  {
    name: 'Profile',
    Icon: <AssignmentOutlinedIcon />,
    path: '/profile',
  },
];
