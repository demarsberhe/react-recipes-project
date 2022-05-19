import React, {useContext} from "react";
import {Recipe} from "../Recipe-Overview";
import {LunchRecipesContext} from "../Contexts/LunchDataContext";
import styles from "./Lunch.module.scss";
export default function LunchContainer() {
  const lunchRecipes = useContext(LunchRecipesContext);
    return(
      <>
      <div className={styles.lunchContainer}>
      {lunchRecipes.map(recipe=>{
        return <Recipe
          name={recipe.name}
          imgURL={recipe.imgURL}
          key={"lunch"+recipe.id}
          URL={recipe.URL}
        />
      }).filter((renderRecipe, index)=>{
        return index < 5
      })
    }
      </div>
    </>
  )
}