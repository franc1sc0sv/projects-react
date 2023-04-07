const RenderMovies = ({ movies }) => {
  return (
    <ul className='grid gap-x-5 grid-cols-movies'>
      {
              movies.map(movie => (
                <li className='movie' key={movie.id}>
                  <h3>{movie.title}</h3>
                  <p>{movie.year}</p>
                  <img src={movie.img} alt={movie.title} />
                </li>
              ))
            }
    </ul>
  )
}

const RenderNoResults = () => {
  return (
    <p className='text-center'>We can't found your movie sorry :(</p>
  )
}

export const Movies = ({ movies }) => {
  const hasMovies = movies?.length > 0
  return (
    hasMovies
      ? <RenderMovies movies={movies} />
      : <RenderNoResults />
  )
}
