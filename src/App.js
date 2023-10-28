import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Port from './pages/Port'
import Not from './pages/Not'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/port' element={<Port />}></Route>
        <Route path='*' element={<Not />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App