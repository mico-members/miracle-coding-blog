import { ThemeProvider } from 'styled-components';
import { theme } from './config/style/theme';
import Root from './components/Root';
import GlobalStyle from './config/style/GloabalStyle';
import { RecoilRoot } from 'recoil';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <GlobalStyle />
        <Root />
      </RecoilRoot>
    </ThemeProvider>
  );
};

export default App;
