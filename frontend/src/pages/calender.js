import React, { useState } from 'react';
import Calendar from 'react-calendar';

import { Link } from "react-router-dom";
import 'react-calendar/dist/Calendar.css'

export default function CalendarPage(){
    const [value, onChange] = useState(new Date());
   


    return(
      <diV>
      <h1>Calendar</h1>
      <h>Doctor:{data}</h>
      
      <br></br>
      <div style={{width:'80%'}}>
      <Calendar  onChange={onChange}  />
    </div>
 
      
    </diV>
      
  
    )
  }
