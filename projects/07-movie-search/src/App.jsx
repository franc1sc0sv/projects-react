import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'
import { useSearch } from './hooks/useSearch'
import { TailSpin } from 'react-loader-spinner'
import { useCallback, useRef, useState } from 'react'
import debounce from 'just-debounce-it'

function App () {
  const [sort, setSort] = useState(false)

  const { query, error, setQuery, isFirstInput } = useSearch()
  const { movies, getMovies, loading, errorMovies } = useMovies({ query, sort })

  const debounceMovies = useCallback(
    debounce(query => {
      getMovies(query)
    }, 300),
    [getMovies])
  const firstSearch = useRef(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!firstSearch.current) firstSearch.current = true
    if (error || query === '') return
    debounceMovies({ query })
  }
  const handleChange = (e) => {
    const newQuery = e.target.value
    if (newQuery.startsWith(' ')) return
    if (!firstSearch.current) firstSearch.current = true
    setQuery(newQuery)
    debounceMovies({ query: newQuery })
  }
  const handleSort = () => {
    setSort(!sort)
  }

  const showMovies = () => (!loading && !isFirstInput.current && firstSearch.current)
  return (
    <>
      <div className='flex flex-col items-center w-full gap-4'>
        <header>
          <h1 className='text-center'>Movie search app</h1>
          <form className='flex w-full' onSubmit={handleSubmit}>
            <input name='query' value={query} onChange={handleChange} type='text' />
            <input disabled={error || query === ''} type='checkbox' checked={sort} onChange={handleSort} />
            <button disabled={error || query === ''}>{loading ? <TailSpin height='25' width='25' color='white' /> : 'Enviar'}</button>
          </form>
          {error && <p className='text-red-500'>{error}</p>}
        </header>
        <main className='w-full p-5 m-5'>
          {errorMovies && <p>Error</p>}
          {showMovies() && <Movies movies={movies} />}

        </main>
      </div>
    </>
  )
}

export default App
