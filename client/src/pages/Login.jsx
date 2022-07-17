import React from 'react';
import Google from '../images/google.png';
import Facebook from '../images/facebook.png';
import Github from '../images/github.png';
import '../App.scss'

const Login = () => {
    const google = () => {
        window.open("http://localhost:5000/auth/google", "_self");
    }

    const github = () => {
        window.open("http://localhost:5000/auth/github", "_self");
    }

    return (
        <div className='login'>
            <h1 className="loginTitle">Choose a Login Method</h1>
            <div className="wrapper">
                <div className="left">
                    <div className="loginButton google" onClick={google}>
                        <img src={Google} alt="" className="icon" />
                        Google
                    </div>
                    <div className="loginButton facebook">
                        <img src={Facebook} alt="" className="icon" />
                        Facebook
                    </div>
                    <div className="loginButton github" onClick={github}>
                        <img src={Github} alt="" className="icon" />
                        Github
                    </div>
                </div>
                <div className="center">
                    <div className="line" />
                    <div className="or">OR</div>
                </div>
                <div className="right">
                    <input type="text" className="loginInput" placeholder='Username' />
                    <input type="password" className="loginInput" placeholder='Password' />
                    <button className="loginBtn">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Login;