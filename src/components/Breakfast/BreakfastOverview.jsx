import React, {useContext} from "react";
import styles from "./BreakfastOverview.module.scss";
import { BreakfastRecipesContext } from "../Contexts/BreakfastRecipesContext";

export function BreakfastOverview (){
  const breakfastRecipes=useContext(BreakfastRecipesContext);
  return(
  <div className={styles.container}>
  {breakfastRecipes.map(recipe=>{
    return <div className = {styles.card}>
      <h3>{recipe.name}</h3>
      <div className = {styles.cardImg}>
        <a href={recipe.URL}><img src={recipe.imgURL} alt={recipe.name}/></a>
        </div>
        <p>{recipe.source}</p>
        <button className={styles.moreDetails}>More Details</button>
      </div>
  })
} 
    </div>
  )
}