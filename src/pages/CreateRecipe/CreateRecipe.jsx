import React, { useState } from 'react'
import ContentSection from '../../Components/ContentSection/ContentSection'
import { usePostData } from '../../hooks/usePostData'
import { projectFireStore } from '../../firebase/config'
import { useNavigate } from 'react-router-dom'

import "./CreateRecipe.css"

const CreateRecipe = ({recipesCount}) => {
     const navigate = useNavigate()




     const [recipeTitle, setRecipeTitle] = useState("");
     const [recipeIngredients, setRecipeIngredients] = useState("");
     const [recipeMethod, setRecipeMethod] = useState("");
     const [recipeTime, setRecipeTime] = useState("");
     const [isSent, setIsSent] = useState(false) 


     //error messages
      const [emptyIngField, setEmptyIngField] = useState(false);
     const [isLoading, setIsLoading] = useState(false);
     const [dataSubmitted, setDataSubmitted] = useState(false);

     const [allRecipeIngredients, setAllRecipeIngredients]  = useState([])



     const data = {
          
         recipeTitle:  recipeTitle,
          recipeIngredients: allRecipeIngredients,
         recipeMethod: recipeMethod,
         recipeCookingTime: recipeTime  
     }


     // creates new recipe
   const handleSubmit = (e)=>{
     e.preventDefault();
         setIsLoading(true)

     try{
           projectFireStore.collection('recipes').add(data);
           console.log("data added successfully")
           setIsLoading(false);
            navigate('/')
     }
     catch(error){
       console.log("there was a problem creating your recipe")
       setIsLoading(false);
     }
    

   }




  return (
    <ContentSection>
           {
               isLoading && 
               <p  className='text-light'>
                     submitting data...
               </p>
           }
           {
             dataSubmitted &&
             <p  className='text-light'>
                data submitted successfully
             </p>
           }


              <div className="new_recipe_form_container">
                   <h1  className='fw-bold  text-center '>
                       Add new Recipe
                   </h1>
                          <form  onSubmit={(e)=>handleSubmit(e)}>
                               <div  className='field_wrapper'>
                                     <label htmlFor="recipe_title_field">
                                          Recipe title
                                     </label>
                                      <input 
                                      onChange={(e)=>{
                                               setRecipeTitle(e.target.value)
                                      }}
                                      value={recipeTitle}
                                      type="text" id="recipe_tile_field" />
                               </div>
                                    
                                       {/* ===============================================
                                       ========= recipe ingredients input field ======== */}

                               <div className='field_wrapper' id='recipe_ingredients_container'>
                               <label htmlFor="recipe_ingredients">
                                          Recipe ingredients
                                     </label>
                                       <div className="row  justify-between">
                                       <input
                                        onChange={(e)=>{
                                             setRecipeIngredients(e.target.value)
                                        }}
                                        value={recipeIngredients}
                                       type="text" id="recipe_ingredients" />
                                       <button 
                                         onClick={
                                                  ()=>{
                                                       recipeIngredients ?
                                                      ( setEmptyIngField(false), 
                                                      setAllRecipeIngredients([...allRecipeIngredients,recipeIngredients ]), 
                                                      setRecipeIngredients("") )                                                                                                         
                                                             
                                                          :
                                                          setEmptyIngField(true)
                                                      
                                                        
                                                  }
                                         }
                                       id='ingredient_btn'  type='button'>
                                              add
                                       </button>
                                       </div>
                                        {allRecipeIngredients && <p>
                                             { allRecipeIngredients.toLocaleString()}
                                             </p>}
                                       {emptyIngField && <p style={{color:"red"}}> please this field must be filled </p>}
                               </div>

                               
                                       {/* ===============================================
                                       ========= recipe method input field ======== */}
                               <div className="field_wrapper">
                               <label htmlFor="recipe_method">
                                          Recipe method
                                     </label>
                                      <input 
                                       onChange={e=>setRecipeMethod(e.target.value)}
                                       value={recipeMethod}
                                      type="text" id="recipe_method" />
                               </div>


                                  {/* ===============================================
                                       ========= recipe Time input field ======== */}
                               <div className="field_wrapper">
                               <label htmlFor="recipe_time">
                                          Recipe time
                                     </label>
                                      <input
                                       onChange={e=>setRecipeTime(e.target.value)}
                                       value={recipeTime}
                                      type="text" id="recipe_time" />
                               </div>

                               <button type="submit"id='submit_btn'>

                                submit
                               </button>
                          </form>
                </div>  
    </ContentSection>
  )
}

export default CreateRecipe
