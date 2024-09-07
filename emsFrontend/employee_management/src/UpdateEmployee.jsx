import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateEmployee = ({ employeeId, onClose, onUpdate }) => {
    const [employee, setEmployee] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEmployee = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`/api/employees/${employeeId}`);
                setEmployee(response.data);
            } catch (err) {
                setError("Error fetching employee data");
            } finally {
                setLoading(false);
            }
        };

        if (employeeId) {
            fetchEmployee();
        }
    }, [employeeId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`/api/employees/${employeeId}`, employee);
            onUpdate(); // Call the onUpdate function to refresh the employee list
            onClose();  // Close the modal
        } catch (error) {
            console.error("Error updating employee:", error);
            alert("Failed to update employee");
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="alert alert-danger">{error}</div>;

    return (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Update Employee</h5>
                        <button type="button" className="close" onClick={onClose} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="modal-body">
                            <div className="form-group">
                                <label>First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="firstName"
                                    value={employee.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="lastName"
                                    value={employee.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={employee.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                            <button type="submit" className="btn btn-primary">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateEmployee;
