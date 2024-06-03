export function searchMovie(term){
    return `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=${term}`
}

export function searchMovieById(Id){
    return `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&i=${Id}`
}