import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from '../Context/AuthContext.jsx'
import "../styles/variables.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ToastContainer />
  <I18nextProvider i18n={i18n}>
    {/* <AuthProvider> */}
    <App />

    </I18nextProvider>
    {/* </AuthProvider> */}
  </React.StrictMode>,
)
