import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div className='bg-[#0e0e0e]'>
   <App />
   </div>
  </StrictMode>,
)
