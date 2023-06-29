import React,{useState} from "react";
import axios from "axios";
export default function Editprofile(){
  const [firstname, setFirstname]=useState(""); 
  const [lastname, setLastname]=useState(""); 
  const [contactNumber, setContactNumber]=useState(""); 
  const [dateofbirth, setDateofbirth]=useState(""); 
  const [address, setAddress]=useState(""); 
  const [email, setEmail]=useState(""); 
  const [password, setPassword]=useState(""); 

  function sendChanges(e){
e.preventDefault();

const editedEmployee = {

  firstname,
  lastname,
  contactNumber,
  dateofbirth,
  address,
  email,
  password
}
  axios.post("http://localhost:5000/employees/add",editedEmployee).then(()=>{
   alert ("Successfully Created")

    setFirstname("");
    setLastname("");
    setContactNumber("");
    setDateofbirth("");
    setAddress("");
    setEmail("");
    setPassword("");
    
  }).catch((err)=>{
    alert(err)})


}
    return(
        
      <div class="body">

        <div class="p-3 mb-2 bg-dark text-white" style={{width:1700}}></div>
      

<form onSubmit={sendChanges} class="row g-3"> 

<div class="card" style={{width:500,marginLeft:800,marginBottom:200,marginTop:50}}>
  <div class="card-body">
  <h5 class="card-title">Create your employee account</h5>
   
 
<div class="col-md-6">

<label for="firstname" class="form-label">First Name</label>
<input type="text" class="form-control" id="firstname" aria-describedby="First name"required onChange={(e)=>{
  
  setFirstname(e.target.value)

}} />
</div>

<div class="col-md-6">
<label for="lastame" class="form-label">Last Name</label>
<input type="text" class="form-control" id="lastame" aria-describedby="lastName"required onChange={(e)=>{
  
  setLastname(e.target.value)

}} />
</div>

<div class="col-md-6">
<label for="contactNumber" class="form-label">Contact Number</label>
<input type="number" class="form-control" id="contactNumber" aria-describedby="contactNo"required onChange={(e)=>{
  
  setContactNumber(e.target.value)

}}  />
</div>

<div class="col-md-6">
<label for="dateofbirth" class="form-label">Date of Birth</label>
<input type="date" class="form-control" id="dateofbirth" aria-describedby="DOB"required onChange={(e)=>{
  
  setDateofbirth(e.target.value)

}} />
</div>

<div class="col-md-6">
<label for="address" class="form-label">Address</label>
<input type="text" class="form-control" id="address" aria-describedby="inputAddress"required onChange={(e)=>{
  
  setAddress(e.target.value)

}} />
</div>

<div class="col-md-6">
<label for="email" class="form-label">Email Address</label>
<input type="email" class="form-control" id="email" aria-describedby="emailHelp" required onChange={(e)=>{
  
  setEmail(e.target.value)

}}  />
</div>



<div class="col-md-6">
<label for="password" class="form-label">Password</label>
<input type="password" class="form-control" id="password" required onChange={(e)=>{
  
  setPassword(e.target.value)

}}

/>
</div>

<button type="submit" class="btn btn-primary"style={{marginLeft:20,backgroundColor:"blue",marginTop:10}} >Register</button></div></div>

<div class="p-3 mb-2 bg-dark text-white" style={{width:1700}}></div>
</form>
</div>

   )
}