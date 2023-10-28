import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// pages
import Home from './pages/Home'
import Port from './pages/Port'
import Not from './pages/Not'

// components
import Header from './components/section/Header'
import Main from './components/section/Main'
import Footer from './components/section/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <Main>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/port' element={<Port />}></Route>
          <Route path='*' element={<Not />}></Route>
        </Routes>
      </Main>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App