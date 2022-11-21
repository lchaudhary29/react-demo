import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Switch, Route, Routes } from "react-router-dom";
import Employee from "./Employee";
import Department from "./Department";
import Project from "./Project";

function App() {
  return (
    <div>
      <h2>Welcome to App Component...</h2>
      <ul>
        <li>
          <Link to="/">Employees</Link>
        </li>
        <li>
          <Link to="/departments">Departments</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Employee/>}></Route>
        <Route path="/departments" element={<Department/>}></Route>
        <Route path="/projects" element={<Project/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
