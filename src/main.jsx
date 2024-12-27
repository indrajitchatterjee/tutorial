import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Chapter1 from "./sec1/ch1.jsx";
import Home from './Home';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Home />
  </StrictMode>,
)
