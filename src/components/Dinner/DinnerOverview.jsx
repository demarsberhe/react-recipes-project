import styles from "./DinnerOverview.module.scss";
import React, {useContext} from "react";
import {DinnerRecipesContext} from "../Contexts/DinnerDataContext";

export function DinnerOverview (){
  const dinnerRecipes=useContext(DinnerRecipesContext);
  return(
    <>
  <h3 className={styles.title}>Dinner</h3>
  <div className={styles.container}>
  {dinnerRecipes.map(recipe=>{
    return <div className = {styles.card}>
      <h4 className={styles.title}>{recipe.name}</h4>
      <div className = {styles.cardImg}>
        <a href={recipe.URL} target="_blank"><img src={recipe.imgURL} alt={recipe.name} className={styles.imgSize}/></a>
        </div>
        <p>{recipe.source}</p>
        <div className="accordion" id="recipe-details">
        <div className="accordion-item">
          <h2 className="accordion-header" id="recipe-details">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse"+recipe.id} aria-expanded="false" aria-controls="collapseOne">
              Ingredients
            </button>
          </h2>
          <div id={"collapse"+recipe.id} class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#recipe-details">
            <div class="accordion-body">
              <ul>
              {recipe.ingredients.map(ingredient=>{
                  return <li>{ingredient}</li>
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="recipe-steps">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapseStepList"+recipe.id}aria-expanded="false" aria-controls="collapseOne">
              Steps
            </button>
          </h2>
          <div id={"collapseStepList"+recipe.id} class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#recipe-details">
            <div class="accordion-body">
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