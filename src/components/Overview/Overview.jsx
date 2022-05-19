import React from "react";
import styles from "./Overview.module.scss";

export function Overview (){
  return(
  <div className={styles.container}>
    <div className = {styles.card}>
      <h3>Recipe Title</h3>
      <div className = {styles.cardImg}>
        <a href="https://themodernproper.com/cauliflower-gnocchi-with-bruschetta-sauce-and-sausage"><img src="https://images.themodernproper.com/billowy-turkey/production/posts/2019/Cauliflower-Gnocchi-24.jpg?w=1200&auto=compress%2Cformat&fit=crop&dm=1603459013&s=9d54c62e142a0da0d6273f9b610d6a08" alt="sample recipe"/></a>
        </div>
        <p>Recipe Source</p>
        <button className={styles.moreDetails}>More Details</button>
        </div>
        <div className = {styles.card}>
        <h3>Recipe Title 2</h3>
        <div className={styles.cardImg}>
          <a href="https://themodernproper.com/cauliflower-gnocchi-with-bruschetta-sauce-and-sausage"><img src="https://images.themodernproper.com/billowy-turkey/production/posts/2019/Cauliflower-Gnocchi-24.jpg?w=1200&auto=compress%2Cformat&fit=crop&dm=1603459013&s=9d54c62e142a0da0d6273f9b610d6a08" alt="sample recipe"/></a>
        </div>
        <p>Recipe Source</p>
        <button className={styles.moreDetails}>More Details</button>
        </div>
        <div className = {styles.card}>
        <h3>Recipe Title 3</h3>
        <div className={styles.cardImg}>
          <a href="https://themodernproper.com/cauliflower-gnocchi-with-bruschetta-sauce-and-sausage"><img src="https://images.themodernproper.com/billowy-turkey/production/posts/2019/Cauliflower-Gnocchi-24.jpg?w=1200&auto=compress%2Cformat&fit=crop&dm=1603459013&s=9d54c62e142a0da0d6273f9b610d6a08" alt="sample recipe"/></a>
        </div>
        <p>Recipe Source</p>
        <button className={styles.moreDetails}>More Details</button>
      </div>
    </div>

  )
  
}