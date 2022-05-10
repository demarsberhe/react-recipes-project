
//this file imports recipes using the edamam api
const base = 'https://api.edamam.com/api/recipes/v2';
const key = 'efe1d8e72abf065354cba9ae607bd560';
const id = '4ce43f84';

export const getRecipes = async ()=>{
  //request breakfast data
  let breakfastQuery = `${base}?type=public&q=breakfast&mealType=breakfast&app_id=${id}&app_key=${key}`;
  let breakfastResponse = await fetch(breakfastQuery);
  let breakfastData = await breakfastResponse.json();
  //request lunch data
  let lunchQuery = `${base}?type=public&q=lunch&mealType=lunch&app_id=${id}&app_key=${key}`;
  let lunchResponse = await fetch(lunchQuery);
  let lunchData = await lunchResponse.json();
  //request dinner data
  let dinnerQuery = `${base}?type=public&q=dinner&mealType=dinner&app_id=${id}&app_key=${key}`;
  let dinnerResponse = await fetch(dinnerQuery);
  let dinnerData = await dinnerResponse.json();
  
  return {
    breakfastData: breakfastData,
    lunchData: lunchData,
    dinnerData: dinnerData
  };
}




// data.breakfastData
  //   const breakfastCollection: {
  //     URL:data.breakfastData.hits.recipe.url,
  //    imgURL: meal.recipe.images.SMALL.url,
  //    name: meal.recipe.label,
  //    id:meal.recipe.label

  //   }
    
    
     
  //    )
     
  


  // const lunchCollection = data.lunchData.hits.map(meal=>{
  //   return {URL:meal.recipe.url,
  //     imgURL: meal.recipe.images.SMALL.url,
  //     name: meal.recipe.label,
  //     id:meal.recipe.label
  //     }
  //   })
  //   const dinnerCollection = data.dinnerData.hits.map(meal=>{
  //   return {URL:meal.recipe.url,
  //     imgURL: meal.recipe.images.SMALL.url,
  //     name: meal.recipe.label,
  //     id:meal.recipe.label
  //     }
  //   })