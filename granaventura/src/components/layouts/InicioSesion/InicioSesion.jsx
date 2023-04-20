import React, {Fragment, useState, } from 'react'
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FaUserCircle } from 'react-icons/fa';
import { HiPhone } from 'react-icons/hi';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export const InicioSesion = () => {

  const [clas, setClas] = useState(false);

  const register = () =>{
      setClas (true)
  }

  const  putPanel = () =>{
      setClas(false)
  }

  const metodoPost= ()=>{
      
  }
  
  return (
    <Fragment>
      <div className='contenedor'>
      <div className={`wrapper ${clas ? "active" : ""}`}>
        <span className="icon-close">
          <AiOutlineCloseCircle/>
        </span>

        <div className="form-box login">
            <h2>Login</h2>
            <form action="#" >
              <div className='input-box'>
                <span className='icon'>
                  <MdEmail />
                </span>
                <input type="email" required/>
                <label>Email</label>
              </div>
              <div className='input-box'>
                  <span className="icon">
                    <RiLockPasswordFill/>
                  </span>
                  <input type="password" required/>
                  <label>Password</label>
              </div>
              <div className="remember-forgot">
                  <label><input type="checkbox" /> Remember me </label>
                  <a> Forgot password? </a>
              </div>  
              <button type='submit' className="btn"> Login </button>
            </form>
              <div className="login-register">
                <p> Don't have an account? <button  className="register-link" onClick={register}>Register</button></p>
              </div>
        </div>

        <div className ={`form-box register ${clas ? "" : "contRegister"}`}>
            <h2>Register</h2>
            <form action="#" >
            <div className='input-box'>
                <span className='icon'>
                  <FaUserCircle/>
                </span>
                <input type="text" required name='nombre'/>
                <label>User Name</label>
            </div>
              <div className='input-box'>
                  <span className="icon">
                    <HiPhone/>
                  </span>
                  <input type="number" required name='telefono'/>
                  <label>Teléfono</label>
              </div>
              <div className='input-box'>
                <span className='icon'>
                <MdEmail />
                </span>
                <input type="email" required name='email' />
                <label>Email</label>
              </div>
              <div className='input-box'>
                <span className='icon'>
                <RiLockPasswordFill/>
                </span>
                <input type="password" required name='contrasena' />
                <label>Password</label>
              </div>
              <div className="remember-forgot">
                  <label><input type="checkbox" />I agree to the terms & condictions</label>
              </div>  
              <button type='submit' className="btn" onClick={metodoPost}> Register  </button>
              <div className="login-register">
                <p> Already have an account? <button onClick={putPanel} className="login-link">Login</button></p>
              </div>
            </form>
        </div>

      </div>
    </div>
    </Fragment>
    
    
  )
}
