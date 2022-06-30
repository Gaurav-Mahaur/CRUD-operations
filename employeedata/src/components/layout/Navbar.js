import React from "react";
//import Home from "../pages/Home";
import {Link,NavLink} from 'react-router-dom';

const Navbar = () =>
{
    return(
        <nav className="navbar navbar-expand-lg bg-dark">
           <div className="container">
             <a className = "btn btn-outline-danger mr-2" href ="">
                My User
             </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav   mr-auto">
            
            <li className="nav-item">
            <a className="btn btn-outline-primary" href="/About">
                EmployeeList
            </a>
            </li>
          </ul>
        </div>

        <a className="btn btn-outline-primary" href ="/users/AddUser">Add Employee</a>
      </div>
        </nav>
    )
}

export default Navbar;