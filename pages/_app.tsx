import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../components/globalStyles';
import theme from '../lib/theme';

type Props = {
  Component: React.ComponentType;
  pageProps: any;
};

const MyApp: React.FunctionComponent<Props> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Component {...pageProps} />
      </>
    </ThemeProvider>
  );
};

export default MyApp;
