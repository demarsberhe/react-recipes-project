import React, {useState} from "react";

export function Form(){
  const [name, updateName]= useState(""); 
  const [headingText, updateHeadingText]=useState("Sign-up for recipe links:");   
  
  function handleTextUpdate(event){
   updateName(event.target.value);
  }
  function handleSubmit(event){
    updateHeadingText("You have successfully signed up, " + name.charAt(0).toUpperCase()+name.slice(1) + "!");
    document.getElementById("nameField").style.display="none";
    document.getElementById("email").style.display="none";
    document.getElementById("submitButton").style.display="none";
    event.preventDefault();

  }
    return(<>
       <p>{headingText}</p>
    <form onSubmit={handleSubmit}>
      <input type="text" id="nameField" placeholder="Enter your name" onChange={handleTextUpdate}/>
      <input type="text" id="email" placeholder="Enter email address"/>
      <button type="submit" id="submitButton">Submit</button>
</form>
</>);
  
}