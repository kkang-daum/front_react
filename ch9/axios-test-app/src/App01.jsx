import axios from 'axios'

const requestAPI = () => {
  //이 파일의 origin - http://localhost:5173/
  //다른 origin 으로 ajax 요청.. 

  //cross origin 문제 해결.. 서버에서 header 에 다른 origin 의 데이터이지만
  //허락하라고 명시하면 가능.. 
  //node - express 기반의 앱에서는 cors 라는 모듈이 제공되고..  이 모듈로 쉽게 header
  //설정.. 
  // const url = "http://localhost:8000/todolist/gdhong"

  //서버 설정이 불가능한 상황에서는 proxy server 를 구성해서 해결..
  //html 과 동일 오리진에 가상의 서버를 만들고 우리는 그 서버에 요청..
  //동일 origin 임으로 문제없다.
  //가상의 서버에서 cross origin 에 요청하는 것이다..
  //CORS 문제는 브라우저의 에러임으로.. 서버가 다른 origin 에 요청하는 것은 문제가 
  //안된다..
  //vite 으로 프로젝트를 만든 경우에는 vite 의 환경파일인 vite.config.js 설정으로
  //쉽게 proxy 구성 가능..
  const url = "/api/todolist/gdhong"
  //url 에 /api 가 있다. proxy 서버가 처리한다. 
  //proxy 서버가 /api 를 제거시킨후 8000 포트로 요청을 대행해준다.
  //결국 8000 에 들어가는 url 은 http://localhost:8000/todolist/gdhong
  axios.get(url).then((response) => {
    console.log('## response', response)
  })
}
requestAPI()

const App01 = () => {
  return <h2>console 로 CORS 확인</h2>
}
export default App01