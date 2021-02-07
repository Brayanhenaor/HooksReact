import React, { useEffect, useState } from 'react'
import './effects.css'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name:'',
        email:''
    });

    const {name,email}=formState;
    
    useEffect(() => {
    //    console.log('hey'); 
    },[]);

    useEffect(() => {
        // console.log('form cambio'); 
     },[formState]);

     useEffect(() => {
        // console.log('email cambio'); 
     },[email]);

    const handleInputChanged =({target})=>{
        setFormState({
            ...formState,
            [target.name] : target.value
        })
    }

    return (
        <>
          <h1>useEffect</h1>
          <hr/>  

          <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Tu nombre"
                autoComplete="off"
                value={name}
                onChange={handleInputChanged} />
          </div>

          <div className="form-group">
              <input
                type="text"
                name="email"
                className="form-control"
                placeholder="email@dominio.com"
                autoComplete="off"
                value={email}
                onChange={handleInputChanged} />
          </div>

          { (name === '123') && <Message/> }
        </>
    )
}
