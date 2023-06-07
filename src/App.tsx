import React from 'react';
import Menu from './components/Menu';
import { BrowserRouter } from 'react-router-dom'
import { Container, ThemeProvider } from '@mui/material';
import { Theme } from './constants/theme';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Container>
          <Menu />
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
