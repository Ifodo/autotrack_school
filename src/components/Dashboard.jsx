import React from 'react';
import Navbar from './Navbar';

const Dashboard = ({sideBarToggle, setSideBarToggle}) => {
  return (
    <div className={`${sideBarToggle ? " ml-0" : " ml-64 "} w-full`}>
        <Navbar 
        sideBarToggle={sideBarToggle}
        setSideBarToggle={setSideBarToggle}/>
    </div>
  )
}

export default Dashboard