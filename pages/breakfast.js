import React, {useState, useEffect} from "react";
import {BreakfastOverview} from "../src/components/Breakfast/BreakfastOverview";
import {BreakfastRecipesContext} from "../src/components/Contexts/BreakfastRecipesContext";
import {ref, onValue} from "firebase/database";
import {db} from "../src/components/App";


export default function Breakfast(){
  const [breakfastRecipes, setBreakfastRecipes]=useState([]);
  const[isDataLoaded, setDataIsLoaded]=useState(false);
  const dbRefBreakfast = ref(db, "breakfastData"); //this retrieves a reference to the breakfastData colleciton within the database
  useEffect(()=>{
    onValue(dbRefBreakfast, snapshot=>{ //snapshot returns the current array of data stored in the breakfastData array
      let breakfastArray=[];
      snapshot.forEach(childSnapshot=>{
        breakfastArray.push(childSnapshot.val()); //this iterates through each value in the breakfastData array and pushes each object to the breakfastArray array
        }
      )
      setBreakfastRecipes(breakfastArray) //this makes the breakfast data available within the scope of the application
      setDataIsLoaded(true);
      }
    )
  }, [])
  if(!isDataLoaded){
    return <h1>Loading...</h1>
  }
    return(
    <>
      <BreakfastRecipesContext.Provider value={breakfastRecipes}>
        <BreakfastOverview/>
      </BreakfastRecipesContext.Provider>
    </>
    )
  }