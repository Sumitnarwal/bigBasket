import { useState } from 'react'

import './App.css'

import { AllRoutes } from './components/AllRoutes'
import { Navbar } from './pages/navbar'

function App() {

  return (
    <div className="App">
     <Navbar/>
    <AllRoutes/>
    </div>
  )
}

export default App
