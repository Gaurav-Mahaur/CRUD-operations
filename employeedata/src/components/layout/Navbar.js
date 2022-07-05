import React from "react";
//import Home from "../pages/Home";
import {Link,NavLink} from 'react-router-dom';

const Navbar = () =>
{
    return(
        <nav className="navbar navbar-expand-lg bg-dark">
           <div className="container">
             <NavLink className = "btn btn-outline-danger mr-auto" exact to ="">
                My Industry
             </NavLink>
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
            <NavLink className="btn btn-outline-primary" exact to="/About">
                Employee Data
            </NavLink>
            </li>
          </ul>
        </div>

        <NavLink className="btn btn-outline-primary" exact to ="/users/AddUser">Add Employee</NavLink>
      </div>
        </nav>
    )
}

export default Navbar;