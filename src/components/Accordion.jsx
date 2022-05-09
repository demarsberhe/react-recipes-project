import React from "react";

export class Accordion extends React.Component{
  constructor(props){
    super(props);
    this.handleClick=this.handleClick.bind(this);
    
  }
  handleClick(){
    this.classList.toggle('active');
  }
  render(){
    return(<div className={this.props.className}>
    <h3 className="accordion-title" onClick={this.handleClick}>{this.props.title}</h3>
    <div className="accordion-body">
      <div className="accordion-body-content">
    <ul>
    </ul>
     </div>
    </div>
  </div>);
  }
}
export default Accordion;