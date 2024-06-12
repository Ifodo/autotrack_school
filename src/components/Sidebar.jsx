import React from 'react';
import {FaCog, FaHome, FaPoll, FaRegEnvelope} from 'react-icons/fa';
import { RiParentFill } from "react-icons/ri";
import { PiStudentFill } from "react-icons/pi";
import {Link} from 'react-router-dom';

const Sidebar = ({sideBarToggle}) => {
  return (
    <div className={` ${sideBarToggle ? " hidden " : " block "} w-64 bg-gray-800 fixed h-full px-4 py-2`}>
      <div className='my-2 mb-4'>
        <h1 className='text-2x text-white font-bold'>Admin Dashboard</h1>
      </div>
      <hr />
      <ul className='mt-3 text-white font-bold'>
        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
            <Link to="/home" className='px-3'>
                <FaHome className='inline-block w-6 h-6 mr-2 -mt-2'></FaHome>
                Home
            </Link>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
            <Link to="/parent" className='px-3'>
                <RiParentFill className='inline-block w-6 h-6 mr-2 -mt-2'></RiParentFill>
                Parent
            </Link>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
            <Link to="/student" className='px-3'>
                <PiStudentFill className='inline-block w-6 h-6 mr-2 -mt-2'></PiStudentFill>
                Student
            </Link>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
            <Link to="/inbox" className='px-3'>
                <FaRegEnvelope className='inline-block w-6 h-6 mr-2 -mt-2'></FaRegEnvelope>
                Inbox
            </Link>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
            <Link to="/settings" className='px-3'>
                <FaCog className='inline-block w-6 h-6 mr-2 -mt-2'></FaCog>
                Settigs
            </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar