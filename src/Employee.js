import React from "react";
import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Link,
  Switch,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";

function Employee() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    fetch("http://localhost:44306/api/Employee")
      .then((res) => res.json())
      .then((result) => {
        setEmployees(result);
      });
  }, []);

  return (
    <div>
      <h2>Employees Data...</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Location</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.location}</td>
              <td>{emp.salary}</td>
              <td>
                <Link to={"/employee/" + emp.id}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employee;
