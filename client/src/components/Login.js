import React, {useState} from 'react';
import '../styles/Login.css';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser_get = (e) => {
        e.preventDefault();
        axios.get('http://localhost:9000/users', { email, password })
        .then((result) => console.log(result))
        .catch(err => console.log(err));
        
        
    }

    const registerUser_post = () => {
        console.log( JSON.stringify({ email, password }));
        axios.post('http://localhost:9000/users', { email, password })
         .then((result) => console.log(result))
         .catch(err => console.log(err))
        
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img 
                    className='login__logo'
                    src='https://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG'
                    alt='amazon logo'
                />
            </Link>

            <div className="login__container">
                <h2>Sign-in</h2>
                <form className="login__form">
                    <h5><small>E-mail (phone for mobile accounts)</small></h5>
                    <input type="text" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                    <h5><small>Password</small></h5>
                    <input type="text" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                    <button onClick={loginUser_get} type='submit'><small>Sign in</small></button>
                </form>
                <p><small style={{fontSize: 10}}>By signing-in you agree to Amazon's <a href="">Conditions of Use & Sale...</a> Please see out Privacy Notice, out Cookies Notice and out interest-Based Ads Notice.</small></p>
               
            </div>
            <div className="login__newMember">
                    <p className='login__newMemberText'>New to Amazon?</p>
                    <button onClick={registerUser_post} type='submit'><small>Create Amazon Account</small></button>
            </div>
            
        </div>
    )
}

export default Login