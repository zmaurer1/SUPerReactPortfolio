import React from "react";
import styles from './resume.module.css'
import resume from '../../assets/files/Zach Resume - 08-2021 Updated.pdf'
import Landing from "../landing/landing";

export default function Resume(props){
    return(
        <div>
            <div className={styles.resumeContent}>
                <h2>Zach Maurer Resumé</h2>
                <p>View Resumé PDF </p>
                <a
                href={resume}
                target="_blank"
                rel="noreferrer"
                >Resumé</a>
            </div>
        </div>

    )
    }