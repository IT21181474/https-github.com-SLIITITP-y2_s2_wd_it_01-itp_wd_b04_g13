import React from "react";


function home(){

    const tableStyle = {
        border: "0",
        width: "50%",
        margin: "auto",
        backgroundColor: "white",
        borderRadius: "20px",
        padding: "10px",
        textstyle: "poppins"
    };

    const buttonStyle = {
        backgroundColor: "#ff0000", // black background color
        color: "#fff", // white text color
        padding: "10px", // padding for the button
        borderRadius: "5px", // border radius for the button
        textDecoration: "none", // remove underline on hover
        display: "block", // display as a block-level element
        margin: "auto", // center the button horizontally
        textAlign: "center", // center the button text horizontally
      };

    return(
        
    <div style={{background:'linear-gradient(to right,gray,#c7ecee', height:'1200px'}}>
         
            <br/><p className='text-4xl' style={{textAlign: "center", color:"blue"}} >Welcome to the Courier Mate</p><br/>
            
            
            <table style={tableStyle}>
                <tr>
                    <td>
                    <p className='text-2xl font-regular text-black'><br/><center>
                            The Web Site is began with the goal of provide efficient, effective and customer friendly Courier Service to public and private sector organizations and individuals across the island.<br/><br/></center></p>
                    </td>
                </tr>
               
            </table><br/><br/>
            
            
            <br/><p className='text-2xl' style={{textAlign: "center", color:'red'}} >Why to choose us?</p><br/>

            
                <p className='text-3xl' style={{textAlign:"center", color:'blue'}}><center> Here are the reasons why you should choose us</center></p><br/>
            <table style={tableStyle}>
                <tr>
                    <td>
                    <p className='text-2xl font-regular text-black'><center><br/>
                    Easy sign up<br/>
                    No membership or monthly fee<br/>
                    Fast and trustworthy delivery methods<br/>
                    Qulity service</center></p><br/>
                    </td>
                </tr>
               
                    
                
            </table><br/><br/>
     
        </div>
    )
}

export default home;