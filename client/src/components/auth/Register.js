import React, {useState} from 'react';
import '../../styles/Register.css';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import { useStateValue } from '../../context/StateProvider';

function Register() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [{}, dispatch ] = useStateValue();

    const registerUser_post = (e) => {
        e.preventDefault();
        axios.post('http://localhost:9000/users/register', {displayName, email, password, passwordCheck })
        .then((response) => {
            dispatch({type: 'SET_USER', user: response.data});
            history.push('/');
        })
        .catch(err => console.log(err));
    }

    return (
        <div className='register'>
            <Link to='/'>
                <img 
                    className='register__logo'
                    src='https://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG'
                    alt='amazon logo'
                />
            </Link>

            <div className="register__container">
                <h2>Register</h2>
                <form className="register__form">
                    <h5><small>Username</small></h5>
                    <input type="text" value={displayName} onChange={(e) => {setDisplayName(e.target.value)}}/>
                    <h5><small>E-mail (phone for mobile accounts)</small></h5>
                    <input type="text" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                    <h5><small>Password</small></h5>
                    <input type="text" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                    <h5><small>Repeat Password</small></h5>
                    <input type="text" value={passwordCheck} onChange={(e) => {setPasswordCheck(e.target.value)}}/>
                    <button onClick={registerUser_post} type='submit'><small>Create account</small></button>
                </form>
                <p><small style={{fontSize: 10}}>By registering you agree to Amazon's <a href="">Conditions of Use & Sale...</a> Please see out Privacy Notice, out Cookies Notice and out interest-Based Ads Notice.</small></p>
               
            </div>
        </div>
    )
}

export default Register;