import React from 'react';
import { useState, useEffect } from "react";

function Employee() {
    
  const [employees,setEmployees]=useState([]);
    useEffect(()=> {
      fetch("https://localhost:44306/api/Employee")
        .then(res => res.json())
        .then(
          (result) => {
            setEmployees(result);
          }
        );
    });
  
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
              </tr>
            </thead>
            <tbody>
            {employees.map(emp => (
              <tr key={emp.Id}>
                <td>{emp.Id}</td>
                <td>{emp.Name}</td>
                <td>{emp.Location}</td>
                <td>{emp.Salary}</td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
        );
}

export default Employee