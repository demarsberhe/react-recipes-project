import styles from "./DinnerOverview.module.scss";
import React, {useContext} from "react";
import {DinnerRecipesContext} from "../Contexts/DinnerDataContext";

export function DinnerOverview (){
  const dinnerRecipes=useContext(DinnerRecipesContext);
  return(
  <div className={styles.container}>
  {dinnerRecipes.map(recipe=>{
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