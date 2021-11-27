import React from 'react'
import { ReactComponent  as GleekLogo} from '../../../SVG/GleekLogo.svg';

import './RegisterForm.css'

export const RegisterForm = () => {
    return (
        <form action="#" className="register-form">
            <div className="content">
                <GleekLogo/>
                <span className="title">Create account !</span>
            <div className="input-boxes">
                  <div className="form-group">
                 <span>Username:<i className="fas fa-envelope"></i></span>
                    <input type="text" placeholder="Enter " required />
                  </div>
                  <div className="form-group">
                  <span>Username:<i className="fas fa-envelope"></i></span>
                    <input type="password" required />
                  </div>
                  <div className="form-group">
                  <span>Username:<i className="fas fa-envelope"></i></span>
                    <input type="password" required />
                  </div>
                  <div className="forgot-password"><a href="#">Forgot password?</a></div>
                    <input type="submit" value="Register" />
                  <div className="text sign-up-text">Already member? <br/> <a href="interia.pl">Sign up now</a></div>
                </div>
            </div>
        </form>
    )
}
// 