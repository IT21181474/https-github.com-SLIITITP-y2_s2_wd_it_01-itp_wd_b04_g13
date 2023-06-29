import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteButton from "../Components/DeleteButton";
import {Link} from 'react-router-dom'

export default function EmpL() {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    function getEmployees() {
      axios
        .get("http://localhost:5000/employees/")
        .then((res) => {
          setEmployees(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getEmployees();
  }, []);

  const handleDelete = () => {
    axios
      .delete("http://localhost:5000/employees")
      .then((res) => {
        setEmployees(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = employees.filter((employee) =>
    employee.firstname.toLowerCase().includes(searchTerm.toLowerCase())

   
  );

  return (
  
  <div className="container" style={{position:"absolute"}}>
   
    

     <div class="p-4 mb-2 bg-dark text-white" style={{width:1700}}  > 
            <a class="navbar-brand"style={{color:"White",fontFamily:"cursive",textShadow: "1px 1px 1px red, 2px 2px 1px red"}} href="/prof">Courier Mate</a>
                  <button class="btn btn-primary" type="button" 
                  style={{marginLeft:745,width:100,height:40,backgroundColor:"black"}} data-bs-toggle="offcanvas" 
                  data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">User
                    
                  </button>

<div class="offcanvas offcanvas-start"style={{backgroundColor:"navy"}} data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel " style={{color:"white"}} >Employee Details</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body bg-dark">  
                            <h5 class="card-title"style={{color:"white"}}>Employee name</h5>
                            <p class="card-text"style={{color:"white"}}>Contact Number</p>
                            <p class="card-text"style={{color:"white"}}>Date Of Birth</p>
                            <p class="card-text"style={{color:"white"}}>Address</p>
                            <p class="card-text"style={{color:"white"}}>Email</p>
    <a href="/update" class="btn btn-primary" style={{marginTop:300,backgroundColor:"black"}}>Edit profile</a><br></br><br></br>
  </div>
</div>
                <a href="/worksch" class="btn btn-primary" style={{marginLeft:10,backgroundColor:"black"}}>Work Schedule</a>
                <a href="/sal" class="btn btn-primary"style={{marginLeft:10,backgroundColor:"black"}}>Salary Details</a> 
                <a href="/employee" class="btn btn-primary"style={{marginLeft:10,backgroundColor:"black"}}>Employee List</a> 
                <a href="/log" class="btn btn-primary" style={{marginLeft:10,backgroundColor:"navy" }}>Logout</a>       
            </div>
    <div class="p-4 mb-2 bg-dark text-white yyy" style={{width:1600,height:250,marginBottom:0,marginTop:0}}>
     <a href="/r" class="card-link" style={{marginBottom:10,marginLeft:650,color:"blue"}}><h5>Get PDF</h5></a>
    
      <h1 style={{marginTop:30,color:"red",textShadow: "1px 1px 1px navy, 2px 2px 1px navy"}}>Employee List</h1>
      
      <form class="d-flex">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          style={{width:500,backgroundColor:"#B0C4DE"}}
          value={searchTerm}
          onChange={handleSearch}
        /> 
      </form>
      </div>
      
      
      
      <table class="table"style={{marginLeft:50,backdropFilter:"blur"}}>
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Contact Number</th>
            <th scope="col">Date of Birth</th>
            <th scope="col">Address</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Actions</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.firstname}</td>
              <td>{employee.lastname}</td>
              <td>{employee.contactNumber}</td>
              <td>{employee.dateofbirth}</td>
              <td>{employee.address}</td>
              <td>{employee.email}</td>
              <td>{employee.password}</td>
              <td>

                <Link to={'/edit/update/'+employee._id}>
                <button type="submit" class="btn btn-primary" style={{backgroundColor:"#002D62",width:150,marginLeft:-10}}>Update</button>
                </Link>
                
              </td>
              <td><DeleteButton id={employee._id} onDelete={handleDelete} /></td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
}
        

   