import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './Components/Header';

import Add from './pages/Add';
import PaySheet from './pages/PaySheet';

import WorkSchedule from './pages/WorkSchedule';
import Profile from './pages/Profile';
import Home from './pages/Home';
import W from './pages/W';
import EmpL from './pages/EmpL';
import Report from './pages/Report';
import Gneratereports from './pages/Gneratereports';
import Loginpage from './pages/Loginpage';
import Salary from './pages/Salary';
import UpdateData from './pages/Update';






function App() {
  return (
    <div classname="App">
  <Router>
    <Route path="/emp" component={Add}/>
    <Route path="/PaySheet" component={PaySheet}/>
   <Route path="/worksch" component={WorkSchedule}/>
    <Route path="/Prof" component={Profile}/>
    <Route path="/header" component={Header}/>
   <Route path="/employee" component={EmpL}/>
   <Route path="/home" component={Home}/>
   <Route path="/w" component={W}/>
   <Route path="/route" component={Report}/>
   <Route path="/r" component={Gneratereports}/>
   <Route path="/log" component={Loginpage}/>
   <Route path="/edit/update/:id" component={UpdateData}/>
   <Route path="/sal" component={Salary}/>

    

   
  </Router>
    </div>
    
  );
}

export default App;
