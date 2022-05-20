import React, {useContext} from "react";
import { BreakfastRecipesContext } from "../Contexts/BreakfastRecipesContext";
import styles from "./Breakfast.module.scss";
import {Recipe} from "../Recipe-Overview";
import  Link from "next/link";
export default function BreakfastContainer() {
  const breakfastRecipes = useContext(BreakfastRecipesContext);
    return(
    <div className={styles.container}>
      <h2 className={styles.breakfastTitle}>Breakfast</h2>
      <div className={styles.breakfastContainer}>
      {breakfastRecipes.filter(recipe=>{
        return (recipe.id > 2) && (recipe.id <7) 
      }).map(renderRecipe=>{
        return <Recipe
          name={renderRecipe.name}
          imgURL={renderRecipe.imgURL}
          key={"breakfast"+renderRecipe.id}
          URL={renderRecipe.URL}
          id={renderRecipe.id}
        />}
      )
  } 
    </div>
    <div className={styles.seeMore}>
      <Link href="/breakfast">See More</Link>
    </div>
  </div>
  )
}
