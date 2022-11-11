

import React from 'react'
// import {} form 'react-router-dom'
import { Route, Routes } from "react-router-dom";
import HolidayHome from '../Components/HolidayHomes/HolidayHome';
import Home from '../Components/Home';

// import {Routes}

const AllRoutes = () => {
  return (
    <Routes>
    <Route path='/'><Home/></Route>
    <Route path='/holydayhome'><HolidayHome/></Route>
    <Route path='/holydayhome:id'><HolidayHome/></Route>



    </Routes>
  )
}

export default AllRoutes