import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function EditEmployee(props) {
  const [employee, setEmployee] = useState({
    id: "",
    name: "",
    location: "",
    salary: "",
  });

  let { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:44306/api/Employee/" + id)
      .then((res) => res.json())
      .then((result) => {
        setEmployee(result);
      });
  }, [id]);

  function changeEmployeeData(e) {
    debugger;
  }

  return (
    <div>
      <h2>Employee Details...</h2>
      <p>
        <label>
          Employee ID :
          <input
            type="text"
            name="id"
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
            name="name"
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
            name="location"
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
            name="salary"
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
