import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {BsFillMoonFill} from "react-icons/bs"
import ColorSelector from '../ColorSelector/ColorSelector';
import { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext.jsX';

//icons

import modeIcon  from "../../assets/icons/modeIcon.svg" 


//css
import  "./Navbar.css"
//import { useChangeMode } from '../../hooks/useChangeMode';

const Navbar = (props) => {
     const [navbarColor, setNavbarColor] = useState("")
     const navigate = useNavigate();
     const [word, setWord]  = useState("water");
     const handleSearch = (e)=>{
            e.preventDefault();
            console.log(word)
             navigate(`/recipes?q=${word}`);
             setWord("")
            
     }

     const {navbar,mode, handleMode } = useContext(ThemeContext)

     
     // const handleChange = (color)=>{
     //              setNavbarColor(color)
               
   //  }



    // let {currentColor} = useChangeMode(navbarColor)
  return (
    <>
      <header id='header'  style={{backgroundColor:navbar}}  >
             <div className="row  justify-between align-center" id='wrapper'>
                   <div className="brandName__container">
                        <Link  to='/'>
                             Cooking Guru
                        </Link>
                   </div>
                   <div className="row " >
                       {/*    ==========  search form ======= */}
                       <div className="form-container">
                              <form role='search'  onSubmit={(e)=>handleSearch(e)}>
                                 <label htmlFor="search_field" spellCheck={false}> search:</label>
                                  <input 
                                  onChange={
                                   (e)=>{setWord(e.target.value)
                                        console.log(word)
                                   }}
                                  value={word}
                                  type="text"  id="search_field" />
                                  <input type="submit"  />
                             </form>  

                        </div>
                        <div className='btn-container'>
                             <Link  to="create-recipe"  id="new-recipe-btn">
                                       Create Recipe
                             </Link>
                        </div>
                    </div>
             </div>
             <div className={mode === "light" ? "lower-header  theme_light" : "lower-header theme_dark"}>
              <div className="mode-icon">
                 <img src={modeIcon} style={{filter:mode === "light" ? 'invert(20%)' : 'invert(100%)', cursor:"pointer"}}  onClick={()=>{
                             
                            handleMode(mode === "light" ? "dark" : "light")
                 }} />
                     
                 
              </div>
              <ColorSelector />
       </div>
     
      </header>

      {props.children}
     </>
  )
}

export default Navbar
