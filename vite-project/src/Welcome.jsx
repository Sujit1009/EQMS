import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Navbar from './NavBar'; // Import your NavBar component
import './Welcome'; // Import any other styles or components you need

const Welcome = () => {
  const location = useLocation();
  const loggedInUserEmail = location.state?.email;
  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    if (loggedInUserEmail) {
      axios.get(`http://localhost:3004/form/data/${loggedInUserEmail}`)
        .then(result => {
          setAdmin(result.data);
        })
        .catch(err => console.log(err));
    }
  }, [loggedInUserEmail]);

  return (
    <div>
      <Navbar />
      <div className='back'>
        <div className='back'>
          <table className='table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Reg No</th>
                <th>Course</th>
                <th>Form No</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {admin.map((adminItem) => (
                <tr key={adminItem._id}>
                  <td>{adminItem.name}</td>
                  <td>{adminItem.regNo}</td>
                  <td>{adminItem.course}</td>
                  <td>{adminItem.formNo}</td>
                  <td>{adminItem.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
