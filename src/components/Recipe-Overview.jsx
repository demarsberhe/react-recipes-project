import React from "react";

export class Recipe extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
    <figure>
      <a href={this.props.URL}><img src={this.props.imgURL} alt={this.props.name}/></a>
      <a href={this.props.URL}><figcaption id={this.props.name}>Source: {this.props.id}</figcaption></a>
    </figure>)
  }
}