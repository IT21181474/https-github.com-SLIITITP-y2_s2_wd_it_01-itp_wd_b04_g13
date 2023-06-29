import React, { useState } from "react";
import axios from "axios";

export default function WorkSchedule() {
  const [date, setDate] = useState("");
  const [starttime, setStarttime] = useState("");
  const [endtime, setEndtime] = useState("");
  const [empid, setEmpid] = useState("");
  const [task, setTask] = useState("");
  function sendData(e) {
    e.preventDefault();

    const newWorksch = {
      date,
      starttime,
      endtime,
      empid,
      task
    };

    axios
      .post("http://localhost:5000/worksch/add", newWorksch)
      .then(() => {
        alert("Successfully Added");
        setDate("");
       setStarttime("");
        setEndtime("");
        setEmpid("");
        setTask("");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div >
      <div class style={{backgroundColor:"#191970"}}>
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
      <p style={{ marginLeft: 40 }}>
        <h3 style={{color:"white"}} >Work Schedule</h3>
      </p>

      <div class="row">
        <div class="col-sm-6 mb-3 mb-sm-0" style={{ width: 1000, height: 1000 }}>
          <div class="card"style={{ marginLeft: 40 }}>
            <div class="card-body">
              <form onSubmit={sendData} class="row g_3">
                <table class="table">
                  <thead></thead><thead>
                    <tr>
                      <th scope="col">Date</th>
                      <th scope="col">Start Time</th>
                      <th scope="col">End Time</th>
                      <th scope="col">Emp Id</th>
                      <th scope="col">Task</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row"><input
                          type="date"
                          
                          onChange={(e) => {setDate(e.target.value)}}
                        /></th>
                      <td><input
                          type="time"
                         
                          onChange={(e) => {setStarttime(e.target.value)}}
                        /></td>
                         <td><input
                          type="time"
                          
                          onChange={(e) => {setEndtime(e.target.value)}}
                        /></td>
                        <td><input
                          type="text"
                          
                          onChange={(e) => {setEmpid(e.target.value)}}
                        /></td>
                        <th scope="row"><input
                          type="text"
                         
                          onChange={(e) => {setTask(e.target.value)}}
                        /></th>
                      
                    </tr>
                    
                    
                  </tbody>
                </table>
              </form>

             
<button type="submit" class="btn btn-primary"style={{backgroundColor:"#002D62",width:200,marginLeft:0,marginTop:20}} >Save</button>
             

            </div>
          </div>
        </div>
      </div>

      <div class="p-3 mb-2 bg-dark text-white" style={{ width: 1550 }}></div>
    </div></div>
  );
}
//<div class="dropdown">
  //<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    //Dropdown button
  //</button>
  //<ul class="dropdown-menu">
    //<li><a class="dropdown-item" href="#">Action</a></li>
    //<li><a class="dropdown-item" href="#">Another action</a></li>
    //<li><a class="dropdown-item" href="#">Something else here</a></li>
  //</ul>
//</div>
