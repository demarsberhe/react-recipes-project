import React from "react"
import Link from "next/link";
import styles from "./Nav.module.scss";

export class Nav extends React.Component{
  render(){
    return (<div id={styles.header}>
    <Link href="/"><h1 id={styles.mainTitle}>Best Recipes</h1></Link>
    <nav> 
      <ul className={styles.navList}>
        <Link href="#breakfast"><li className={styles.navListItem}>Breakfast</li></Link>
        <Link href="#lunch"><li className={styles.navListItem}>Lunch</li></Link>
        <Link href="#dinner"><li className={styles.navListItem}>Dinner</li></Link>
      </ul>
    </nav>
  </div>);
  }
}
