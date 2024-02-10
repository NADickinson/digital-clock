import { useState } from 'react'
import { useEffect } from 'react'
import { TimeContainer } from './components/time-container'

const currentDate = new Date()

console.log(currentDate, currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds())
// set interval from date object

export const App = () => {
  const [currentDate, setCurrentDate] = useState()
  const [currentHour, setCurrentHour] = useState()
  const [currentMins, setCurrentMins] = useState()
  const [currentSeconds, setCurrenSeconds] = useState()

  useEffect(() => {
    setInterval(() => {
      let starterDate = new Date()
      setCurrentDate(starterDate)
      setCurrentHour(starterDate.getHours())
      setCurrentMins(starterDate.getMinutes())
      setCurrenSeconds(starterDate.getSeconds())
    }, 1000)
  }, [])

  return (
    <div style={{ display: 'flex', justifyContent: 'center', height: '100%', width: '100%', alignItems: 'center' }}>
      <div style={{ display: 'flex', flex: 1, flexDirection: 'row', gap: '20px', justifyContent: 'center' }}>
        <TimeContainer text={currentHour} />
        <TimeContainer text={currentMins} />
        <TimeContainer text={currentSeconds} />
      </div>
    </div>
  )
}
