import { useLocation, Link, useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch";
import ContentSection from "../../Components/ContentSection/ContentSection"
import { useEffect, useState } from "react";
import "../Home/Home.css"


const FilteredRecipes = () => {
 const [filteredData, setFilteredData] = useState(null);
 const stringQuery = useLocation().search;
 let stringParams = new URLSearchParams(stringQuery);
 let keyWord = stringParams.get('q');

const url = '/recipes?q='+keyWord;

    const {data, isLoading} = useFetch(url);

  
 


    //  console.log(filteredData)



  return (
       <ContentSection>

            <h1  className="text-center">
                 Recipes that matched {keyWord}
            </h1>
              {
               data && data.length < 1 &&
               <p className="text-center" style={{marginTop:"4rem"}}>
                       no recipes matched {keyWord}
               </p> 
              }
                  {
                    isLoading &&
                    <p>
                         loading recipes...
                    </p>
                  }
                 
                  <div className="data">
                   {
                    data &&
                         data.map((recipe)=>(
                              <div className="recipe_container" key={recipe.id} >
                              <h2>
                                   {recipe.title}
                              </h2>

                              <p>{`${recipe.recipeTime} minutes to make` }</p>
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

export default FilteredRecipes
