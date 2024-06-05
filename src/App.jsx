
import './App.css'
import Navbar from './components/Navbar'
import MainRoutes from './routes/MainRoutes'
import {ThemeContext} from "./context/theme-context"
import { useEffect, useState } from 'react'
function App() {
  const [theme,setTheme] = useState(() => {
    const storedValue = window.localStorage.getItem('app-theme');
    try {
      return storedValue ? JSON.parse(storedValue) : 'dark';
    } catch (e) {
      return 'dark';
    }
  });
  useEffect(() => {
    localStorage.setItem('app-theme', JSON.stringify(theme));
  }, [theme]);
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
