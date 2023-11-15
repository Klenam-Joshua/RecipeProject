import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ContentSection from '../../Components/ContentSection/ContentSection'
import { useFetch } from '../../hooks/useFetch'
import { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContext.jsX'
import "./Home.css"

// firestore

import { projectFireStore } from '../../firebase/config'

const Home = () => {
const {name, mode}= useContext(ThemeContext);
const [data, setData] = useState(null);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(false);




   //const {data, isLoading} = useFetch('/recipes');

     useEffect(()=>{
            setIsLoading(true);
async function getData(){
              const snapshot = await projectFireStore.collection('recipes').get();
              if(snapshot.empty){
                  setError("no data found")
              }
  
  else{
        const recipes = [];
          snapshot.docs.forEach((doc)=>{
             recipes.push({id:doc.id ,...doc.data() });
             console.log(recipes)
             setData(recipes)
             setIsLoading(false)
          })
}


}
getData()
     },[])

  return (
      <ContentSection>
         <h1>
               {name}
         </h1>
             {
                isLoading  &&
                <div>
                     loading recipes...
                </div>
                
             }

             <div className="data">
              
             {
                   data &&
                   data.map((recipe)=>(
                            <div className={mode === "light" ? "recipe_container recipe_list_light" : "recipe_container recipe_list_dark"} key={recipe.id} >
                                     <h2>
                                          {recipe.recipeTitle}
                                     </h2>
                                    
                                     <p>{`${recipe.recipeCookingTime} minutes to make` }</p>
                                     <p  className='method'>
                                        {recipe.method}
                                     </p>
                                     <Link  to={`/recipe/${recipe.id}`}  className='cook-btn'>
                                                  Cook This
                                     </Link>
                            </div>
                   ))
                   
             }
             </div>
      </ContentSection>
  )
}

export default Home
