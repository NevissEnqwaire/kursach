import { useState } from 'react'
import './App.css'
import HeaderProfile from './components/HeaderProfile'


function App() {
  const [count, setCount] = useState(0)

  return (
  <HeaderProfile/>
  )
}

export default App
