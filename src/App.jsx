import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import DefaultLayout from './layouts/DefaultLayout'
import Homepage from './pages/Homepage'
import Aboutme from './pages/Aboutme'
import Projectpage from './pages/Projectpage'
import Contactspage from './pages/Contactspage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/project" element={<Projectpage />} />
          <Route path="/contact" element={<Contactspage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App