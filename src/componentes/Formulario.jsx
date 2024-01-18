import { Form, Button } from "react-bootstrap"
import React, { useState } from "react"
import Mensajes from "./Respuesta"





const Formulario = () => {

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [reingresar, setReingresar] = useState("")


    const [alerta,setAlerta]= useState({tipo:null, mensaje:""})

    
   

    const validarDatos= (e) =>{
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (nombre === "" || email === '' || contraseña === '' || reingresar === '' ){
           setAlerta({tipo:"danger", mensaje:"todo los campos son obligatorios"})
            return;
        }
        else if(!emailRegex.test(email)) {
            setAlerta({tipo:'danger', mensaje:'Ingrese un correo electrónico válido'})
            return; 
        } else if(contraseña !== reingresar){
         setAlerta({tipo:'danger', mensaje:'Contraseñas no Coinciden'})
        } else {
            setAlerta({tipo:'primary', mensaje:'Formulario Enviado'}) 

        setNombre('');
        setEmail('');
        setContraseña('');
        setReingresar('');
        }


       

    

     
        
    }
          
    return(
        <>
        <Form  onSubmit={validarDatos}>
            <Form.Group>
                <Form.Label className="labelContainer">Nombre</Form.Label>
                <Form.Control 
                type="text"
                name="nombre" 
                placeholder="Ingrese su nombre"
                className="form-control"
                onChange={(e) => setNombre(e.target.value)}
                value={nombre}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label className="labelContainer">Email</Form.Label>
                <Form.Control 
                type="text"
                name="email" 
                placeholder="Ingrese su correo"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label className="labelContainer">Contraseña</Form.Label>
                <Form.Control 
                type="password"
                name="contraseña" 
                placeholder="Ingrese su contraseña"
                className="form-control"
                onChange={(e) => setContraseña(e.target.value)}
                value={contraseña}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label className="labelContainer">Reingrese Contraseña</Form.Label>
                <Form.Control 
                type="password"
                name="reingresar" 
                placeholder="Reingrese sucontraseña"
                className="form-control"
                onChange={(e) => setReingresar(e.target.value)}
                value={reingresar}
                />
            </Form.Group>
            <Button className="botonContainer" variant="primary" type="submit">
            Registrase
            </Button>
            {alerta.tipo && <Mensajes variant={alerta.tipo} textMensaje={alerta.mensaje}/>}    
        </Form>
        </>
        
    )
} 


export default Formulario;
