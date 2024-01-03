import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

import App01 from './lab1-router/App01'
import App02 from './lab2-send-data-with-attribute/App02'
import App03 from './lab3-url-params-with-hook/App03'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App01 /> */}
    {/* <App02 /> */}
    <App03 />
  </React.StrictMode>,
)
