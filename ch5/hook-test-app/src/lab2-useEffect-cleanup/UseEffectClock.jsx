import React, {useState}  from 'react'
import Clock from './Clock'

const UseEffectComponent = () => {
  const [formatString, setFormatString] = useState('HH:mm:ss')
  const [clockVisible, setClockVisible] = useState(false)

  return (
    <div>
      <h2>시계</h2>
      <button onClick={() => setClockVisible(!clockVisible)}>toggle</button>
      <hr/>
      {clockVisible ? <Clock formatString={formatString} /> : ""}
    </div>
  )
}

export default UseEffectComponent