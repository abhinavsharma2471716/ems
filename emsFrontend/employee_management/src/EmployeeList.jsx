import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmployeeList = () => {
    const[employees, setEmployees] = useState([]);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(null);
    
    const fetchEmployees = async () => {
        setLoading(true);
        try{
            const response  = await axios.get("/api/employees");
            setEmployees(response.data);
        }catch(err){
            setError("Error fetching employee data");
        }finally{
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchEmployees();
    },[]);

    if(loading) return <div className='text-center mt-5'>Loading...</div>
    if(error) return <div className='alert alert-danger text-center'>{error}</div>

    return (
      <div className='container mt-5'>
        <h1 className='text-center mb-4'>Employee List</h1>
        <button className='btn btn-primary mb-4' onClick={fetchEmployees}>Refresh Employee List</button>
        {employees.length === 0 ? <p>No Employees found</p> : (
            <ul className='list-group'>{employees.map((employee) => (
                <div key={employee.id} className='card mb-3'>
                    <div className='card-body'>
                        <h5 className='card-title'>{employee.firstName}{employee.lastName}</h5>
                        <p className="mb-2 text-muted">{employee.email}</p>
                    </div>
                </div>
            ))}
            </ul>
        )}
      </div>
    )
}

export default EmployeeList