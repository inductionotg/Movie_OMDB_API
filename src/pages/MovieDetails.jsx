import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import MovieCard from "../components/MovieCard"
import { searchMovieById } from "../apis/omdb"
import axios from "axios"

function MovieDetails(){
    const {id} = useParams()
    const [movie,setMovie] = useState(null)
    console.log(id)
    const movieUrl = searchMovieById(id)

    async function downloadMovie(){
        try {
            const response = await axios.get(movieUrl)
            console.log(response)
            setMovie(response.data)
        } catch (error) {
            console.log("Error",error)
        }
    }
    useEffect(()=>{
        downloadMovie()
    },[])
    return (
        <div>
            {movie 
                && 
                    <MovieCard
                        Title={movie.Title}
                        Poster={movie.Poster}
                        Type={movie.Type}
                        Year={movie.Year}
                    />}
        </div>
    )
}
export default MovieDetails