import axios from 'axios'

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

export const getCriptosToForms = async () => {
  const { data } = await client.get('top/mktcapfull?limit=20&tsym=USD')
  return data.Data
}

export const getResults = async ({ queryData }) => {
  const { coins, cripto } = queryData
  const results = await client.get(`pricemultifull?fsyms=${cripto.id}&tsyms=${coins.id}`)
  return results
}
