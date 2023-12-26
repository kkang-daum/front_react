import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//global css... css 파일을 직접 import, 모든 jsx 에서 다 이용
import 'bootstrap/dist/css/bootstrap.css'

import CSSTest from './lab1-style/Lab1_CSSTest.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <CSSTest />
  </React.StrictMode>,
)
