import styles from "./LunchOverview.module.scss";
import React, {useContext} from "react";
import {LunchRecipesContext} from "../Contexts/LunchDataContext";

export function LunchOverview (){
  const lunchRecipes=useContext(LunchRecipesContext);
  return(
  <div className={styles.container}>
  {lunchRecipes.map(recipe=>{
    return <div className = {styles.card}>
      <h3>{recipe.name}</h3>
      <div className = {styles.cardImg}>
        <a href={recipe.URL}><img src={recipe.imgURL} alt={recipe.name}/></a>
        </div>
        <p>{recipe.source}</p>
        <button className={styles.moreDetails}>More Details</button>
      </div>
  })} 
    </div>
  )
}