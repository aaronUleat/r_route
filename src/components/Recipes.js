import React from "react";

const Recipes = ({recipes}) => (
    <div>
        <h3> Recipes </h3>
        {recipes.map( recipe => {
          return (
            <div key={recipe.recipe_id}>
               <img  src={recipe.image_url} /> 
               <p> {recipe.title} </p>
            </div>
          )   
        })}
    </div>    
);

export default Recipes;