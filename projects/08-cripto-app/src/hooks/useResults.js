import { useCallback, useState } from 'react'
import { getResults } from '../services/coins'
export const useResults = () => {
  const [criptoResults, setCriptoResults] = useState({})
  const [isLoading, setIsloading] = useState(false)
  const [error, setError] = useState(null)

  const getCriptoResults = useCallback(async ({ queryData }) => {
    try {
      setIsloading(true)
      const { coins, cripto } = queryData
      const { data } = await getResults({ queryData })
      setCriptoResults(data.DISPLAY[cripto.id][coins.id])
    } catch (e) {
      setError(e.message)
    } finally {
      setTimeout(() => {
        setIsloading(false)
      }, 1000)
    }
  }, [])

  return { criptoResults, isLoading, error, getCriptoResults }
}
