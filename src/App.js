import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form"
import Recipes from "./components/Recipes";
const API_KEY = "a69033d1bc596f8aca3ebb30d1e0ab27";

class App extends Component {

  state = {
    recipes : []
  }

  getRecipe = async (e) => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`)
    const data = await api_call.json();
    this.setState({recipes:data.recipes});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        < Recipes recipes={this.state.recipes} />
      </div>
    );

  }
}

export default App;