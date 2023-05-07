import { Box } from '@mui/material';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

export const CardComponent = ({ children }: Props) => {
  return (
    <Box
      sx={{
        px: 4,
        py: 2,
        boxShadow:
          'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px',
        borderRadius: 3,
      }}
    >
      {children}
    </Box>
  );
};
