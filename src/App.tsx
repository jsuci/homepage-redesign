// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import HomePage from './pages/HomePage'
import './App.css'
import { Container, Typography } from '@mui/material'

function App() {
  return (
    <>
      <Container sx={{bgcolor: '#3d3d3d', height: '100vh'}}>
        <HomePage />
      </Container>
    </>
  )
}

export default App
