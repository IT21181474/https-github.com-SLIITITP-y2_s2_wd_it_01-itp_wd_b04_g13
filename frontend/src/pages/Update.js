import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const UpdateData=()=> {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [dateofbirth, setDateofbirth] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  const parms = useParams();

  const getselectedUser =() => {
    axios
      .get(`http://localhost:5000/employees/${parms.id}`)
      .then((res) => {
        console.log(res.data)
        setFirstname(res.data.firstname);
        setLastname(res.data.lastname);
        setContactNumber(res.data.contactNumber);
        setDateofbirth(res.data.dateofbirth);
        setAddress(res.data.address);
        setEmail(res.data.email);
      })
      
      }
      useEffect(()=>{
        getselectedUser();

      },[]);



  const updateData = (e) => {
    e.preventDefault();

    let updatedData = {
      firstname:firstname,
      lastname:lastname,
      contactNumber:contactNumber,
      dateofbirth:dateofbirth,
      address:address,
      email:email,
    }

    axios
      .put(`http://localhost:5000/employees/update/${parms.id}`, updatedData)
      .then(() => {
        alert("Successfully Updated");
      })
      .catch((err) => {
        alert(err);
      });
  }

return(
        
      <div class style={{backgroundColor:"#191970"}}>
  
      

<form class="row g-3"> 

<div class="card" style={{marginLeft:500,width:540,marginBottom:200,marginTop:40,backgroundColor:"#ADD8E6"}}>
  <div class="card-body">
  <h5 class="card-title">Update your employee Details</h5>
   
 
<div class="col-md-6" style={{width:480}}>

<label for="firstname" class="form-label">First Name</label>
<input type="text" class="form-control" id="firstname" aria-describedby="First name" onChange={(e)=>
  
  setFirstname(e.target.value)}
  value={firstname} />
</div>

<div class="col-md-6"style={{width:480}}>
<label for="lastame" class="form-label">Last Name</label>
<input type="text" class="form-control" id="lastame" aria-describedby="lastName" onChange={(e)=>
  
  setLastname(e.target.value)}
  value={lastname} />
</div>

<div class="col-md-6" style={{width:480}}>
<label for="contactNumber" class="form-label">Contact Number</label>
<input type="number" class="form-control" id="contactNumber" aria-describedby="contactNo" onChange={(e)=>
  
  setContactNumber(e.target.value)} 
  value={contactNumber} />
</div>

<div class="col-md-6" style={{width:480}}>
<label for="dateofbirth" class="form-label">Date of Birth</label>
<input type="date" class="form-control" id="dateofbirth" aria-describedby="DOB"onChange={(e)=>
  
  setDateofbirth(e.target.value)} 
  value={dateofbirth}/>
</div>

<div class="col-md-6" style={{width:480}}>
<label for="address" class="form-label">Address</label>
<input type="text" class="form-control" id="address" aria-describedby="inputAddress"onChange={(e)=>
  
  setAddress(e.target.value)}
  value={address} />
</div>

<div class="col-md-6" style={{width:480}}>
<label for="email" class="form-label">Email Address</label>
<input type="email" class="form-control" id="email" aria-describedby="emailHelp" onChange={(e)=>
  
  setEmail(e.target.value)} 
  value={email} />
</div>
<button type="submit" onClick={updateData} class="btn btn-primary"
style={{marginLeft:20,backgroundColor:"blue",marginTop:10}} >Update</button>
  <a href="/employee" class="btn btn-primary"style={{marginLeft:10,backgroundColor:"black"}}>Cancel</a>  <br></br></div></div>
    
<div class="p-3 mb-2 bg-dark text-white" style={{width:1650 ,marginTop:-100}}></div>
</form>
</div>

   )
}
export default UpdateData;