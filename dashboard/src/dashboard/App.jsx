import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router,Route,Routes} from "react-Router-dom";
import Layout from './Layout'
import Navbar from './Navbar'
import Dashboard from './Dashboard'
import Products from './Products'
import Employees from './Employees'
import Customers from './Customers'
import LogOut from './LogOut'
import Orders from './Orders';
import Market from './Market';
import Finance from './Finance';

function App() {
  return (
    
   <div className='App'>
    <div className='AppGlass'> 
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' Component={Dashboard}/>
      <Route path='/Products' Component={Products}/>
      <Route path='/Employees' Component={Employees}/>
      <Route path='/Customers' Component={Customers}/>
      <Route path='/LogOut' Component={LogOut}/>
      <Route path='/Orders' Component={Orders}/>
      <Route path='/Market' Component={Market}/>
      <Route path='/Finance' Component={Finance}/>
    </Routes>
    </Router>
    </div>
   </div>
  )
}

export default App
