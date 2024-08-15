import React,{useState} from 'react'
import { createContext } from 'react';
import ReactSwitch from 'react-switch';
import MainBody from './components/MainBody';

export const ThemeContext =React.createContext("null");

function App() {
  const [theme,setTheme]=useState("");

  const toggleTheme= ()=>
    {
    setTheme((curr)=>(curr ==="light" ? "dark":"light"));
  };
  

  return (
    <ThemeContext.Provider value={{ theme,setTheme}}>
    <div className="App" id={theme}>

       
       

    
    <div className="switch">
  
      <ReactSwitch onChange={toggleTheme} checked={theme==="dark"}/>
      </div>
     
    <MainBody toggleTheme={toggleTheme}/>
    
    
      
    </div>
    </ThemeContext.Provider>
    
  );

}


export default App
