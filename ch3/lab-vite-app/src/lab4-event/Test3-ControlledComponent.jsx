import React, { useState } from 'react'

const ControlledComponent = () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const changeValue = (e) => {
    let newValue = parseInt(e.target.value)//현재 이벤트가 발생한 객체(input)의 값
    if(isNaN(newValue)) newValue = 0
    if(e.target.id === 'x') setX(newValue)
    else setY(newValue)
  }

  return (
    <div>
      <h2>제어 컴포넌트</h2>
      <p>uncontrolled : <input type='text'/></p>
      <p>controlled : <input type='text' value={'kim'}/></p>
      <p>
        {/* value 값이 이 컴포넌트의 데이터로 명시, 이 값이 변경되지 않는한
        유저 화면은 update 되지 않는다.  
        id 속성을 지정한 것은 js 기본인 document.getElementById() 함수를 이용하기 
        위해서가 아니라.. 이벤트 함수 하나에서 두개 의 input 부분을 같이 핸들링하려고 */}
        x : <input type='text' id='x' value={x} onChange={changeValue}/>
        <br/>
        y : <input type='text' id='y' value={y} onChange={changeValue}/>
        <br/>
        result : {x + y}
      </p>
    </div>
  )
}

export default ControlledComponent