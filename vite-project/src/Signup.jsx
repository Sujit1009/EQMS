import { useState } from "react";
import './index.css'
import './Login'
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
function Signup(){
    const[name,setName]=useState()
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3004/register',{name,email,password})
        .then(result=>{console.log(result)
           navigate('/login') 
        })
        .catch(err=>console.log(err))

    }
    return(
        <div className="App">
        <div className="signup-container">
          <h2>Register</h2>
          <form className="signup-form" onSubmit={handleSubmit} >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Enter Name" required 
                onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Enter Email" required 
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
              type="password" 
              id="password" 
              name="password" 
              placeholder="Enter Password" required 
              onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn register-btn">Register</button>
          </form>
          <div className="login-link">
            <p>Already Have an Account</p>
            <Link to="/login" className="new-button"> Login</Link>
            {/* <Link to="/login" className="btn login-btn">Login</Link> */}
            
          </div>
        </div>
      </div>
    );
}
export default Signup;