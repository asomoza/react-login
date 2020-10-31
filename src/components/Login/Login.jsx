import React, { useState, useEffect, useContext  } from "react";
import { navigate } from "@reach/router"

import { AuthContext} from "../../helpers/AuthContext";

import "./login.css";

export function Login(props) {
    let timerID;

    const { user, updateUser } = useContext(AuthContext);

    const [inputs, setInputs] = useState({
        user: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        timerID = setInterval(
            () => tick(), 1000
        );

        return () => {
            clearInterval(timerID);
        };
    });

    const tick = () => {
        setDate(new Date());
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    };

    const handleLogin = (event) => {
        event.preventDefault();

        if (inputs.user !== 'john' || inputs.password !== 'qwerty') {
            setError('Incorrect user or password.');
        } else {
            // Auth passed, redirect to dashboard
            updateUser("John");
            navigate('/dashboard')
        }
    };

    return (
        <div className='login-container'>
            <div className='box'>
                <div>
                    <div className='title'>{ props.text }</div>
                    <div className='date'>{date.toLocaleTimeString()}</div>
                </div>
                <div>
                    <div>
                        <input type="Text" name="user" value={inputs.user} onChange={handleChange}/>
                    </div>
                    <div>
                        <input type="Password" name="password" value={inputs.password} onChange={handleChange}/>
                    </div>
                    <div className='error'>{error}</div>
                    <div>
                        <button type="button" onClick={handleLogin}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
