import { useState } from 'react'
import './Navbar.css'
import useMovieList from '../hooks/useMovieList'
import {useDebounce} from '../apis/useDebounce.js'
import {Link, useNavigate} from 'react-router-dom'
import { FaSun,FaMoon } from "react-icons/fa";
import { useContext } from 'react'
import { ThemeContext } from '../context/theme-context.jsx'

function Navbar(){
    const [isAutoCompleteVisible,setAutoCompleteVisible] = useState(false)
    const [searchTerm,setSearchTerm] = useState('')
    const navigator = useNavigate()

    const {moviedata} = useMovieList(searchTerm)

    const {theme,setTheme} = useContext(ThemeContext)
    function handleAutoComplete(e,imdbDB){
        console.log(e,imdbDB)
        navigator(`/movie/${imdbDB}`)
    }
    
  
    /**
     * Using State also we can do autocomplete
     * const [autoComplete,setAutoComplete] = useState(false)
     * onFocus={()=>{
     * setAutocomplete(true)
     * }}
     * onBlur={()=>{
     * setAutocomplete(false)
     * }}
     * <div className="result-list" style={{display:(autoComplete)?true:false}}>
     * 
     * Using ref 
     * const resultRef = useRef(null)
     * onFocus={()=>{
                        console.log(resultRef.current)
                        resultRef.current.style.display='block'
                    }}
                    onBlur={()=>{
                        resultRef.current.style.display='None'
                    }}
        <div className="result-list" ref={resultRef}>        
     */
    return (
        <div className='navbar-wrapper'>
            <div className='navbar-logo'><Link to='/'>Movie Base</Link></div>
            <div className='search-bar'>
                <input
                    type="text"
                    placeholder='What are you watching Today'
                    onFocus={()=>{
                        setAutoCompleteVisible(true)
                    }}
                    onBlur={()=>{
                       setAutoCompleteVisible(false)
                    }}
                    onChange={useDebounce((e)=>setSearchTerm(e.target.value))}
                /> 
            
                <div className="result-list" style={{display:(isAutoCompleteVisible)?'block':'none'}}>
                    <div> Results are ..{searchTerm}</div>
                    {moviedata.length>0 && moviedata.map((movie)=>{
                        return (
                            <div key={movie?.imdbID} onMouseDown={(e)=>handleAutoComplete(e,movie?.imdbID)} className='autocomplete-result'>{movie?.Title}</div>
                        )
                    })}
                </div>
            </div>
            <div onClick={()=>setTheme((theme==='dark')?'light':'dark')}>
                {theme==='dark'?<FaSun size={40} className="theme-icon" />:<FaMoon size={40} className="theme-icon"/>}
            </div>

        
        </div>
    )
}
export default Navbar