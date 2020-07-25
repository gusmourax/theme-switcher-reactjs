import React, { useCallback } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from './hooks/usePersistedState';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyles from './styles/global';

import Header from './components/Header';

function App() {

  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [theme, setTheme]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <Header toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
