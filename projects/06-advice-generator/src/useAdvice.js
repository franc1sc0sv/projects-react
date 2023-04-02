import { useEffect, useState } from 'react'
const API_ADVICE = 'https://api.adviceslip.com/advice'

const getRandomAdvice = async () => {
  const res = await fetch(API_ADVICE)
  const data = await res.json()
  const { slip } = data
  return slip
}

export const useAdvice = (setIsLoading) => {
  const [advice, setAdvice] = useState()

  const setRandomAdvice = () => {
    setIsLoading(true)
    setTimeout(() => {
      getRandomAdvice().then(setAdvice)
      setIsLoading(false)
    }, 1000)
  }
  useEffect(setRandomAdvice, [])
  return { advice, setRandomAdvice }
}
