import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <div
      style={{
        background: "linear-gradient(to bottom, #1c1c1c, #f5f5f5)", // Black to whitish gradient
        color: "#000",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        width:'1300px',
        fontFamily: "Arial, sans-serif",
      }}
    >
       <App />
    </div>
   
  </StrictMode>,
)
