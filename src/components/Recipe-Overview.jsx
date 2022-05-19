import React from "react";
import styles from "./RecipeOverview.module.scss";

export function Recipe(props){
    return(
      <div className={styles.mealContainer}>
        <div className={styles.recipeOverviewCard}>
        <div className={styles.recipeOverview}>
          <a href={props.URL} target="_blank"><img src={props.imgURL} alt={props.name} className={styles.recipeImg}/></a>
          <p>{props.name}</p>
      </div>
    </div>
  </div>
)
  
}