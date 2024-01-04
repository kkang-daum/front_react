import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //proxy 서버 설정.. 
  server: {
    proxy: {
      '/api': {//앱에서 요청 url 에 api(임의단어) 가 있으면 
        target: 'http://localhost:8000', //이 서버로 요청을 대행해주겠다.
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/,"")//url 의 api 단어를 제거..
        //설정 파일이 변경되었다. 서버 다시 구동해야 반영 된다..
      }
    }
  }
})
