
import './App.css'
import Navbar from './components/Navbar'
import MainRoutes from './routes/MainRoutes'
import {ThemeContext} from "./context/theme-context"
import { useState } from 'react'
function App() {
  const [theme,setTheme] = useState("dark")

  return (
    <>
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div className='app-wrapper' data-theme={theme}>
        <Navbar/>
        <MainRoutes/>
      </div> 
    </ThemeContext.Provider>
     
    </>
  )
}

export default App
