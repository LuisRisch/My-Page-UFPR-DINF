import React from "react"; 
import './ContactBox.css';  
// import PersonalizedDivider from "../PersonalizerDivider/PersonalizedDivider";
// import PersonalizedArticle from '../PersonalizedArticle/PersonalizedArticle';

function ContactBox( props ) {
    return (
        <div id="contacts-container">
            <img
                src={props.imgUrl}
                alt={props.label}
                style={{
                    aspectRatio: 16 / 9,
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                }}
            />
            <div id='informations-container'>
                <h4>{props.Title}</h4> 
                <p>{props.SubTitle}</p> 
                <p>{props.Link}</p>
            </div>
        </div>
    );
}
export default ContactBox;
