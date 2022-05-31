import styles from "./LunchOverview.module.scss";
import React, {useContext, useState} from "react";
import {LunchRecipesContext} from "../Contexts/LunchDataContext";


export function LunchOverview (){
  const[searchField, updateSearchField]=useState("");
  const lunchRecipes=useContext(LunchRecipesContext);
  let [filteredLunchRecipes, updateFilteredBreakfastRecipes]=useState(lunchRecipes);
  const handleChange = (event=>{
      const currentSearch = event.target.value.toLocaleLowerCase();
      updateSearchField(currentSearch); 
      filteredLunchRecipes=lunchRecipes.filter(recipe=>{
        return recipe.name.toLocaleLowerCase().includes(searchField);
      })
      updateFilteredBreakfastRecipes(filteredLunchRecipes);
      console.log(searchField);
      console.log(filteredLunchRecipes);
    })
  return(
<>
  <h3 className={styles.title}>Lunch</h3>
  <div id="search-box">
      <input
      className={styles.searchBar}
      type="search"
      placeholder={"search lunch recipes"}
      onChange={handleChange}
      />
    </div>
  <div className={styles.container}>
  {filteredLunchRecipes.map(recipe=>{
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