import React from "react";

export class Accordion extends React.Component{
  constructor(props){
    super(props);
    this.state={accordionOpen: false}
    this.toggleAccordionState=this.toggleAccordionState.bind(this);
  }
  toggleAccordionState(){
    this.setState({accordionOpen:!this.state.accordionOpen}) //this toggles the value of the accordionOpen state depending on the value of its current state 
  }


  render(){
    return(<div className={this.props.className}> 
    <h3 className={this.state.accordionOpen ? "active accordion-title ": "accordion-title"} onClick={this.toggleAccordionState}>{this.props.title}</h3>  {/*this toggles the active class on the accordion element when the title is clicked on*/}
    <div className="accordion-body">
      <div className="accordion-body-content">
      <ul>{this.props.list}</ul>  {/*this renders the list items*/}
     </div>
    </div>
  </div>);
  }
}
export default Accordion;