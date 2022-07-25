import { useEffect, useState } from 'react'

import './App.css'

import { AllRoutes } from './components/AllRoutes'
import Footer from './components/footer'
import { Navbar } from './pages/navbar'

function App() {
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  });
  return (
    <div className="App" >
     <Navbar/>
    <AllRoutes/>
    <Footer/>
    </div>
  )
}

export default App
