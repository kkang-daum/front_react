import React, { useState, useRef } from 'react'

const UnControlledComponent = () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [result, setResult] = useState(0)

  //real dom 의 식별자로 할당할 값.. 
  const elemX = useRef(null)
  const elemY = useRef(null)

  const add = () => {
    //이벤트가 발생했을때 유저가 입력한 데이터를 추출해야 한다..
    //constrolled component 가 아님으로.. virtual com 에서는 값을 얻어낼 수 없다.
    //real dom 을 접근해야 한다..
    //elemX.current - 현재 이 식별자로 식별되는 real dom
    let x1 = parseInt(elemX.current ? elemX.current.value : "", 10)
    let y1 = parseInt(elemY.current ? elemY.current.value : "", 10)
    if(isNaN(x1)) x1 = 0
    if(isNaN(y1)) y1 = 0
    setX(x1)
    setY(y1)
    setResult(x1 + y1)
  }

  return (
    <div>
      <h2>비 제어 컴포넌트</h2>
      x : <input id='x' type='text' defaultValue={x} ref={elemX}/>
      <br/>
      y : <input id='y' type='text' defaultValue={y} ref={elemY}/>
      <br/>
      <button onClick={add}>add</button>
      result : {result}
    </div>
  )
}

export default UnControlledComponent