import React,{useState} from "react";
import axios from "axios";


export default function Add(){
  const [firstname, setFirstname]=useState(""); 
  const [lastname, setLastname]=useState(""); 
  const [contactNumber, setContactNumber]=useState(""); 
  const [nic, setNic]=useState(""); 
  const [dateofbirth, setDateofbirth]=useState(""); 
  const [address, setAddress]=useState(""); 
  const [email, setEmail]=useState(""); 
  const [password, setPassword]=useState(""); 

  function sendData(e){
e.preventDefault();

const newEmployee = {

  firstname,
  lastname,
  contactNumber,
  dateofbirth,
  nic,
  address,
  email,
  password
}
  axios.post("http://localhost:5000/employees/add",newEmployee).then(()=>{
   alert ("Successfully Created");
   window.location.href='http://localhost:3000/log';

    setFirstname("");
    setLastname("");
    setContactNumber("");
    setDateofbirth("");
    setNic("");
    setAddress("");
    setEmail("");
    setPassword("");
    
  }).catch((err)=>{
    alert(err)})




}
    return(
        
      <div class="body">

        <div class="p-3 mb-2 bg-dark text-white" style={{width:1650}}>
        

        </div>

      

<form onSubmit={sendData} class="row g-3"> 

<div class="card" style={{width:500,marginLeft:500,marginBottom:200,marginTop:25,backgroundColor:"#003366"}}>
  <div class="card-body">
  <h5 class="card-title" style={{color:"white"}}>Create your employee account</h5>
   
 
<div class="col-md-6">

<label for="firstname" class="form-label" style={{color:"white"}}>First Name</label>
<input type="text" class="form-control" id="firstname" aria-describedby="First name"required onChange={(e)=>{
  
  setFirstname(e.target.value)

}} />
</div>

<div class="col-md-6">
<label for="lastame" class="form-label" style={{color:"white"}}>Last Name</label>
<input type="text" class="form-control" id="lastame" aria-describedby="lastName"required onChange={(e)=>{
  
  setLastname(e.target.value)

}} />
</div>

<div class="col-md-6">
<label for="contactNumber" class="form-label" style={{color:"white"}}>Contact Number</label>
<input type="number" class="form-control" id="contactNumber" aria-describedby="contactNo"required onChange={(e)=>{
  
  setContactNumber(e.target.value)

}}  />
</div>

<div class="col-md-6">
<label for="dateofbirth" class="form-label" style={{color:"white"}}>Date of Birth</label>
<input type="date" class="form-control" id="dateofbirth" aria-describedby="DOB"required onChange={(e)=>{
  
  setDateofbirth(e.target.value)

}} />
</div>

<div class="col-md-6"style={{width:"300"}}>
<label for="nic" class="form-label" style={{color:"white"}}>NIC Number</label>
<input type="string" class="form-control"  id="nic" aria-describedby="nic" required onChange={(e)=>{
  
  setNic(e.target.value)

}}  />
</div>

<div class="col-md-6">
<label for="address" class="form-label" style={{color:"white"}}>Address</label>
<input type="text" class="form-control" id="address" aria-describedby="inputAddress"required onChange={(e)=>{
  
  setAddress(e.target.value)

}} />
</div>

<div class="col-md-6">
<label for="email" class="form-label" style={{color:"white"}}>Email Address</label>
<input type="email" class="form-control" id="email" aria-describedby="emailHelp" required onChange={(e)=>{
  
  setEmail(e.target.value)

}}  />
</div>



<div class="col-md-6">
<label for="password" class="form-label" style={{color:"white"}}>Password</label>
<input type="password" class="form-control" id="password" required onChange={(e)=>{
  
  setPassword(e.target.value)

}}

/>
</div>

<button type="submit" class="btn btn-primary"style={{backgroundColor:"#002D62",width:200,marginLeft:0,marginTop:20}} >Register</button></div></div>

<div class="p-3 mb-2 bg-dark text-white" style={{width:1650}}></div>
</form>
</div>

   )
}