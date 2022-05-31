import styles from "./DinnerOverview.module.scss";
import React, {useContext, useState} from "react";
import {DinnerRecipesContext} from "../Contexts/DinnerDataContext";

export function DinnerOverview (){
  const dinnerRecipes=useContext(DinnerRecipesContext);
  const[searchField, updateSearchField]=useState("");
  let [filteredDinnerRecipes, updateFilteredDinnerRecipes]=useState(dinnerRecipes);
  const handleChange = (event=>{
      const currentSearch = event.target.value.toLocaleLowerCase();
      updateSearchField(currentSearch); 
      filteredDinnerRecipes=dinnerRecipes.filter(recipe=>{
        return recipe.name.toLocaleLowerCase().includes(searchField);
      })
      updateFilteredDinnerRecipes(filteredDinnerRecipes);
      console.log(searchField);
      console.log(filteredDinnerRecipes);
    })
  return(
    <>
  <h3 className={styles.title}>Dinner</h3>
  <div id="search-box">
      <input
      className={styles.searchBar}
      type="search"
      placeholder={"search dinner recipes"}
      onChange={handleChange}
      />
    </div>
  <div className={styles.container}>
  {filteredDinnerRecipes.map(recipe=>{
    return <div className = {styles.card}>
      <h4 className={styles.title}>{recipe.name}</h4>
      <div className = {styles.cardImg}>
        <a href={recipe.URL} target="_blank"><img src={recipe.imgURL} alt={recipe.name} className={styles.imgSize}/></a>
        </div>
        <p>{recipe.source}</p>
        <div className="accordion" id="recipe-details">
        <div className="accordion-item">
          <h2 className="accordion-header" id="recipe-details">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse"+recipe.id} aria-expanded="false" aria-controls="collapseOne">
              Ingredients
            </button>
          </h2>
          <div id={"collapse"+recipe.id} className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#recipe-details">
            <div className="accordion-body">
              <ul>
              {recipe.ingredients.map(ingredient=>{
                  return <li className={styles.ingredientItem}>{ingredient}</li>
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="recipe-steps">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapseStepList"+recipe.id}aria-expanded="false" aria-controls="collapseOne">
              Steps
            </button>
          </h2>
          <div id={"collapseStepList"+recipe.id} className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#recipe-details">
            <div className="accordion-body">
              <ol>
                {recipe.steps.map(step=>{
                  return <li>{step}</li>
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
      </div>
  })} 
    </div>
    </>)
}