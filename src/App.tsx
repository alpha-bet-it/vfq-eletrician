import React from 'react';
import Menu from './components/Menu';
import { BrowserRouter } from 'react-router-dom'
import { Container } from '@mui/material';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Container>
          <Menu />
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
