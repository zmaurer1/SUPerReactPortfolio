import React from "react";
import styles from './portfolio.module.css'
import Cards from "../cards/cards";
import Landing from "../landing/landing";

export default function Portfolio(props){
    return(
        <div>
            {/* <Landing headerText="portfolioscreen"/> */}
        <div className={styles.portfolioHeader}> 
        <h1>Zach Maurer Portfolio</h1>
            <Cards/>
        </div>
        </div>

    )
}