// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import MaterialUIPage from './pages/MaterialUIPage'
import './App.css'
import { Container, createTheme, ThemeProvider } from '@mui/material'
import HomePage from './pages/HomePage'

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#337E7D',
      light: '#6ec4c2',
      dark: '#255b5a',
      contrastText: '#000',
    }
  },
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(',')
  }
})

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Container sx={{bgcolor: 'rgba(0, 0, 0, 0.0)'}} disableGutters>
        <HomePage />
      </Container>
    </ThemeProvider>
  )
}

export default App
