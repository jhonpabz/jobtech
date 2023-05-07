import { Box } from '@mui/material';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const PageWrapper = ({ children }: Props) => {
  return <Box m={2}>{children}</Box>;
};
export default PageWrapper;
