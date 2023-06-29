import React,{useState, useEffect} from "react";

export default function Profile(){
    return(
        <div>
            
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

    

           
                
                   
                        <div class="card-body" style={{color:"White"}} >
                          
                            
                      
                   
              

                
                <div class="col-sm-4 mb-4 mb-sm-0 row body row bg-image" style={{width:1140,height:685,marginTop:-10}}>
                    

                
  <div class><div class="col-sm-6 mb-4 mb-sm-0">
    <div class="card"style={{backgroundColor:"MidnightBlue",marginTop:80,marginLeft:1180,width:300,height:350}}>
      <div class="card-body"><h4><p class="card-title" style={{marginTop:80,
        fontFamily:"Ariel",color:"white",textShadow: "1px 1px 1px black, 2px 2px 1px black"}} >
        "Join the Courier Mate family and embark on an exciting career in the 
  world of fast-paced logistics, where your talents and dedication make every delivery count."</p></h4>
        
        
      </div>
    </div>
  </div>
    <div class="card-body" style={{color:"White" }} >
      <div class=""  ></div>
    </div> 
  </div>
</div>


                
                <div class="col-sm-6" style={{marginLeft:200,marginTop:1}}></div>
                <div class="p-4 mb-2 bg-dark text-white" style={{width:1700,height:80}}></div>

            </div>

            
        </div>
    )
}
