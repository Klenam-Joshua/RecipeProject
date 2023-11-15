import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./Recipe.css"
import { useFetch } from '../../hooks/useFetch';
import ContentSection from '../../Components/ContentSection/ContentSection';
import ThemeProvider from '../../Context/ThemeContext.jsX';
import { ThemeContext } from '../../Context/ThemeContext.jsX';
import { useContext } from 'react';
import { projectFireStore } from '../../firebase/config';


const Recipe = () => {
   
    const {id} = useParams();
    const [data,setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError]  = useState(false)
   // const {data, isLoading} = useFetch(`/recipes/${id}`);

 const {mode} = useContext(ThemeContext)


     useEffect(()=>{
             setIsLoading(true)
          const fetchRecipe = async ()=>{
            
                   try{
                    const recipe  = await projectFireStore.collection('recipes').doc(id).get();
                    console.log(recipe)
                    console.log(recipe)
                    setData(recipe.data())
                    setIsLoading(false)
                   
                   }
                   catch(err){
                        throw new Error (" there was a proble loading the data")
                        setError(true)
                        setIsLoading(false)
                   }
          }
          fetchRecipe()
     },[])

  return (
          <ContentSection>
              
            
                     {
                       error &&
                       <p>
                         there was an error loading your data
                       </p>
                     }

                
                   
                    <div  className={mode === "light" ? "recipe-details recipe_list_light" : "recipe-details recipe_list_dark "}>
                      {
                        isLoading &&
                        <p className='text-center'>
                           loading recipe details...
                        </p>
                      }
                     {  
                    
                     data &&
                     <>
                            <h2  className='text-center  '> {data.recipeTitle}</h2>  
                            <p  className='text-center '>
                                  {`Takes ${data.recipeCookingTime}  minutes to cook`}
                                </p>  
                                <p className='text-center'>
                                     {
                                    //  data.recipeIngredients.toLocaleString()
                                     }
                                    </p>   
                                <p  className='text-center'>{data.recipeMethod} </p>  
                                </>
                           }
                    </div>

                
          </ContentSection>
  )
}

export default Recipe
