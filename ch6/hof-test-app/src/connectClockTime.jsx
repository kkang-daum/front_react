import React, { useEffect, useState } from 'react'
import DateAndTime from 'date-and-time'

//함수이다. high-order component 함수이다.

//컴포넌트를 매개변수로 받아서, - TargetComponent - 매개변수명, 임의 이름
//필요하다면 컴포넌트 이외에 부가 데이터를 매개변수로 받을 수 있고 - timeFormat, interval

//컴포넌트를 리턴하는 함수.. 
export const connectClockTime = (TargetComponent, timeFormat, interval) => {



  return (props) => {

    //공통적인 코드.. 
    let [currentTime, setCurrentTime] = useState(DateAndTime.format(new Date(), timeFormat))
    useEffect(() => {
      const handle = window.setInterval(() => {
        setCurrentTime(DateAndTime.format(new Date(), timeFormat))
      }, interval)
      return () => {
        window.clearInterval(handle)
      }
    }, [])

    // 매개변수 컴포넌트에 능력치(공통) 추가된 컴포넌트를 리턴.. 
    //외부에서 나를 사용하면서 전달한 props 를 그대로 포함시켜서.. 
    //매개변수의 컴포넌트에 이 hof 에서 준비한 데이터 혹은 함수를 추가해서.. 
    return <TargetComponent {...props} currentTime={currentTime} />
  }
}