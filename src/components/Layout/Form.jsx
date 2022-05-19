import React, {useState} from "react";
import styles from "./Form.module.scss";

export function Form(){
  const [name, updateName]= useState(""); 
  const [headingText, updateHeadingText]=useState("Sign-up for recipe links:");   
  const [displayForm, updateDisplayForm]=useState(true);
  
  function handleTextUpdate(event){
   updateName(event.target.value);
  }
  function handleSubmit(event){
    updateHeadingText("You have successfully signed up, " + name.charAt(0).toUpperCase()+name.slice(1) + "!");
    updateDisplayForm(false);
    event.preventDefault();

  }
    return(
      <footer className={styles.footer}>
        <p id={styles.formTitle}>{headingText}</p>
        <div className={styles.form}>
          <form onSubmit={handleSubmit}>
            {displayForm && <input type="text" id="nameField" placeholder="Enter your name" onChange={handleTextUpdate} required /> }
            {displayForm && <input type="text" id="email" placeholder="Enter email address" required/> }
            {displayForm && <span className={styles.submitButton} ><button type="submit" id="submitButton">Submit</button></span>}
           
          </form>
        </div>
        
        </footer>
    );
  
}