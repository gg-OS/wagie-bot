import { useState } from 'react'
import Wagie from "./components/Wagie"
import Header from "./components/Header"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Wagie />
    </>
  )
}

export default App
