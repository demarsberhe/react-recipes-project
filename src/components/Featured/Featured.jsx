import React, {useContext} from "react";
import styles from "./Featured.module.scss";
import {FeaturedRecipesContext} from "../Contexts/FeaturedContext";

export function Featured(){
  const allRecipes=useContext(FeaturedRecipesContext);
  //const breakfastRecipes = allRecipes[0];
  //const lunchRecipes = allRecipes[1];
  //const dinnerRecipes = allRecipes(2);
  // const favBreakfastRecipes = breakfastRecipes.filter(recipe=>{
  //   return recipe.favorite === true;
  // })
  console.log(allRecipes);
  return(
    <>
      <div className={styles.featured}>
      <h3>Featured Recipes</h3>
      </div>
    </>
  )
}
