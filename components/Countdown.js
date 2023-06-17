import {useEffect, useState} from 'react'

const WEDDING_TIME = "06/24/2023 15:45:00+08:00"
const formatDatePart = (n) => String(n).padStart(2, '0')

export const Countdown = () => {
  const [elapsedSeconds, setElapsedSeconds] = useState(0)
  const [baseCurrentTime, setBaseCurrentTime] = useState(new Date(WEDDING_TIME).getTime())
  useEffect(() => {
    const timeoutId = setTimeout(() => {setElapsedSeconds(prev => prev + 1)}, 1000)
    return () => clearTimeout(timeoutId)
  }, [elapsedSeconds])
  useEffect(() => {
    setBaseCurrentTime((new Date()).getTime())
  }, []) 
  const currentTime = baseCurrentTime + (elapsedSeconds *1000)
  // const weddingTime = (new Date("06/24/2023 13:45:00")).getTime()
  const weddingTime = (new Date(WEDDING_TIME)).getTime()
  const differenceInMiliseconds = weddingTime - currentTime
  if (differenceInMiliseconds < 0) {
    return 'NAO!'
  }
  const differenceInSeconds = Math.floor(differenceInMiliseconds /1000)
  const seconds = differenceInSeconds % 60
  const differenceInMinutes = Math.floor(differenceInSeconds /60)
  const minutes = differenceInMinutes %60
  const differenceInHours = Math.floor(differenceInMinutes /60)
  const hours = differenceInHours % 24
  const days = Math.floor(differenceInHours /24)

  return `${formatDatePart(days)}D:${formatDatePart(hours)}H:${formatDatePart(minutes)}M:${formatDatePart(seconds)}S`
}