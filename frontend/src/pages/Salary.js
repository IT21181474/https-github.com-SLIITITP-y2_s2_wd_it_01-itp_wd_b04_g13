import React, { useState } from "react";
import axios from "axios";
//import {Link} from 'react-router-dom'

export default function Salary() {
 
  const [noOfDays, setNoOfDays] = useState("");
  const [regularOt, setRegularOt] = useState("");
  const [specialHolidays, setSpecialHolidays] = useState("");
  const [totalOtPay, setTotalOtPay] = useState("");
  const [otherPay, setOtherPay] = useState("");
  const [loan, setLoan] = useState("");
  const [deduction, setDeduction] = useState("");
  const [otherDeduction, setOtherDeduction] = useState("");
  const [totalDeduction, setTotalDeduction] = useState("");
  const [netPay, setNetPay] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newPaysheet = {
      
        
      noOfDays,
      regularOt,
      specialHolidays,
      totalOtPay,
      otherPay,
      loan,
      deduction,
      otherDeduction,
      totalDeduction,
      netPay
    };

    axios.post("http://localhost:5000/paysheet/add", newPaysheet).then(() => {
        alert("Saved");
        

      
        setNoOfDays("");
        setRegularOt("");
        setSpecialHolidays("");
        setTotalOtPay("");
        setOtherPay("");
        setLoan("");
        setDeduction("");
        setOtherDeduction("");
        setTotalDeduction("");
        setNetPay("");
      })
      .catch((err) => {
        alert(err);
      });
  }


 
  return(
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



          
<form onSubmit={sendData} >

<div class="row">
<div class="card"style={{backgrounColor:"#888888",marginLeft:300,width:1000}} >
  <div class="card-body">

  

 


    
<div class="row mb-3">
  <label for="colFormLabel" class="col-sm-2 col-form-label">Number of days</label>
  <div class="col-sm-10">
    <input type="number" class="form-control" id="noOfDays"required onChange={(e)=>{
  
  setNoOfDays(e.target.value)

}} ></input>
 </div>
</div>

<div class="row mb-3">
  <label for="colFormLabe2" class="col-sm-2 col-form-labe2">Regular OT</label>
  <div class="col-sm-10">
    <input type="number" class="form-control" id="regularOt" required onChange={(e)=>{
  
  setRegularOt(e.target.value)

}}></input>
 </div>
</div>

<div class="row mb-3">
  <label for="colFormLabe3" class="col-sm-2 col-form-labe3">Special holidays</label>
  <div class="col-sm-10">
    <input type="number" class="form-control" id="specialHolidays" required onChange={(e)=>{
  
  setSpecialHolidays(e.target.value)

}}></input>
 </div>
</div>

<div class="row mb-3">
  <label for="colFormLabe4" class="col-sm-2 col-form-labe4">Total OT pay</label>
  <div class="col-sm-10">
    <input type="number" class="form-control" id="totalOtPay" required onChange={(e)=>{
  
  setTotalOtPay(e.target.value)

}}></input>
 </div>
</div>

<div class="row mb-3">
  <label for="colFormLabe5" class="col-sm-2 col-form-labe5">Other Pay</label>
  <div class="col-sm-10">
    <input type="number" class="form-control" id="otherPay" required onChange={(e)=>{
  
  setTotalOtPay(e.target.value)

}}></input>
 </div>
</div>





<div class="row mb-3">
  <label for="colFormLabe6" class="col-sm-2 col-form-labe6">Loan</label>
  <div class="col-sm-10">
    <input type="number" class="form-control" id="loan" required onChange={(e)=>{
  
  setLoan(e.target.value)

}}></input>
 </div>
</div>

<div class="row mb-3">
  <label for="colFormLabe7" class="col-sm-2 col-form-labe7">Deduction</label>
  <div class="col-sm-10">
    <input type="number" class="form-control" id="deduction" required onChange={(e)=>{
  
  setDeduction(e.target.value)

}}></input>
 </div>
</div>

<div class="row mb-3">
  <label for="colFormLabe8" class="col-sm-2 col-form-labe8">Other Deduction</label>
  <div class="col-sm-10">
    <input type="number" class="form-control" id="otherDeduction"required onChange={(e)=>{
  
  setOtherDeduction(e.target.value)

}} ></input>
 </div>
</div>

<div class="row mb-3">
  <label for="colFormLabe9" class="col-sm-2 col-form-labe9">Total Deduction</label>
  <div class="col-sm-10">
    <input type="number" class="form-control" id="totalDeduction" required onChange={(e)=>{
  
  setTotalDeduction(e.target.value)

}}></input>
 </div>
</div>

<div class="row mb-3">
  <label for="colFormLabe10" class="col-sm-2 col-form-labe10">Net Pay</label>
  <div class="col-sm-10">
    <input type="number" class="form-control" id="netPay" required onChange={(e)=>{
  
  setNetPay(e.target.value)

}}></input>
 </div>
</div>

<button type="submit" class="btn btn-primary"style={{backgroundColor:"#002D62",width:150,marginLeft:0,marginTop:20}}>Save</button>

</div></div></div>
</form>
<div class="p-3 mb-2 bg-dark text-white" style={{width:1550}}></div>


  </div></div>
    )
   
    }