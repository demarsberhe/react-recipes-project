export let recipes = [];

//export let recipesFromAPI =[];
//create new instances of recipe objects

//factory function that returns an object
function createRecipe(name, mealType, recipeId){
  return {
    name: name,
    mealType: mealType,
    recipeId: recipeId,
    mealResponse: function(){
      if(this.name[name.length-1]==='s' || this.name==='Salmon' || this.name==='Mac and Cheese'){
        return `I will have ${this.name} for ${this.mealType}!`;
      } else{
        return`I will have a ${this.name} for ${this.mealType}!`;
      }
      
    }
    
  }
}
// recipe objects 
let veganPancakes = createRecipe('Vegan Pancakes', 'Breakfast', 'vegan-pancakes-title');
let overnightOats = createRecipe('Overnight Oats', 'Breakfast', 'overnight-oats-title');
let veggieWrap = createRecipe('Veggie Wrap', 'Lunch', 'veggie-wrap');
let pasta = createRecipe('Broccoli Pesto Pasta', 'Dinner', 'pasta-title');
let salmon = createRecipe('Salmon', 'Dinner', 'salmon-title');
let macAndCheese = createRecipe('Mac and Cheese', 'Dinner', 'mac-and-cheese-title');
let chickenStirFry = createRecipe('Chicken Stir Fry', 'Dinner', 'chicken-stir-fry-title');

// individual recipe objects have been pushed to the recipes array
recipes.push(veganPancakes);
recipes.push(overnightOats);
recipes.push(veggieWrap);
recipes.push(pasta);
recipes.push(salmon);
recipes.push(macAndCheese);
recipes.push(chickenStirFry);

//function selects a random recipe from the array
 export const generateRandomRecipe=arrayOfRecipes=>{
  let numOfRecipes = arrayOfRecipes.length;
  let randomNum = Math.round(Math.random()* numOfRecipes);
  return arrayOfRecipes[randomNum];
}
//function sets the href value for the 'Go to recipe!' text to the title of the randomly selected recipe
 export const setLink = recipe=>{
    document.getElementById('recipe-link').setAttribute('href', `#${recipe.recipeId}`);
  
}

