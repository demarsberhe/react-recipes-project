import React from "react";

export class Generator extends React.Component{
  render(){
    return ( <div id="search">
    <div id="search-selectors">
      <h3>What should I eat?</h3>
      <h4 id="recipe-selected">...</h4>
   <button id="recipe-button">Select Recipe</button>
   <button id="try-again"><a href="index.html">Find another recipe</a></button>
    <a href= ''id="recipe-link">Go to recipe!</a>
    </div> 
</div>);
  }

}