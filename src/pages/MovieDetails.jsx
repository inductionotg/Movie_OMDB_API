import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import {Rating} from "@smastrom/react-rating"
import MovieCard from "../components/MovieCard"
import { searchMovieById } from "../apis/omdb"
import axios from "axios"
import '@smastrom/react-rating/style.css'
import './MovieDetails.css'
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
    },[id])
    return (
        <div className="movie-details-wrapper">
                {movie 
                    && 
                        <MovieCard
                            Title={movie.Title}
                            Poster={movie.Poster}
                            Type={movie.Type}
                            Year={movie.Year}
                        />}
                {movie && <div className="movie-details">
                    <div>
                        Plot: {movie.Plot}
                    </div>
                    <div className="actors">
                        Actors: {movie.Actors}
                    </div>
                    <div>
                        Genre: {movie.Genre.split(',').map((genre)=>{
                            return <span className="genre" key={genre}>{genre}</span>
                        })}
                    </div>
                    <div>
                        <Rating items={10} style={{maxWidth:350}} value={Math.floor(movie.imdbRating)}/>
                    </div>
                </div>
                }
            
        </div>
        
    )
}
export default MovieDetails