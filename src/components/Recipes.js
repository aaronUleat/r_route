import React from "react";
import { Link } from "react-router-dom";
const Recipes = ({recipes}) => (
    <div className="container">
      <div className="row">
        {recipes.map( recipe => {
            return (
              <div className="col-md-4 mb-2" key={recipe.recipe_id}>
                  <div className="recipes__box">
                    <img className="recipe__box-img" src={recipe.image_url} alt={recipe.title} />
                    <div className="recipe__text">
                      <h5 className="recipes__title"> 
                        {recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 25)}...` } 
                      </h5>
                      <p className="recipes_subtitle"> Publisher: <span> {recipe.publisher} </span>  </p>
                    </div>  
                    <button className="recipe_buttons"> 
                      <Link to={{
                        pathname: `/recipe/${recipe.recipe_id}`,
                        state: { recipe: recipe.title }
                        }}> View Recipe  </Link>
                    </button>
                  </div>
              </div>
            )   
          })}
      </div>
    </div>    
);

export default Recipes;