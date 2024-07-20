import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from '../Context/AuthContext.jsx'
import "../styles/variables.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ToastContainer />
    {/* <AuthProvider> */}
    <App />


    {/* </AuthProvider> */}
  </React.StrictMode>,
)
