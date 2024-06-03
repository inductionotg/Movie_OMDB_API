import {Route,Routes} from "react-router-dom"
import HomePage from "../pages/HomePage"
import MovieDetails from '../pages/MovieDetails'
import ErrorPage from "../pages/ErrorPage"
function MainRoutes(){
    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/movie/:id' element={<MovieDetails/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </>
    )
}

export default MainRoutes