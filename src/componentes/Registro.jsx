import React from "react";
import Formulario from "./Formulario";
import SocialButton from "./SocialButtons";

const Registro = () => {
    return(
        <>
        <div className="registroContainer">
        <h1>Crea una Cuenta</h1>
        <SocialButton/>
        <hr></hr>
        <Formulario/>
        </div>
        </>
    )
}
export default Registro;