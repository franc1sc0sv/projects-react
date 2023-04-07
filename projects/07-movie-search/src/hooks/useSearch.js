import { useEffect, useRef, useState } from 'react'

export const useSearch = () => {
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = query === ''
      return
    }
    if (query === '') {
      setError('Campos vacios')
      return
    }

    if (query.match(/^\d+$/)) {
      setError('No se puede buscar un numero')
      return
    }

    setError(null)
  }, [query])

  return { query, error, setQuery, isFirstInput }
}
