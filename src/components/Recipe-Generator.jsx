import React from "react";
import {recipes, setLink, generateRandomRecipe} from "../recipes";

export class Generator extends React.Component{
  constructor(props){
    super(props);
    this.handleRandomRecipe=this.handleRandomRecipe.bind(this);
    
  }
  handleRandomRecipe(){
    let selectedRecipe = generateRandomRecipe(recipes);
    document.getElementById('recipe-selected').innerHTML = selectedRecipe.mealResponse();
    document.getElementById('recipe-link').style.display = 'block'; 
    setLink(selectedRecipe); 
    document.getElementById('recipe-button').style.display = 'none';
    document.getElementById('try-again').style.display = 'inline';
    document.getElementById(`${selectedRecipe.recipeId}`).classList.add('selected-border');   
  }
  render(){
    return ( <div id="search">
    <div id="search-selectors">
      <h3>What should I eat?</h3>
      <h4 id="recipe-selected">...</h4>
   <button id="recipe-button" onClick={this.handleRandomRecipe}>Select Recipe</button>
   <button id="try-again"><a href="index.html">Find another recipe</a></button>
    <a href= ''id="recipe-link">Go to recipe!</a>
    </div> 
</div>);
  }

}