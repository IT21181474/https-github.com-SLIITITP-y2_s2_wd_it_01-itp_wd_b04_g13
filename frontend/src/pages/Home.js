import React from "react";


function home(){

    const tableStyle = {
        border: "1px solid #ddd",
        width: "50%",
        margin: "auto",
        backgroundColor: "#FFFFFF",
    };

    const buttonStyle = {
        backgroundColor: "#ff0000", // black background color
        color: "#fff", // white text color
        padding: "10px 20px", // padding for the button
        borderRadius: "5px", // border radius for the button
        textDecoration: "none", // remove underline on hover
        display: "block", // display as a block-level element
        margin: "auto", // center the button horizontally
        textAlign: "center", // center the button text horizontally
      };

    return(
        
    <div style={{background:'linear-gradient(to right,#FBD786,#84fab0',minHeight:'100vh'}}>
            
            <br/><p className='text-4xl' style={{textAlign: "center", color:"#000000"}} >Welcome to the Courier Mate</p><br/>
            
            
            <table style={tableStyle}>
                <tr>
                    <td>
                    <p className='text-2xl font-regular text-black'><br/><center>
                            The Web Site is began with the goal of provide efficient, effective and customer friendly Courier Service to public and private sector organizations and individuals across the island.<br/><br/></center></p>
                    </td>
                </tr>
               
            </table><br/><br/>
            
            <button style={buttonStyle} onClick={() => window.location.href="/why"}>
        Why to choose us?
      </button> 
     
        </div>
    )
}

export default home;