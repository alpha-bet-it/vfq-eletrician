import React from 'react';
import Menu from './components/Menu';
import { BrowserRouter } from 'react-router-dom'
import { Container, ThemeProvider } from '@mui/material';
import { Theme } from './constants/theme';
import { Carousel } from './components/Carousel'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Container maxWidth='md' disableGutters sx={{ '@media(min-width: 900px)': { width: '100%', maxWidth: '1920px' }}}>
          <Menu />
          <Carousel />
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
