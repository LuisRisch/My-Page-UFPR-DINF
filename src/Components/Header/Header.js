import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faBars } from '@fortawesome/free-solid-svg-icons';   
import Perfil from '../../assets/perfil.png';   
// import Navigation from '../Navigation/Navigation'; 
import './Header.css';
function Header() {
    return (
        <header
            style={{
                display: "flex",
                flexDirection: "row",
                height: 50,
                backgroundColor: "#282c34",
                padding: 18,
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <img
                    src={Perfil}
                    alt="Luis"
                    style={{
                        aspectRatio: 16 / 9,
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                    }}
                />
                <p
                    style={{
                        color: "#F5FFFA",
                        fontSize: 18,
                        fontWeight: "500",
                        marginLeft: 15,
                    }}
                >
                    Luis Felipe Risch
                </p>
            </div> 
            {/* <Navigation/> */}
            <div>
                <ul className="navigation">
                    <li id="Im-Here">Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Trabalhos</li>
                </ul>
            </div>
            <FontAwesomeIcon icon={faBars} size={"lg"} color={"#F5FFFA"} />
        </header>
    );
}

export default Header; 