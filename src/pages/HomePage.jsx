
import MovieCard from "../components/MovieCard"
import useMovieList from "../hooks/useMovieList"
import "./HomePage.css"
function HomePage(){
    const{moviedata} = useMovieList("avengers","batman","cricket")
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