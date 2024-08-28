import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeList from './EmployeeList';
import CreateEmployee from './CreateEmployee';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" to="/get">Employee List</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create">Create Employee</Link>
            </li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/get" element={<EmployeeList />} />
          <Route path="/create" element={<CreateEmployee />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
