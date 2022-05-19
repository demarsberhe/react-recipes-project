import React, {useContext} from "react";
import { DinnerRecipesContext } from "../Contexts/DinnerDataContext";
import styles from "./Dinner.module.scss";
import {Recipe} from "../Recipe-Overview";
export default function DinnerContainer() {
  const dinnerRecipes=useContext(DinnerRecipesContext);
    return(
    <>
    <div className={styles.dinnerContainer}>
    {dinnerRecipes.map(recipe=>{
        return <Recipe
          name={recipe.name}
          imgURL={recipe.imgURL}
          id={recipe.id}
          key={"dinner"+recipe.id}
          URL={recipe.URL}
        />
      }).filter((renderRecipe, index)=>{
        return index < 5;

      })
    }
    </div>
  </>
  )}

