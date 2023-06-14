import React from 'react'
import Menu from './components/Menu'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Container, ThemeProvider } from '@mui/material'
import { Theme } from './constants/theme'
import { Carousel } from './components/Carousel'
import { MainPage } from './pages/main'

function App () {
  return (
    <ThemeProvider theme={Theme}>
      <Container maxWidth='md' disableGutters sx={{ '@media(min-width: 900px)': { width: '100%', maxWidth: '1920px' } }}>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path='/' element={<MainPage />}/>
          </Routes>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  )
}

export default App
