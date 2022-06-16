import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import './index.css'
import axios from 'axios'
import { store } from './Redux/store'
axios.defaults.baseURL = "http://localhost:7005"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <ChakraProvider>
  <Provider store={store}>
  <App />
  </Provider>
  </ChakraProvider>
  </BrowserRouter>
  </React.StrictMode>
)
