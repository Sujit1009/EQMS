import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import Form from './Form';
import Home from './Home';
import './Welcome'
const NavBar = () => {
  return (
    <nav style={styles.navbar}>
      <Link to="/welcome" style={styles.link}>Home</Link>
      <Link to="/Form" style={styles.link}>Form</Link>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '10px 0',
    textAlign: 'center',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    padding: '10px 20px',
    transition: 'background-color 0.3s',
  },
};

export default NavBar;


