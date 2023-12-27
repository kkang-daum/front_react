import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import AppContainer from './components/AppContainer'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>,
)
