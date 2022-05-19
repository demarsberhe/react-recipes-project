import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// Your web app's Firebase configuration

export const startFirebase = ()=>{
  const firebaseConfig = {
    apiKey: "AIzaSyBCcvRHGhIOmUoYuuvA_eQHYl_XBkJ3Ibo",
    authDomain: "recipes-project-174c0.firebaseapp.com",
    databaseURL: "https://recipes-project-174c0-default-rtdb.firebaseio.com",
    projectId: "recipes-project-174c0",
    storageBucket: "recipes-project-174c0.appspot.com",
    messagingSenderId: "691926625387",
    appId: "1:691926625387:web:8440b661e741090aea952e"

  };
 
  const app = initializeApp(firebaseConfig);
  return getDatabase(app)

}



