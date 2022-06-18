import { useState } from 'react'

import './App.css'

import { AllRoutes } from './components/AllRoutes'
import Footer from './components/footer'
import { Navbar } from './pages/navbar'

function App() {

  return (
    <div className="App">
     <Navbar/>
    <AllRoutes/>
    <Footer/>
    </div>
  )
}

export default App
