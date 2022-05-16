//import '.../public/index.css';
//import {getRecipes} from "../importRecipes";
import {Nav} from "./Nav";
// import {Generator} from "./Recipe-Generator";
// import {Recipe} from "./Recipe-Overview";
// import {Form} from "./Form";
// import {Accordion} from "./Accordion";
import React from "react";
import startFirebase from "./config";
import {ref, onValue} from "firebase/database";

const db=startFirebase();

export class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      breakfastRecipes:[],
      lunchRecipes: [],
      dinnerRecipes:[],
      dataisLoaded: false };
  }
  componentDidMount(){
    const dbRefBreakfast = ref(db, "breakfastData"); //this retrieves a reference to the breakfastData colleciton within the database
    onValue(dbRefBreakfast, snapshot=>{ //snapshot returns the current array of data stored in the breakfastData array
      let breakfastArray=[];
      snapshot.forEach(childSnapshot=>{
        breakfastArray.push(childSnapshot.val()); //this iterates through each value in the breakfastData array and pushes each object to the breakfastArray array
      })
      this.setState({breakfastRecipes: breakfastArray}) //this makes the breakfast data available within the scope of the application
    }
    )
    const dbRefLunch = ref(db, "lunchData"); //this retrieves a reference to the lunchData colleciton within the database
    onValue(dbRefLunch, snapshot=>{ //snapshot returns the current array of data stored in the lunchData array
      let lunchArray=[];
      snapshot.forEach(childSnapshot=>{
        lunchArray.push(childSnapshot.val()); //this iterates through each value in the lunchData array and pushes each object to the lunchArray array
      })
      this.setState({lunchRecipes: lunchArray}) //this makes the lunch data available within the scope of the application
    }
    )
    const dbRefDinner = ref(db, "dinnerData"); //this retrieves a reference to the dinnertData colleciton within the database
    onValue(dbRefDinner, snapshot=>{ //snapshot returns the current array of data stored in the dinnerData array
      let dinnerArray=[];
      snapshot.forEach(childSnapshot=>{
        dinnerArray.push(childSnapshot.val()); //this iterates through each value in the dinnerData array and pushes each object to the dinnerArray array
      })
      this.setState({dinnerRecipes: dinnerArray}) //this makes the dinner data available within the scope of the application
    }
    )
    this.setState({dataisLoaded:true}) //all data has been rendered, update the state to true
  }

  render(){
    if(!this.state.dataisLoaded){
      return <h1>Loading...</h1>
    }
    return(
    <>
     <Nav />
    </>)
  }
}
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
//       <footer>
//         <Form/>
//       </footer>
//       </>);

