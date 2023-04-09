import { useEffect, useState } from 'react'
import { getCriptosToForms } from '../services/coins'

export const useCriptos = () => {
  const [criptos, setCriptos] = useState([])

  useEffect(() => {
    const getData = async () => {
      const data = await getCriptosToForms()
      const arrData = data.map((cripto) => {
        return {
          id: cripto.CoinInfo.Name,
          name: cripto.CoinInfo.FullName
        }
      })
      setCriptos(arrData)
    }

    getData()
  }, [])
  return { criptos }
}
