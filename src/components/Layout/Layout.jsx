import React from "react";
import {Nav} from "./Nav";
import {Form} from "./Form";



function Layout(props){
    return (
   <>
    <Nav/>
      <main>{props.children}</main>
    <Form/>
   </>
     
    )
  }

export default Layout;