//외부 모듈에서 export 한 것을 사용하기 위해서 import
//import A from 'a' ==>export default ~~ 로 공개된것..
//import { A, B } from 'a' ==> export { A, B } 여러개 공개된 것
//import A, { B, C } from 'a' ==> export default A; export { B, C }
import React, { useState } from 'react'

const EventBinding = () => {
  //state data 선언.. 
  const [count, setCount] = useState(0)

  //event callback 함수.. 
  const increment = () => {
    //이벤트가 발생하면 state 데이터를 변경시키고 화면이 re-render 되게..
    setCount(count + 1)
  }

  //event callback 함수, 이벤트 객체 및, 이벤트 발생한 곳의 데이터를 전달 받아서
  //함수명.bind(this) 형식으로 이벤트 함수가 호출될때, 이벤트 객체는 마지막 매개
  //변수로 전달된다..
  const incrementStep = (no, e) => {
    setCount(count + no)
  }
  return (
    <div>
      <h2>Event Binding Test</h2>
      <p>count : {count}</p>
      <div>
        {/* onclick 안된다.. onClick */}
        {/* 외부 함수를 이벤트 콜백함수로..  */}
        <button onClick={increment}>증가</button>
        {/* 익명함수 등록.. */}
        <button onClick={()=> {
          setCount(count - 1)
        }}>감소</button>
      </div>
      <div>
        {/* 이벤트 함수를 호출하면서. 데이터 전달..  */}
        <button onClick={(e) => incrementStep(2, e)}>increment, step 2</button>
        <button onClick={incrementStep.bind(this, 3)} >increment step3</button>
      </div>
    </div>
  )
}
export default EventBinding