import React, {useEffect, useState} from 'react'
import DateAndTime from 'date-and-time'

const Clock = (props) => {
  const [currentTime, setCurrentTime] = useState(new Date())

  //setInterval 에 의해 업무 진행(시간 변경) 가 최초 한번만 진행되게.
  //unmount 시에.. interval 이 움직이지 않게.. 
  useEffect(() => {
    const handle = setInterval(() => {
      console.log('## clock..')
      setCurrentTime(new Date())
    }, 1000)
    //useEffect() 매개변수에 지정한 함수에서 리턴으로 함수를 리턴시키면..
    //그 함수는 unmount 시에 호출해준다..
    //cleanup 함수라고 칭한다..
    return () => {
      clearInterval(handle)
    }
  }, [])

  return (
    <div>
      <h3>{DateAndTime.format(currentTime, props.formatString)}</h3>
    </div>
  )
}

export default Clock