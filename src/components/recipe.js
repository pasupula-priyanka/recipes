import React from "react";
import style from "./recipe.module.css";
 function Recipe({title,calories,image,ingredients}){
   return(
       <div className={style.recipes}>
           <h1 className={style.title}>{title}</h1>
           <img className={style.image} src={image} alt=""/>
           
           <ol className={style.list}>
               <h2>INGREDIENTS</h2>
               {ingredients.map(ingredient =>(
                   <li>{ingredient.text}</li>
               ))}
           </ol>
           <p>
               <h2>CALORIES:</h2>{calories}</p>
       </div>
   )
 }
export default Recipe;