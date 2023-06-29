import React, { useState, useEffect } from "react";
import { useRef } from "react";
import axios from "axios";
import  {useReactToPrint} from 'react-to-print'

export default function Gneratereports() {
  const [employees, setEmployees] = useState([]);
  const componentPDF = useRef()

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

  const generatePDF = useReactToPrint({
    content: () => componentPDF.current, 
    documentTitle: "AutoForce employee Log",
    onAfterPrint: () => alert("Data Saved to PDF")
})

  return (
    <div className="container" style={{position:"absolute"}}>
      <div class="p-4 mb-2 bg-dark text-white" style={{width:1700}}  > 
            <a class="navbar-brand"style={{color:"White",fontFamily:"cursive",textShadow: "1px 1px 1px red, 2px 2px 1px red"}} href="/prof">Courier Mate</a>
          
                <a href="/worksch" class="btn btn-primary" style={{marginLeft:850,backgroundColor:"black"}}>Work Schedule</a>
                <a href="/sal" class="btn btn-primary"style={{marginLeft:10,backgroundColor:"black"}}>Salary Details</a> 
                <a href="/employee" class="btn btn-primary"style={{marginLeft:10,backgroundColor:"black"}}>Employee List</a> 
                <a href="/log" class="btn btn-primary" style={{marginLeft:10,backgroundColor:"navy" }}>Logout</a>       
            </div>
    <div ref = {componentPDF} style={{backgroundColor:"#FFFFF0"}}> 

      <h2 style={{color:"#191970"}} >Courier Mate- Employee Details  </h2>
      
      <table class="table">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Contact Number</th>
            <th scope="col">Date of Birth</th>
            <th scope="col">Address</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.firstname}</td>
              <td>{employee.lastName}</td>
              <td>{employee.contactNumber}</td>
              <td>{employee.dateofbirth}</td>
              <td>{employee.address}</td>
              <td>{employee.email}</td>
              <td>{employee.password}</td>
              <td>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <button className="pdfgen" onClick={ generatePDF } style={{width: 150, borderRadius: 5,color:"white",backgroundColor:"#0D296F"}}>Get PDF</button>
     </div>
  )
}
        

   