import React, {useEffect, useState} from "react";
import { AccordionButton } from "react-bootstrap";
import axios from "axios";
import {Link } from "react-router-dom";

const About = () => {

    const [users,setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3005/users");
        setUser(result.data)
    };

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3005/users/${id}`);
        loadUsers();
    }
return (
    <div className="container">
        <div className="py-4">
            <h1>Employee List</h1>
            <table className="table border shadow">
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">ID</th>
      <th scope="col">First Name</th>
      <th scope="col">LastName</th>
      <th scope="col">Email</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((user,index) => (
            <tr>
                <th scope = "row">{index+1}</th>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                    <Link className="btn btn-primary mr-2" to={`/users/Details/${user.id}`}>View</Link>
                    <Link className= "btn btn-secondary mr-2" to={`/users/EditUser/${user.id}`}>Edit</Link>
                    <Link className= "btn btn-danger mr-2" onClick={() => deleteUser(user.id)}>Delete</Link>
                </td>
            </tr>
        ))
    }
  </tbody>
</table>
        </div>
     </div>
    );
};
export default About; 