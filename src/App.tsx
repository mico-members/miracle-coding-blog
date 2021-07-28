import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './config/style/theme';
import Root from './components/Root';
import GlobalStyle from './config/style/GloabalStyle';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Root />
    </ThemeProvider>
  );
};

export default App;
