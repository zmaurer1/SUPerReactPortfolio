import React from "react";
import styles from "./contactme.module.css";

export default function Contactme(props){
    const messages=[
        {
            id:1,
            text: "Zach started out as a steller copy and content marketing writer and has turned the corner into development with an eye on documentation and cyber-security."
        },
        {
            id:2,
            text: "Once Zach finds his niche in the tech-world, theres no limit to what he can create and achieve with his drive."
        },
        {
            id:3,
            text: "Zach fancies himself a back-end developer with a front-end personality and markets himself as such."
        }]
    
    
    
    return(
        <div className={styles.contact}> <h1>Contact Me</h1>
        <div className={styles.contactscreen}>
            
            <form className={styles.contactForm}>
                <label>
                   <p> Name:</p>
                    <input type="text" placeholder="first and last" name="name" />
                </label>
                <label>
                   <p> Email:</p>
                    <input type="text" placeholder="email address" name="name" />
                </label>
                
                <label>
                    <p>Message</p>
                <textarea id="w3review" name="w3review" rows="4" cols="50">
Put your message here...
</textarea>
</label>
            <label>
                <p></p>
                <input className={styles.contactFormButton} type="submit" value="Submit" />
                </label>
            </form>
            <div className={styles.description}>
                {messages.map(item => {
                    return (<p key={item.id}>
                                {item.text}
                             </p>)})}

            </div>
        </div>
        </div>
    )
    }