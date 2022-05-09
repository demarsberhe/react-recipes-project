
//this file imports recipes using the edamam api
const base = 'https://api.edamam.com/api/recipes/v2';
const key = '7dcb723c5d1ec84944e262dd8d1a9a9f';
const id = '3d9b2d86';

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



