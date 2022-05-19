import React, {useEffect, useState} from "react";
import {LunchRecipesContext} from "../src/components/Contexts/LunchDataContext";
import {LunchOverview} from "../src/components/Lunch/LunchOverview";
import {ref, onValue} from "firebase/database";
import {db} from "../src/components/App";

export default function Lunch(){
  const [lunchRecipes, setLunchRecipes]=useState([]);
  const[isDataLoaded, setDataIsLoaded]=useState(false);
  const dbRefLunch = ref(db, "lunchData"); //this retrieves a reference to the breakfastData colleciton within the database
  useEffect(()=>{
    onValue(dbRefLunch, snapshot=>{ //snapshot returns the current array of data stored in the breakfastData array
      let lunchArray=[];
      snapshot.forEach(childSnapshot=>{
        lunchArray.push(childSnapshot.val()); //this iterates through each value in the breakfastData array and pushes each object to the breakfastArray array
        }
      )
      setLunchRecipes(lunchArray) //this makes the breakfast data available within the scope of the application
      setDataIsLoaded(true);
        }
      )
  })
    if(!isDataLoaded){
      return <h1>Loading...</h1>
    }
    return(
      <>
        <h1>Lunch Recipes</h1>
        <LunchRecipesContext.Provider value={lunchRecipes}>
          <LunchOverview/>
        </LunchRecipesContext.Provider>
    </>
    )
  }