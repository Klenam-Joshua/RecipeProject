import { useEffect, useReducer, useState } from "react"
import { createContext } from "react"


export const ThemeContext = createContext();

 const ThemeProvider = ({children})=>{
     const[navbarColor, setNavbarColor] = useState("");





//let {currentColor} = useChangeMode(navbarColor)
    const [currentNavColor, setCurrentNavColor] = useState(localStorage.getItem("navbarColor"))
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("isDarkMode"))
    const [bodyColor, setBodyColor] = useState({});

    
    //const handleChange = (color)=>{
     // console.log(color)
     // localStorage.setItem("navbarColor",color)
     // setNavbarColor(color)

  
//}
      
//     useEffect(()=>{

//      console.log("triggered")
//         setCurrentNavColor(localStorage.getItem("navbarColor"));
//         console.log(navbarColor, "hi there")
//         console.log("the current one ",currentNavColor)

//              setIsDarkMode(localStorage.getItem("isDarkMode"));

//         if(isDarkMode){
//                 setBodyColor({background:"#36454F", color:"white"})
//         }
//         else{
//            setBodyColor({background:"#dedede", color:"white"})
//         }

//      //    localStorage.getItem("isDarkMode");
//      //    console.log(localStorage.getItem("navbarColor"))
             
//     },[navbarColor, isDarkMode])
      const reducer = (state, action)=>{
               switch(action.type){
                    case "CHANGE_COLOR":
                         return {...state,navbar:action.payload}
                    case "CHANGE_MODE":
                          return {...state,mode:action.payload}
                    default:
                         return state   
               }

               
      }

       const [state, dispatch] = useReducer(reducer,{
          navbar:"#58249",
          mode:"light"
         
       })

        const handleChange = (color)=>{
                  dispatch({type:"CHANGE_COLOR", payload:color})
        }
       
       

const handleMode = (mode)=>{
               dispatch({type:"CHANGE_MODE", payload:mode})
               console.log(mode)
}

    return(
              <ThemeContext.Provider  value={{...state, handleChange, handleMode}}>
                       {children}
              </ThemeContext.Provider>  
    )


    // the context api will accept :: a dynamic value


     // return {currentColor, isDarkMode}
}


export  default ThemeProvider;