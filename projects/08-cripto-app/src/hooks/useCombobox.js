import { useState } from 'react'

export const useCombobox = ({ options }) => {
  const [selectedData, setSelectedData] = useState(options[0])
  const [query, setQuery] = useState('')
  const filteredData =
  query === ''
    ? options
    : options.filter((coin) => {
      return coin.name.toLowerCase().includes(query.toLowerCase())
    })

  return { selectedData, setSelectedData, setQuery, filteredData, query }
}
