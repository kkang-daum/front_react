import { useEffect, useState } from 'react'
import DateAndTime from 'date-and-time'

//여러 컴포넌트에서 현재의 시간 정보가 필요하다는 가정..
//시간 정보를 제공하는 custom hook 을 만들겠다는 가정..

const useClockTime = (interval, timeFormat) => {
  const [currentTime, setCurrentTime] 
        = useState(DateAndTime.format(new Date(), timeFormat))
  
  useEffect(() => {
    const handle = window.setInterval(() => {
      setCurrentTime(DateAndTime.format(new Date(), timeFormat))
    }, interval)
    return () => {
      window.clearInterval(handle)
    }
  }, [])

  return currentTime
}

export { useClockTime }