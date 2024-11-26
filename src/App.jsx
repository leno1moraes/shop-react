import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import List from './Product/List/List'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <List></List>
      <Footer></Footer>
    </>
  )
}

export default App
