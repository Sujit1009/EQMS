import React, { useState } from 'react';
import axios from 'axios';
import './NavBar'
import NavBar from './NavBar';

const Form = () => {
  const [name, setName] = useState('');
  const [regNo, setRegNo] = useState('');
  const[email,setEmail]=useState('');
  const [course, setCourse] = useState('');
  const [formNo, setFormNo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3004/form', { name,email, regNo, course, formNo })
      .then(result => {
        console.log(result);
        alert('Form submitted successfully');
      })
      .catch(err => {
        console.error(err);
        alert('Error submitting form');
      });
  };

  return (
    <div>
      <NavBar/>
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>

        <div className="form-group">
          <label htmlFor="regNo">Reg No</label>
          <input type="text" id="regNo" name="regNo" value={regNo} onChange={(e) => setRegNo(e.target.value)} required />
        </div>

        <div className="form-group">
          <label htmlFor="course">Course</label>
          <input type="text" id="course" name="course" value={course} onChange={(e) => setCourse(e.target.value)} required />
        </div>

        <div className="form-group">
          <label htmlFor="formNo">Form No</label>
          <input type="text" id="formNo" name="formNo" value={formNo} onChange={(e) => setFormNo(e.target.value)} required />
        </div>

        <button type="submit" className="btn-submit">Submit</button>
      </form>
      <style>
        {`
          .form-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: gray;
          }
          .form {
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 300px;
          }
          .form-group {
            margin-bottom: 15px;
          }
          .form-group label {
            margin-bottom: 5px;
            display: block;
            font-weight: bold;
          }
          .form-group input {
            width: 100%;
            padding: 8px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 4px;
          }
          .btn-submit {
            width: 100%;
            padding: 10px;
            border: none;
            border-radius: 4px;
            background-color: #697a8d;
            color: white;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s;
          }
          .btn-submit:hover {
            background-color: #0056b3;
          }
        `}
      </style>
    </div>
    </div>
  );
};

export default Form;
