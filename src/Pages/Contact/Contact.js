import React from "react";
import Header from "../../Components/Header/Header";
import "../../App.css";
import "./Contact.css";
import telegram from "../../assets/telegrama.png";
import github from "../../assets/github.png";
import gmail from "../../assets/gmail.png";
import linkedin from "../../assets/linkedin.png";
import facebook from "../../assets/facebook.png";
import ContactBox from "../../Components/ContactBox/ContactBox";
import PersonalizedDivider from "../../Components/PersonalizerDivider/PersonalizedDivider";

function Contact() {
    return (
        <div className="screen">
            <Header />
            <div className="content-container">
                <ContactBox 
                    imgUrl={telegram} 
                    label="telegram" 
                    Title="Telegram" 
                    SubTitle="Uso para entrar em contato com os meus grupos de trabalho" 
                    Link='Luis Felipe Risch'
                />
                <PersonalizedDivider />
                <ContactBox imgUrl={github} label="github" Title="Git Hub" />
                <PersonalizedDivider />
                <ContactBox imgUrl={gmail} lable="gamil" Title="Gmail" />
                <PersonalizedDivider />
                <ContactBox imgUrl={linkedin} label="Linkedin" Title="Linkedin" />
                <PersonalizedDivider />
                <ContactBox imgUrl={facebook} label="Facebook" Title="Facebook" />
            </div>
        </div>
    );
}
export default Contact;
