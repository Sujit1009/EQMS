import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Admin = () => {
    const [admin, setAdmin] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3004/form/data')
            .then(result => setAdmin(result.data))
            .catch(err => console.log(err));
    }, []);

    const handleAccept = (id) => {
        axios.patch(`http://localhost:3004/form/accept/${id}`)
            .then(res => {
                setAdmin(admin.map(item => item._id === id ? { ...item, status: 'Accepted' } : item));
            })
            .catch(err => console.log(err));
    };
    const handleReject = (id) => {
        axios.patch(`http://localhost:3004/form/reject/${id}`)
            .then(res => {
                setAdmin(admin.filter(item => item._id !== id));
            })
            .catch(err => console.log(err));
    };

    const buttonStyle = {
        padding: '5px 10px',
        border: 'none',
        borderRadius: '5px',
        color: 'white',
        cursor: 'pointer'
    };

    const acceptButtonStyle = {
        ...buttonStyle,
        backgroundColor: 'green'
    };

    const rejectButtonStyle = {
        ...buttonStyle,
        backgroundColor: 'red'
    };

    return (
        <div className='back'>
            <div className='back'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Reg No</th>
                            <th>Course</th>
                            <th>Form No</th>
                            <th>Status</th>
                            <th>Accept/Reject</th>
                        </tr>
                    </thead>
                    <tbody>
                        {admin.map((adminItem) => (
                            <tr key={adminItem._id}>
                                <td>{adminItem.name}</td>
                                <td>{adminItem.email}</td>
                                <td>{adminItem.regNo}</td>
                                <td>{adminItem.course}</td>
                                <td>{adminItem.formNo}</td>
                                <td>{adminItem.status}</td>
                                <td>
                                    <button style={acceptButtonStyle} onClick={() => handleAccept(adminItem._id)}>Accept</button>
                                    <button style={rejectButtonStyle} onClick={() => handleReject(adminItem._id)}>Reject</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admin;
