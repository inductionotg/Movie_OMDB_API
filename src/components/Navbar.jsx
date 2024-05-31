import { useRef, useState } from 'react'
import './Navbar.css'

function Navbar(){
    const [isAutoCompleteVisible,setAutoCompleteVisible] = useState(false)
    const resultRef = useRef(null)
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
            <div className='navbar-logo'>Movie Base</div>
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
                /> 
            
                <div className="result-list" style={{display:(isAutoCompleteVisible)?'block':'none'}}>
                    <div className='autocomplete-result'>result 1</div>
                    <div className='autocomplete-result'>result 1</div>
                    <div className='autocomplete-result'>result 1</div>
                    <div className='autocomplete-result'>result 1</div>
                </div>
            </div>
            <div>
                Theme
            </div>

        
        </div>
    )
}
export default Navbar