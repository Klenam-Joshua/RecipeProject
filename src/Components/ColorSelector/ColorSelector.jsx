import { useState } from "react";
import "./ColorSelector.css"
//import { useChangeMode } from "../../hooks/useChangeMode.js";
import { ThemeContext } from "../../Context/ThemeContext.jsX";
import { useContext } from "react";

const ColorSelector = () => {
      const {navbar,handleChange} = useContext(ThemeContext)
     // console.log(handleChange)
         
    const [colorSelectors, setColorSelectors] = useState([
        {
             color:"red",
        },
        {
             color:"yellow",
        }
        ,
        {
             color:"green",
        }
       ])
    //const [navbarColor, setNavbarColor] = useState("");

   // let col = useChangeMode(navbarColor)
  return (
    <div className="multi_color_container">
                {
                    colorSelectors.map((selector)=>(
                             <div 
                             key={selector.color}
                             onClick={()=>{
                                           //  localStorage.setItem("navbarColor",selector.color)
                                            localStorage.setItem("navbarColor",selector.color)
                                            handleChange(selector.color)
                                          
                                           
                             }}
                             className={`selector color_${selector.color}`}>
                                
                             </div>
                    ))
                }  
    </div>
  )
}

export default ColorSelector
