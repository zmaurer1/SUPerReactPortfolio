import React from "react";
import {Link} from "react-router-dom";
import styles from "./navbar.module.css"

export default function Navbar(props){
    return(
        <div className={styles.navbar}>
            <Link to="/home">Home</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/contactme">Contact Me</Link>
        
        </div>
    )
}