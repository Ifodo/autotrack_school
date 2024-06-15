import { createContext, useState } from 'react'

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Student from './components/Student';
import Inbox from './components/Inbox';
import Parent from './components/Parent';
import Settings from './components/Settings';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Sidebar from './components/Sidebar';


export const LoginContext = createContext();

function App() {
  const [sideBarToggle, setSideBarToggle] = useState(false)


  return (
 
    <BrowserRouter>
    <Login />
    
     {/* <div className='flex'>
        <Sidebar sideBarToggle={sideBarToggle} />
        <Dashboard 
          sideBarToggle={sideBarToggle}
          setSideBarToggle={setSideBarToggle} />
      </div> */}
      <div>
         <LoginContext.Provider value={{ sideBarToggle, setSideBarToggle }}>
        <Routes>
          <Route path='/home' element={<Home sideBarToggle={sideBarToggle}
            setSideBarToggle={setSideBarToggle} />}></Route>
          <Route path='/student' element={<Student sideBarToggle={sideBarToggle}
            setSideBarToggle={setSideBarToggle} />}></Route>
          <Route path='/inbox' element={<Inbox sideBarToggle={sideBarToggle}
            setSideBarToggle={setSideBarToggle} />}></Route>
          <Route path='/parent' element={<Parent sideBarToggle={sideBarToggle}
            setSideBarToggle={setSideBarToggle} />}></Route>
          <Route path='/settings' element={<Settings sideBarToggle={sideBarToggle}
            setSideBarToggle={setSideBarToggle} />}></Route>
          {/* <Route path='/dashboard' element={<Dashboard sideBarToggle={sideBarToggle}
            setSideBarToggle={setSideBarToggle} />}></Route> */}
          {/* <Route path='/' element={<Login />}></Route> */}


        </Routes>
        </LoginContext.Provider>

      </div>

    </BrowserRouter>
  )
}

export default App
