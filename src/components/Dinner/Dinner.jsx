import React, {useContext} from "react";
import { DinnerRecipesContext } from "../Contexts/DinnerDataContext";
import styles from "./Dinner.module.scss";
import {Recipe} from "../Recipe-Overview";
import  Link from "next/link";
export default function DinnerContainer() {
  const dinnerRecipes=useContext(DinnerRecipesContext);
    return(
    <div className={styles.container}>
    <h2 className={styles.dinnerTitle}>Dinner</h2>
    <div className={styles.dinnerContainer}>
    {dinnerRecipes.filter(recipe=>{
      return (recipe.id > 20) && (recipe.id < 24);}).map(renderRecipe=>{
         return <Recipe
          name={renderRecipe.name}
          imgURL={renderRecipe.imgURL}
          id={renderRecipe.id}
          key={"dinner"+renderRecipe.id}
          URL={renderRecipe.URL}
        />

      })
    }
    </div>
    <div className={styles.seeMore}>
      <Link href="/dinner">See More</Link>
    </div>
  </div>
  )}

