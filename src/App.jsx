import { useState } from 'react'
import './App.css'
import Header from './pages/Header'
import Section from './pages/Section'
import Footer from './pages/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Section />
      <Footer />
    </>
  )
}

export default App
