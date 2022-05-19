//import '.../public/index.css';
//import {getRecipes} from "../importRecipes";
// import {Generator} from "./Recipe-Generator";
// import {Accordion} from "./Accordion";
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
import {FeaturedRecipesContext} from "./Contexts/FeaturedContext";

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
  setAllRecipes([breakfastRecipes, lunchRecipes, dinnerRecipes]);
  setDataIsLoaded(true);
}, []) //this ensures useEffect() is only executed on page load 

if(!isDataLoaded){
  return (<h1>Loading...</h1>)
}
  return (
    <>
    <FeaturedRecipesContext.Provider value={allRecipes}>
      <Featured/>
    </FeaturedRecipesContext.Provider>
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
//   if(!dataisLoaded){
//   return <h1>Loading...</h1>
// }
// else{
//   return (
//     <>
//       <BreakfastContainer/>
//       <LunchContainer/>
//       <DinnerContainer/>
//     </>
//   )
//   }

  //const [dataisLoaded, setDataIsLoaded]=useState(false);

// if(!dataisLoaded){
//   return <h1>Loading...</h1>
// }
// else{
//   return (
//     <>
//       <BreakfastContainer/>
//       <LunchContainer/>
//       <DinnerContainer/>
//     </>
//   )
//   }
}

// export class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={
//       breakfastRecipes:[],
//       lunchRecipes: [],
//       dinnerRecipes:[],
//       dataisLoaded: false };
//   }
//   componentDidMount(){
//     const dbRefBreakfast = ref(db, "breakfastData"); //this retrieves a reference to the breakfastData colleciton within the database
//     onValue(dbRefBreakfast, snapshot=>{ //snapshot returns the current array of data stored in the breakfastData array
//       let breakfastArray=[];
//       snapshot.forEach(childSnapshot=>{
//         breakfastArray.push(childSnapshot.val()); //this iterates through each value in the breakfastData array and pushes each object to the breakfastArray array
//       })
//       this.setState({breakfastRecipes: breakfastArray}) //this makes the breakfast data available within the scope of the application
//     }
//     )
//     const dbRefLunch = ref(db, "lunchData"); //this retrieves a reference to the lunchData colleciton within the database
//     onValue(dbRefLunch, snapshot=>{ //snapshot returns the current array of data stored in the lunchData array
//       let lunchArray=[];
//       snapshot.forEach(childSnapshot=>{
//         lunchArray.push(childSnapshot.val()); //this iterates through each value in the lunchData array and pushes each object to the lunchArray array
//       })
//       this.setState({lunchRecipes: lunchArray}) //this makes the lunch data available within the scope of the application
//     }
//     )
//     const dbRefDinner = ref(db, "dinnerData"); //this retrieves a reference to the dinnertData colleciton within the database
//     onValue(dbRefDinner, snapshot=>{ //snapshot returns the current array of data stored in the dinnerData array
//       let dinnerArray=[];
//       snapshot.forEach(childSnapshot=>{
//         dinnerArray.push(childSnapshot.val()); //this iterates through each value in the dinnerData array and pushes each object to the dinnerArray array
//       })
//       this.setState({dinnerRecipes: dinnerArray}) //this makes the dinner data available within the scope of the application
//     }
//     )
//     this.setState({dataisLoaded:true}) //all data has been rendered, update the state to true
//   }
  

//   render(){
//     if(!this.state.dataisLoaded){
//       return <h1>Loading...</h1>
//     }
//     return(
//     <>
//     {/* <div><DinnerContainer 
//     dinnerName={this.state.dinnerRecipes[0].name}
//     dinnerURL = {this.state.dinnerRecipes[0].URL}
//     dinnerimgURL = {this.state.dinnerRecipes[0].imgURL}
//     dinnerid = {this.state.dinnerRecipes[0].id}
//     /></div> */}
//     {/* <Featured/>
//     <BreakfastRecipesContext.Provider value={this.state.breakfastRecipes}>
//       <BreakfastContainer/>
//     </BreakfastRecipesContext.Provider> */}
    
//     </>)
//   }
//}
//      
//       <Generator />
//       <main>
//         <br/>
//         <h2 id="breakfast-title">Breakfast</h2>
//         <br/>
//         <section id="breakfast">
//           <div id="vegan-pancakes">
//           <h3>{this.state.recipes.breakfastData.hits[0].recipe.label}</h3>
//           <Recipe
//             URL={this.state.recipes.breakfastData.hits[0].recipe.url}
//             imgURL={this.state.recipes.breakfastData.hits[0].recipe.images.SMALL.url}
//             name={this.state.recipes.breakfastData.hits[0].recipe.label}
//             id={this.state.recipes.breakfastData.hits[0].recipe.source}>
//           </Recipe>
//           <Accordion
//               className="ingredients accordion-class"
//               title="Ingredients"
//               list={this.state.recipes.breakfastData.hits[0].recipe.ingredientLines.map(item=><li>{item}</li>)}>
//               </Accordion>
//          <Accordion
//          className="accordion-class"
//          title="Health Information"
//          list={this.state.recipes.breakfastData.hits[0].recipe.healthLabels.map(item=><li>{item}</li>)}
//          />
//         </div>
//         <div id="overnight-oats">
//           <h3>{this.state.recipes.breakfastData.hits[2].recipe.label}</h3>
//           <Recipe
//             URL={this.state.recipes.breakfastData.hits[2].recipe.url}
//             imgURL={this.state.recipes.breakfastData.hits[2].recipe.images.SMALL.url}
//             name={this.state.recipes.breakfastData.hits[2].recipe.label}
//             id={this.state.recipes.breakfastData.hits[2].recipe.source}>
//           </Recipe>
//           <Accordion
//             className="ingredients accordion-class"
//             title="Ingredients"
//             list={this.state.recipes.breakfastData.hits[2].recipe.ingredientLines.map(item=><li>{item}</li>)}
//           />
//           <Accordion
//             className="accordion-class"
//             title="Health Information"
//             list={this.state.recipes.breakfastData.hits[2].recipe.healthLabels.map(item=><li>{item}</li>)}
//           />

          
//         </div>
//         </section>
//         <h2 id="lunch-title">Lunch</h2>
//         <section id="lunch">
//           <div id="veggie-wrap-container">
          
//           {console.log(this.state.recipes)}
//           <h3 id="veggie-wrap"><a href={this.state.recipes.lunchData.hits[4].recipe.url}>{this.state.recipes.lunchData.hits[4].recipe.label}</a></h3>
     
//           <Recipe
//             URL={this.state.recipes.lunchData.hits[4].recipe.url}
//             imgURL={this.state.recipes.lunchData.hits[4].recipe.images.SMALL.url}
//             name={this.state.recipes.lunchData.hits[4].recipe.label}
//             id={this.state.recipes.lunchData.hits[4].recipe.source}
//           />
//           <Accordion
//           className="ingredients lunch-ingredients accordion-class"
//           title="Ingredients"
//           list={this.state.recipes.lunchData.hits[4].recipe.ingredientLines.map(item=><li>{item}</li>)}/>
//           <Accordion
//             className="ingredients lunch-ingredients accordion-class"
//             title="Health Information"
//             list={this.state.recipes.lunchData.hits[12].recipe.healthLabels.map(item=><li>{item}</li>)}
//           />
//       </div>
//         </section>
//         <h2 id="dinner-title">Dinner</h2>
//         <section id="dinner">
//         <div>
//         <h3>{this.state.recipes.dinnerData.hits[1].recipe.label}</h3>
//         <Recipe
//                 URL={this.state.recipes.dinnerData.hits[1].recipe.url}
//                 imgURL={this.state.recipes.dinnerData.hits[1].recipe.images.SMALL.url}
//                 name={this.state.recipes.dinnerData.hits[1].recipe.label}
//                 id={this.state.recipes.dinnerData.hits[1].recipe.label}/>

//         </div>
//         <div>
//         <h3>{this.state.recipes.dinnerData.hits[2].recipe.label}</h3>
//         <Recipe
//                 URL={this.state.recipes.dinnerData.hits[2].recipe.url}
//                 imgURL={this.state.recipes.dinnerData.hits[2].recipe.images.SMALL.url}
//                 name={this.state.recipes.dinnerData.hits[2].recipe.label}
//                 id={this.state.recipes.dinnerData.hits[2].recipe.label}/>

//         </div>
//         <div>
//         <h3>{this.state.recipes.dinnerData.hits[3].recipe.label}</h3>
//         <Recipe
//                 URL={this.state.recipes.dinnerData.hits[3].recipe.url}
//                 imgURL={this.state.recipes.dinnerData.hits[3].recipe.images.SMALL.url}
//                 name={this.state.recipes.dinnerData.hits[3].recipe.label}
//                 id={this.state.recipes.dinnerData.hits[3].recipe.label}/>

//         </div>
//         <div>
//         <h3>{this.state.recipes.dinnerData.hits[5].recipe.label}</h3>
//         <Recipe
//                 URL={this.state.recipes.dinnerData.hits[5].recipe.url}
//                 imgURL={this.state.recipes.dinnerData.hits[5].recipe.images.SMALL.url}
//                 name={this.state.recipes.dinnerData.hits[5].recipe.label}
//                 id={this.state.recipes.dinnerData.hits[5].recipe.label}/>

//         </div>
//         <div>
//         <h3>{this.state.recipes.dinnerData.hits[6].recipe.label}</h3>
//         <Recipe
//                 URL={this.state.recipes.dinnerData.hits[6].recipe.url}
//                 imgURL={this.state.recipes.dinnerData.hits[6].recipe.images.SMALL.url}
//                 name={this.state.recipes.dinnerData.hits[6].recipe.label}
//                 id={this.state.recipes.dinnerData.hits[6].recipe.label}/>

//         </div>
//         </section>
//       </main>
//       </>);

