import { Box } from '@mui/material';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

export const PageWrapper = ({ children }: Props) => {
  return <Box m={2}>{children}</Box>;
};
