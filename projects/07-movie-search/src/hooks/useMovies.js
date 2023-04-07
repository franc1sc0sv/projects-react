import { useCallback, useMemo, useRef, useState } from 'react'
import { fetchMovies } from '../services/movies'

export const useMovies = ({ query, sort }) => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(query)

  // Esto al estar en el cuerpo del componente cada que se vuelve renderizar el componente se crea y se destruye la funcion
  // Pero lo solucionanmos con el useMemo
  const getMovies = useCallback(
    // Cada que se crea la funcion toma los valores actuales de los estados que estamos usando en el momento
    // Por lo que si solo se crea la primera vez va a tomar el valor inical del estado
    // Pero como la gente es ADICTA a la optimizacion una solucion obvia
    // Seria injectarle el valor como parametro a la funcion para lograr que solo se renderize una vez
    // Peeerooooo como la gente es todavia mas fanatica de la optimizacion crearron un hook que funciona igual que el useMemo pero para funciones
    async ({ query }) => {
      if (query === previousSearch.current) return
      try {
        setLoading(true)
        previousSearch.current = query
        const newMovies = await fetchMovies({ query })
        setMovies(newMovies)
      } catch (e) {
        setError(e.message)
      } finally {
        setTimeout(() => {
          setLoading(false)
        }, 1000)
      }
    }
    , [])
  // Esto se hace cada que se renderiza el componente debido a que esta en el cuerpo del componente
  // Este es un "calculo" que queremos memoisar este calculo queiro que la evites y quiero que la hagas cuando pase una accion

  const sortedMovies = useMemo(() => {
    if (!movies) return
    return sort
      ? [...movies]?.sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, getMovies, loading, errorMovies: error }
}
