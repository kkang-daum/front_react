import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//css 파일이다.. 보통 css 를 html 에서 <link> 로 적용시킨다..
//js 에서 import 대상이 아니다.. 
//css 까지 마치 모듈처럼. 필요한 css 파일을 import 해서 사용하는 기법을 제공한다..
//누가? 모듈 번들러가 처리해 줌으로..
//React 사상 , 100% 자바스크립트로 컴포넌트 정의(JSX css 모듈로)
import './index.css'
//css 파일을 어디선가(꼭 main.jsx 가 아니라고 하더라도) 
//import 하면 전역위치(어느 jsx 파일이든 상관없이)에서 
//사용가능하다.
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //App 이라는 개발자가 만든 컴포넌트를 를 id 가 root 태그에 출력
  //<React.StrictMode> 개발환경에서만 의미, build 시킬때는 제거..
  //개발 코드가 문제없는지를 한번 더 검증하기 위해서.. 컴포넌트를 내부적으로
  //두번 로딩해준다.. 
  //필요 없으면 지워도 된다..
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
