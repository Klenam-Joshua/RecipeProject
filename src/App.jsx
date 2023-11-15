import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import './assets/styles/global.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home' ;
import FilteredRecipes from './pages/FilteredRecipes/FilteredRecipes';
import Recipe from './pages/Recipe/Recipe';
import CreateRecipe from './pages/CreateRecipe/CreateRecipe';
import { useFetch } from './hooks/useFetch';
import ThemeProvider from './Context/ThemeContext.jsX';
import { useContext } from 'react';
import { ThemeContext } from './Context/ThemeContext.jsX';

//css
import './index.css'


const App = () => {
      const {data, isLoading} = useFetch('/recipes');
      const {mode} = useContext(ThemeContext);
  return (
        <Router >
            <main className={mode === "light"? "theme_light" : "theme_dark" } >
                  
                 <Navbar >
                         <Routes>
                               <Route exact path='/' element={<Home />}/>
                               <Route exact path='/recipe/:id'  element={<Recipe/>} />
                               <Route  exact path='recipes/' element={<FilteredRecipes />} />
                               <Route exact path='create-recipe'  element={<CreateRecipe  data={()=>{if(data)
                                 return data.count()
                              }}/>} />
                         </Routes>
                 </Navbar>
            </main>
        
        </Router>
  )
}

export default App
