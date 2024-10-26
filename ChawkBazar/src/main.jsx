
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import FlashContextApi from './component/contextApi/flashApi/Flash.jsx'

createRoot(document.getElementById('root')).render(
  <FlashContextApi>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </FlashContextApi>,
)
