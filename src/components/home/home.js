import React from "react";
import headShot from '../../assets/images/zm_headshot.png'
import Landing from "../landing/landing";
import styles from './home.module.css';


export default function Home(props){
    return(
        <div>
            <h2>
                    Zach Maurer
                </h2>
            <div className={styles.home}>
                
                <img src={headShot} 
                alt="ZM Headshot"
                className={styles.headShot}/>
            <div className={styles.sectionBio}>
                <p>
                Hello, my name is Zach Maurer. I have been a free-lance writer for years, working in marketing with content and copy, and writing AP style sports columns as well as culture pieces for magazines. I have over 10 years of management experience within the restaurant industry. I recently received my Technical Writing certificate from Cal State, an IT Support certificate from Google, and a Full-Stack Web Development certificate from the University of Washington. 
	My goal is to connect with a company that I can grow with as my knowledge deepens and my skills improve. I am looking for Technical Writing positions, Development Positions or IT support. I am also excited to continue with education as I am very interested in getting involved in Cyber Security. The company I connect with can expect reliability and the desire and ability to grow and evolve with the industry.

                </p>
            </div>
            </div>
            
        </div>

    )
}