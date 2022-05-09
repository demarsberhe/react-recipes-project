import React from "react";

export class Form extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(<>
      <p>Sign-up for recipe links:</p>
    <form action="index.html">
    <input type="text" id="fName" placeholder="Enter first name"/>
    <input type="text" id="lName" placeholder="Enter last name"/>
    <input type="text" id="email" placeholder="Enter email address"/>
    <p>What is your favorite meal of the day?</p>
    <label for="meal-breakfast">
      <input type="checkbox" id="meal-breakfast" name="favorite-meal"value="breakfast"/>Breakfast
    </label>
    <label for="meal-lunch">
      <input type="checkbox" id="meal-lunch" name="favorite-meal"value="lunch"/>Lunch
    </label>
    <label for="meal-dinner">
      <input type="checkbox" id="meal-dinner" name="favorite-meal"value="dinner"/>Dinner
    </label>
    <label for="meal-dessert">
      <input type="checkbox" id="meal-dessert" name="favorite-meal"value="dessert"/>Dessert
    </label>
    <br/>
    <br/>
    <input type="submit" value="Submit"/>
</form>
</>);
  }
}