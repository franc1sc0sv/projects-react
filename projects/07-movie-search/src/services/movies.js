const API_KEY = '5d54daa3'

export const fetchMovies = async ({ query }) => {
  if (query === '') return null
  const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
  try {
    const response = await fetch(API_URL)
    const json = await response.json()

    const movies = json.Search
    console.log(API_URL)
    return movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      img: movie.Poster
    }))
  } catch (e) {
    throw new Error('Error searching movies')
  }
}
