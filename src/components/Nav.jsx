import React from "react"

class Nav extends React.Component{
  render(){
    return (<div id="header">
    <h1 id="main-title"><strong><a href='index.html'>Best Recipes</a></strong></h1>
    <nav> 
      <ul>
        <li><a href="#breakfast">Breakfast</a></li>
        <li><a href="#lunch">Lunch</a></li>
        <li><a href="#dinner">Dinner</a></li>
        <li><a href="dessert.html">Dessert</a></li>
      </ul>
    </nav>
  </div>);
  }
}
export {Nav};