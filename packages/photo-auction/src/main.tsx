import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@seoulphoto/design-system/styles/reset.css'
import '@seoulphoto/design-system/styles/tokens.css'
import './styles/main.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
