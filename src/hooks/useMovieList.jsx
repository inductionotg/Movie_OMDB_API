import {searchMovie} from '../apis/omdb'
import { useEffect, useState } from "react"
import axios from "axios"
function useMovieList(...args){
    const [moviedata,setMovieData] = useState([])
    async function fetchMovie(...args){
        const urls = args.map((name)=>searchMovie(name))
        try {
            const response = await axios.all(urls.map((url)=>axios.get(url)))
            console.log(response)
            const responseMovies = response.map((movies)=>movies.data.Search)
            console.log(responseMovies)
            setMovieData([].concat(...responseMovies))
        } catch (error) {
            console.log("Error",error)
        }
    }
    useEffect(()=>{
        fetchMovie(...args)
    },[...args])
    return {moviedata}
}
export default useMovieList