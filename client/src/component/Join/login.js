import React,{useState} from 'react'
import './login.css';

export default function login() {
     return (
        <div className="body">
          <div className="box"> 
			<div className="logo">
				<span className="A">C<span className="B" >hatter</span></span>
			</div>
          <input type="checkbox" className="toggle-btn" name=""/>
          <div className="signup">
          <div className="welcome"><strong>New here?</strong> Please Signup</div>

<form className="form-horizontal signin-form">
    <div className="form-group relative">
    <i className="fa fa-user icon" ></i>
        <input id="signup_username" className="form-control input-lg" type="text/email" placeholder="Username" required/>     
    </div>
    <div className="form-group relative">
    <i className="fa fa-envelope  icon"></i>
        <input id="signup-email" className="form-control input-lg" type="email" placeholder="Email" required/>   
    </div>
    <div className="form-group relative password">
    <i className="fa fa-lock icon"></i>
        <input id="login_password" className="form-control input-lg" type="password" placeholder="Password" required/>
      </div>
  <div className="form-group">
    <button type="submit" className="submit">Signup</button>
  </div>
</form>
 </div>
          <div className="login">
          <div className="welcome"><strong>Welcome,</strong> Please Login</div>
        
<form className="form-horizontal login-form">
    <div className="form-group relative">
    <i className="fa fa-user icon"></i>
        <input id="login_username" className="form-control input-lg" type="email" placeholder="Username" required/>
       </div>
    <div className="form-group relative password">
    <i className="fa fa-lock icon"></i>
        <input id="login_password" className="form-control input-lg" type="password" placeholder="Password" required/>
       </div>
  <div className="form-group">
    <button type="submit" className="submit">Login</button>
  </div>
</form>
                               </div>  
        </div>
        </div>
    
  
        )
}
