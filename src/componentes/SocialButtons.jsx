import React from "react";
import {FaFacebook, FaGithub, FaLinkedin} from 'react-icons/fa';

const SocialButton = () => {
    return(
        <>
        <div className="iconContainer">
        <a href="https://web.facebook.com/johan.gonzalez.9237/"><FaFacebook size={48} color="blue"/></a>
        <a href="https://github.com/johangonza81"><FaGithub size={48} color="black"/></a>
        <FaLinkedin size={48} color= "blue"/>
        </div>
        </>
    )
}
export default SocialButton;