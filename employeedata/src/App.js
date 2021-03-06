import logo from './logo.svg';
import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import About from './components/pages/About';
import Navbar from './components/layout/Navbar';
import AddUser from './components/users/AddUser';
import  { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import EditUser from './components/users/EditUser';
import Details from './components/users/Details';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route eaxact path="/About" element={<About/>}/>
          <Route exact path = "/users/AddUser" element = {<AddUser/>}/>
          <Route exact path = "/users/EditUser/:id" element = {<EditUser/>}/>
          <Route exact path = "/users/Details/:id" element = {<Details/>}/>
        </Routes>
        </div>


    </Router>
  );
}

export default App;
