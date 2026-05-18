import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="min-h-screen bg-transparent text-[#F5EFE2]">
      <App />
    </div>
  </StrictMode>
)
