import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"
import {searchMovie} from '../apis/omdb'
import axios from "axios"
import "./HomePage.css"
function HomePage(){
    const [moviedata,setMovieData] = useState([])
    async function fetchMovie(...args){
        const urls = args.map((name)=>searchMovie(name))
        console.log("dsd",urls)
        try {
            const response = await axios.all(urls.map((url)=>axios.get(url)))
            const responseMovies = response.map((movies)=>movies.data.Search)
            console.log(responseMovies)
            setMovieData([].concat(...responseMovies))
        } catch (error) {
            console.log("Error",error)
        }
    }
    useEffect(()=>{
        fetchMovie('harry',"batman","avengers")
    },[])
    return (
        <>
            <div className="movie-card-wrapper">
                {moviedata.length>0 && moviedata.map((movie)=>{
                    return (
                        <MovieCard key={movie?.imdbID} {...movie}/>
                    )
                })}
            </div>
        </>
    )
}
export default HomePage