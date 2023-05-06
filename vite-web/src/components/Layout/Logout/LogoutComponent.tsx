import List from '@mui/material/List';
import LogoutIcon from '@mui/icons-material/Logout';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useTokenStore } from '@stores/useTokenStore';

import { useAuthStore } from '@stores/useAuthStore';

export const LogoutComponent = ({ open }) => {
  const setToken = useTokenStore((state) => state.setToken);
  const setIsAuthenticated = useAuthStore((state) => state.setIsAuthenticated);

  const handleLogout = () => {
    setToken(null);
    setIsAuthenticated(false);
  };

  return (
    <>
      <List>
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            onClick={handleLogout}
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <LogoutIcon />
            </ListItemIcon>

            <ListItemText primary="Logout" sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
};
