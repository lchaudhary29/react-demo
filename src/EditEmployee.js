import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function EditEmployee(props) {
  const [employee, setEmployee] = useState({});

  let { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:44306/api/Employee/" + id)
      .then((res) => res.json())
      .then((result) => {
        setEmployee(result);
      });
  },[id]);

  function changeEmployeeData(e) {}
  return (
    <div>
      <h2>Employee Details...</h2>
      <p>
        <label>
          Employee ID :
          <input
            type="text"
            name="Id"
            value={employee.id}
            onChange={changeEmployeeData}
          ></input>
        </label>
      </p>
      <p>
        <label>
          Employee Name :
          <input
            type="text"
            name="Name"
            value={employee.name}
            onChange={changeEmployeeData}
          ></input>
        </label>
      </p>
      <p>
        <label>
          Employee Location :
          <input
            type="text"
            name="Location"
            value={employee.location}
            onChange={changeEmployeeData}
          ></input>
        </label>
      </p>
      <p>
        <label>
          Employee Salary :
          <input
            type="text"
            name="Salary"
            value={employee.salary}
            onChange={changeEmployeeData}
          ></input>
        </label>
      </p>
      <button>Update</button>
    </div>
  );
}

export default EditEmployee;
