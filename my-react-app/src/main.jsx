import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FocusInput from './Component/UseRef.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FocusInput/>
  </StrictMode>,
)
