import { InpectionsProvider } from 'hooks/useInspections';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/GlobalStyles';
import theme from '../styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <InpectionsProvider>
        <Head>
          <title>Axur-Teste Front-End</title>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/img/icon-512.png" />
          <link rel="apple-touch-icon" href="/img/icon-192.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="description"
            content="Projeto para teste de Desenvolvedor Front End"
          />
        </Head>
        <Component {...pageProps} />
        <GlobalStyles />
      </InpectionsProvider>
    </ThemeProvider>
  );
}

export default App;
