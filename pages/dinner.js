import React, {useState, useEffect} from "react";
import {DinnerOverview} from "../src/components/Dinner/DinnerOverview";
import {DinnerRecipesContext} from "../src/components/Contexts/DinnerDataContext";
import {ref, onValue} from "firebase/database";
import {db} from "../src/components/App";

export default function Dinner(){
  const[dinnerRecipes, setDinnerRecipes]=useState([]);
  const[isDataLoaded, setDataIsLoaded]=useState(false);
  const dbRefDinner = ref(db, "dinnerData"); //this retrieves a reference to the dinnerData colleciton within the database
  useEffect(()=>{
    onValue(dbRefDinner, snapshot=>{ //snapshot returns the current array of data stored in the breakfastData array
      let dinnerArray=[];
      snapshot.forEach(childSnapshot=>{
          dinnerArray.push(childSnapshot.val()); //this iterates through each value in the breakfastData array and pushes each object to the breakfastArray array
      }
    )
    setDinnerRecipes(dinnerArray) //this makes the breakfast data available within the scope of the application
    setDataIsLoaded(true);
    }
  )
  })
  if(!isDataLoaded){
    return <h1>Loading...</h1>
  }
    return(
    <>
      <h1>Dinner Recipes</h1>
      <DinnerRecipesContext.Provider value={dinnerRecipes}>
        <DinnerOverview/>
      </DinnerRecipesContext.Provider>
    </>
    )
  }