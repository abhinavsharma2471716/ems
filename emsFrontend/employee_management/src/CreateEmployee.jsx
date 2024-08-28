import React, { useState } from 'react'
import axios from 'axios'

const CreateEmployee = () => {
    // state to hold form input values
    const[employee , setEmployee] = useState({
        firstName : '',
        lastName : '',
        email :''
    });
    

    const[message, setMessage] = useState('');

    const handleInputChanges = (e) => {
        const { name, value} = e.target;
        setEmployee({
            ...employee,
            [name] : value
        });
    };
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const response = await axios.post('/api/employees', employee);
            setMessage('Employee Created Successfully!');
            setEmployee({firstName :'', lastName:'',email:''});

        }catch(error){
        setMessage('Error creating employee..');
        }
    };

    return (
        <div>
            <h1> Create new Employee</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input type='text' name='firstName' value={employee.firstName} onChange={handleInputChanges} required />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type='text' name='lastName' value={employee.lastName} onChange={handleInputChanges} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type='email' name='email' value={employee.email} onChange={handleInputChanges} required />
                </div>
                <button type='submit'>Create New Employee </button>
            </form>
            {message && <p>{message}</p>}
        </div>
    )

}

export default CreateEmployee