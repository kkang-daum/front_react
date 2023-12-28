import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import AppContainer from './components/AppContainer'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //React.StrictMode, 개발환경에서만 동작, build 시켜서 운용환경으로 만들때는 자동
  //제거..
  //애플리케이션의 내부 문제점을 파악하기 위해서 두번 컴포넌트를 로딩해서 검사진행
  //StrictMode 를 이용하면 컴포넌트의 render 가 두번 호출.. 

  // <React.StrictMode>
  //   <AppContainer />
  // </React.StrictMode>,
  <AppContainer />
)
