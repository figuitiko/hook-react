import React, {useEffect, useState} from 'react';
import {Message} from './Message';
import './effects.css';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
    })
    const {name, email}= formState;
    useEffect(() => {
        console.log('hello');
    },[])
    useEffect(() => {
        console.log('change formstate');
    },[formState])
    useEffect(() => {
        console.log('change email');
    },[email])
    const handleInputChange = ({target}) => {
       
        setFormState({
                ...formState,
                [target.name]: target.value
        })
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr/>

            <div className="form form-group">
                <input 
                type="text" 
                name="name"
                className="form-control"
                placeholder="your name"
                autoComplete="off"
                value={name}
                onChange={handleInputChange}
                />
            </div>
            <div className="form form-group">
                <input 
                type="text" 
                name="email"
                className="form-control"
                placeholder="your email"
                autoComplete="off"
                value={email}
                onChange={handleInputChange}
                />
            </div>

            { ( name === '123') && <Message />}

        </>
    )
}
