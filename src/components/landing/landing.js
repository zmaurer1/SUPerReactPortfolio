import React from "react";
import styles from "./landing.module.css"

export default function Landing(props){
    return (
        <div className={styles.landing}>
            <h1>{props.headerText}</h1>
        </div>
    )
}
