import { BrowserRouter as Router , Routes, Route} from "react-router-dom";
import { useState } from 'react'

import Header from "./Header";
import Home from "./Home";
import About from "./About";
import SongList from "./SongList";
import Members from "./Members";

//public 폴더에 photos 폴더 복사하고 테스트 해야.. 
//public - app 에의해 제어될 필요가 없는, 브라우저에 그대로 다운로드 되어야 하는
//파일들이 위치.. 
const App02 = () => {

  const [members] = useState([
    {name: 'Kim', photo: 'photos/Mag.png'},
    {name: 'Lee', photo: 'photos/JPike.jpg'},
    {name: 'Park', photo: 'photos/King.png'},
    {name: 'Hong', photo: 'photos/Sam.png'},
    {name: 'Jung', photo: 'photos/Tim.png'},
    {name: 'Kang', photo: 'photos/Toby.jpg'},
  ])

  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* 라우팅된는 컴포넌트에 속성으로 데이터 추가해서 해당 컴포넌트에서 사용하게 */}
          <Route path="/about" element={<About title={"뉴진스"}/>} />
          <Route path="/members" element={<Members members={members}/>} />
          <Route path="/songs" element={<SongList />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App02