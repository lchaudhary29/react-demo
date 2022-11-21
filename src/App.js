import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Link,
  Switch,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Employee from "./Employee";
import Department from "./Department";
import Project from "./Project";
import InvalidPath from "./InvalidPath";
import EditEmployee from "./EditEmployee";

function App() {
  return (
    <div>
      <h2>Welcome to App Component...</h2>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "testClass" : "")}
            to="/"
          >
            Employees
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "testClass" : "")}
            to="/departments"
          >
            Departments
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "testClass" : "")}
            to="/projects"
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "testClass" : "")}
            to="/xyz"
          >
            Invalid Path
          </NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Employee />}></Route>
        <Route path="/employee/:id" element={<EditEmployee />}></Route>
        <Route path="/departments" element={<Department />}></Route>
        <Route path="/projects" element={<Project />}></Route>
        <Route path="*" element={<InvalidPath />}></Route>
      </Routes>
    </div>
  );
}

export default App;
