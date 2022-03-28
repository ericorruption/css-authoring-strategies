import {
  ChakraProvider,
  extendTheme,
  Button,
  HStack,
  Box,
  Grid,
  GridItem
} from '@chakra-ui/react';
import { FunctionComponent, ReactNode, useContext } from 'react';
import { ThemeContext } from '../Theme';

const Chakra: FunctionComponent = () => {
  const globalTheme = useContext(ThemeContext);
  const theme = extendTheme({
    colors: {
      primary: {
        500: globalTheme === 'a' ? '#0070f3' : '#53c2ff'
      }
    }
  });

  return (
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  );
};

export default Chakra;

const App: FunctionComponent = () => (
  <Layout
    col1={
      <HStack spacing="4">
        <Button colorScheme="primary">Chakra button</Button>
        <Button>Chakra button</Button>
      </HStack>
    }
    col2={<Notes />}
  />
);

const Layout: FunctionComponent<{ col1: ReactNode; col2: ReactNode }> = ({
  col1,
  col2
}) => (
  <Grid
    paddingX="4"
    gridTemplateColumns="2fr 1fr"
    gridTemplateRows="1fr"
    height="100%"
  >
    <GridItem>{col1}</GridItem>
    <GridItem paddingBottom="var(--hack-intercom-height)">{col2}</GridItem>
  </Grid>
);

const Notes: FunctionComponent = () => (
  <Box boxShadow="base" padding="2" height="100%" borderRadius="base">
    Content
  </Box>
);
