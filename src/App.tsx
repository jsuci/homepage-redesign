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
      <Container sx={{bgcolor: 'rgba(0, 0, 0, 0.0)', display: "flex", flexDirection: "column", paddingBlock: 2}}>
        <HomePage />
      </Container>
    </ThemeProvider>
  )
}

export default App
