import {useState} from "react";
import React from "react";

export default function Loginpage(){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(email,password);
    const response = await fetch('http://localhost:5000/employees/login', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({ email, password }),
   });

   const data = await response.json();

    if (response.ok) {
      alert('Login Successful !');
      window.location.href='http://localhost:3000/Prof';
    } else {
      // Handle login error
      alert("Invalid username or Password. Try Again !")
      console.log(data.error);
    }
  };

    return(
      
        <div class="body"  >
            <div class="p-3 mb-2 bg-dark text-white" style={{marginLeft:0,width:1700}}></div>

<form onSubmit={handleSubmit}>
            <div class="card" style={{width:500,marginLeft:500,marginBottom:350,marginTop:225}}>
  <div class="card-body">
    <h5 class="card-title">Log in to your employee account</h5>
    <div>
    <label for="InputEmpid" class="form-label" >Email :</label>
    <input type="email" class="form-control" onChange={(e)=>setEmail(e.target.value)}  id="email" aria-describedby="employeeId"/>
  </div>
  <div>
    <label for="InpuPassword" class="form-label">Password :</label>
    <input type="password" class="form-control" onChange={(e)=>setPassword(e.target.value)} id="password" aria-describedby="password"/>
  </div>
    
  <button type="submit" class="btn btn-primary" style={{backgroundColor:"#002D62",width:468,marginLeft:0,marginTop:20}}>LogIn</button><br></br>
  <br></br><p>Don't have an account <a href="/emp" style={{width:150,marginLeft:10,marginTop:20}}>Sign up</a></p>
  </div>
</div>






</form>
<div class="p-3 mb-2 bg-dark text-white" style={{width:1700}}></div>
        </div>
    )
}