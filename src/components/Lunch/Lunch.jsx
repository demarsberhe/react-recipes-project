import React, {useContext} from "react";
import {Recipe} from "../Recipe-Overview";
import {LunchRecipesContext} from "../Contexts/LunchDataContext";
import styles from "./Lunch.module.scss";
import  Link from "next/link";
export default function LunchContainer() {
  const lunchRecipes = useContext(LunchRecipesContext);
    return(
      <div className={styles.container}>
        <h2 className={styles.lunchTitle}>Lunch</h2>
        <div className={styles.lunchContainer}>
        {lunchRecipes.filter(recipe=>{
        return (recipe.id > 10) && (recipe.id < 14)
      }).map(renderRecipe=>{
        return <Recipe
          name={renderRecipe.name}
          imgURL={renderRecipe.imgURL}
          key={"lunch"+renderRecipe.id}
          URL={renderRecipe.URL}
          id={renderRecipe.id}
        />
      })
    }
      </div>
      <div className={styles.seeMore}>
      <Link href="/lunch">See More</Link>
    </div>
    </div>
  )
}