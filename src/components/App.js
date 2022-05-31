import {Featured} from "./Featured/Featured";
import {startFirebase} from "./config";
import {ref, onValue} from "firebase/database";
import { BreakfastRecipesContext } from "./Contexts/BreakfastRecipesContext";
import BreakfastContainer from "./Breakfast/Breakfast";
import {LunchRecipesContext} from "./Contexts/LunchDataContext";
import {DinnerRecipesContext} from "./Contexts/DinnerDataContext";
import DinnerContainer from "./Dinner/Dinner";
import LunchContainer from "./Lunch/Lunch";
import React, {useEffect, useState} from "react";

export const db=startFirebase();
export function App(){
  const [breakfastRecipes, setBreakfastRecipes]=useState([]);
  const [lunchRecipes, setLunchRecipes]=useState([]);
  const [dinnerRecipes, setDinnerRecipes]=useState([]);
  const [allRecipes, setAllRecipes]=useState([]);
  const[isDataLoaded, setDataIsLoaded]=useState(false);

  const dbRefBreakfast = ref(db, "breakfastData"); //this retrieves a reference to the breakfastData colleciton within the database
  const dbRefLunch = ref(db, "lunchData"); //this retrieves a reference to the breakfastData colleciton within the database
  const dbRefDinner = ref(db, "dinnerData"); //this retrieves a reference to the breakfastData colleciton within the database

  useEffect(()=>{
    onValue(dbRefBreakfast, snapshot=>{ //snapshot returns the current array of data stored in the breakfastData array
      let breakfastArray=[];
      snapshot.forEach(childSnapshot=>{
        breakfastArray.push(childSnapshot.val()); //this iterates through each value in the breakfastData array and pushes each object to the breakfastArray array
        }
      )
      setBreakfastRecipes(breakfastArray) //this makes the breakfast data available within the scope of the application
      }
    )
    onValue(dbRefLunch, snapshot=>{ //snapshot returns the current array of data stored in the breakfastData array
      let lunchArray=[];
      snapshot.forEach(childSnapshot=>{
        lunchArray.push(childSnapshot.val()); //this iterates through each value in the breakfastData array and pushes each object to the breakfastArray array
        }
      )
      setLunchRecipes(lunchArray) //this makes the breakfast data available within the scope of the application
        }
      )
    onValue(dbRefDinner, snapshot=>{ //snapshot returns the current array of data stored in the breakfastData array
      let dinnerArray=[];
      snapshot.forEach(childSnapshot=>{
          dinnerArray.push(childSnapshot.val()); //this iterates through each value in the breakfastData array and pushes each object to the breakfastArray array
      }
    )
    setDinnerRecipes(dinnerArray) //this makes the breakfast data available within the scope of the application
    }
  )
  setDataIsLoaded(true);
}, []) //this ensures useEffect() is only executed on page load 

if(!isDataLoaded){
  return (<h1>Loading...</h1>)
}
  return (
    <>
    <Featured/>
    <BreakfastRecipesContext.Provider value={breakfastRecipes}>
      <BreakfastContainer/>
    </BreakfastRecipesContext.Provider>
    <LunchRecipesContext.Provider value={lunchRecipes}>
      <LunchContainer/>
    </LunchRecipesContext.Provider>
    <DinnerRecipesContext.Provider value={dinnerRecipes}>
      <DinnerContainer/>
    </DinnerRecipesContext.Provider>
    </>
  )
}
