import React,{useEffect,useState} from "react";
import Recipe from "./recipe"
require('dotenv').config();
function App(){
    const [recipes,setRecipe]= useState([]);
    const[search,setSearch]=useState('');
    const[query,setQuery]=useState('');
    
    useEffect(() => {
        const  getRecipes=async() => {
            const response = await fetch(exampleReq);
            const data = await response.json();
            setRecipe(data.hits)
        }
       getRecipes();
    },[query]);
    function updateSearch(event){
       setSearch(event.target.value)
    }
    function getSearch(event){
        event.preventDefault();
        setQuery(search)
    }
    const API_ID = "abbb3668";
const API_KEYS = "902ed0ef1910fd0477a846458e052353";
const exampleReq = 
`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEYS}`;
 return(
     <div className="App">
         <div className="heading">
         <h1>⚜️Priyanka's Recipe Book⚜️</h1>
         <h2>Nothing brings people together like good food</h2></div>
        <form onSubmit={getSearch} className="search-form">
            <input className="search-bar" type="text" value={search} onChange={updateSearch}placeholder="search through ingredient" required/>
            <button className="search-button" type="submit">search</button>
        </form>
        <div className="recipes">
        {recipes.map(recipe => (
            <Recipe
             key={recipe.recipe.label}
             title={recipe.recipe.label}
             calories={recipe.recipe.calories}
             image={recipe.recipe.image}
             ingredients={recipe.recipe.ingredients}
            />
        ))}
        </div>
     </div>
 );
}
export default App;