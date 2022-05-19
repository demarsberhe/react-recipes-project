import React, {useContext} from "react";
import { BreakfastRecipesContext } from "../Contexts/BreakfastRecipesContext";
import styles from "./Breakfast.module.scss";
import {Recipe} from "../Recipe-Overview";
export default function BreakfastContainer() {
  const breakfastRecipes = useContext(BreakfastRecipesContext);
    return(
    <>
      <div className={styles.breakfastContainer}>
      {breakfastRecipes.map(recipe=>{
        return <Recipe
          name={recipe.name}
          imgURL={recipe.imgURL}
          key={"breakfast"+recipe.id}
          URL={recipe.URL}
        />
      }).filter((renderRecipe, index)=>{
        return index < 5;

      })
    }
    </div>
  </>
  )
}
