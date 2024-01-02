import React from 'react'
import { connectClockTime } from './connectClockTime'
import { connectMousPos } from './connectMousePos'

//우리가 만드는 컴포넌트.. 
const Child = (props) => {
  return (
    <div>
      <h2>High Order Component</h2>
      {/* 우리의 컴포넌트내에, 시간이 출력, 마우스 위치가 출력. 
      그런데 이부분이 여러 컴포넌트의 공통 부분이라는 가정.. 
      high order component 로 구현하고, 우리는 이용..  */}
      <p>current time : {props.currentTime}</p>
      <p>mouse position :{props.position.x}, {props.position.y}</p>
    </div>
  )
}

//우리가 이용하고자 하는 컴포넌트(Child) 를 직접 사용하는 것이 아니라..
//hof 함수를 거쳐서, 공통 코드 추가된 컴포넌트를 이용
export default connectMousPos(connectClockTime(Child, 'HH:mm:ss', 1000))

//export default Child
//==><Child/>

// export default connectClockTime(Child, 'HH:mm:ss', 1000)
//==><Child currentTime={currentTime} />

//export default connectMousPos(connectClockTime(Child, 'HH:mm:ss', 1000))
//==><Child currentTime={currentTime} position={position} />