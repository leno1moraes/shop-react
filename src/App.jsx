import { useState } from 'react'
import './App.css'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import List from './Product/List/List'
import Demo from './Product/Demo/Demo'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/product/:id" element={<Demo />} />
          </Routes>
        </BrowserRouter>
      <Footer></Footer>
    </>
  )
}

export default App
