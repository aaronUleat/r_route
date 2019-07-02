import React from "react";

const Form = props => (
  <div>
        <form style={{ marginBottom: "2rem" }} onSubmit={props.getRecipe}>
            <input className="form__input" type="text" name="recipeName" />  
            <button className="form__button"> Search </button>
        </form>
  </div>
);

export default Form;