import React from "react";
import styles from "./cards.module.css";
import quizImage from "../../assets/images/codequiz.png"
import pigImage from "../../assets/images/foreverpig.png"
import gamesImage from "../../assets/images/gamesforyou.png"
import weatherImage from "../../assets/images/weather.png"
import gitImage from "../../assets/images/github.png"
import Linked from "../../assets/images/linkdin.png"


const sampleData = [
    {
        header:"Code Quiz", 
        description: "Javascript powered quiz.",
        img: quizImage,
        url: "https://zmaurer1.github.io/QUIZHW/"
    },
    {
        header:"Forever Pig",
        description:"Fully functional pig-fostering app",
        img: pigImage,
        url: "https://dashboard.heroku.com/apps/forever-pig"
    },
    {
        header:"Games For You",
        description:"Search for your favorite video or board games!",
        img: gamesImage,
        url: "https://delizoderek.github.io/Games-for-you/"
    },
    {
        header:"Github",
        description:"My Github ",
        img: gitImage,
        url: "https://github.com/zmaurer1"
    },
    {
        header:"Weather Dashboard",
        description:"A fully functioning weather dashboard",
        img: weatherImage,
        url: "https://zmaurer1.github.io/WeatherHW/"
    },
    {
        header:"LinkedIn",
        description:"Zach Maurer LinkedIn Profile",
        img: Linked,
        url: "https://www.linkedin.com/in/zach-maurer-9541b2b0/"
    },
    
]

export default function Cards(props) {
    return(
        <div className={styles.cards}>
            {sampleData.map(item => {
                return <Card htext={item.header} dtext={item.description} image={item.img} url={item.url}/>
            })}
             
        </div>
    )
}
const Card = props => {
    return(
        
        <div className={styles.card}>
            <a href={`${props.url}`} target="_blank">
           <div className={styles.imageWrapper}> <img src={props.image}/></div>
            <h3>{props.htext}</h3>
            <p>{props.dtext}</p>
            </a>
        </div> 
       
    )
}