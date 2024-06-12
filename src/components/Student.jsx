import React from 'react'

const Student = ({ sideBarToggle }) => {
  return (
    <div className={`${sideBarToggle ? " " : " ml-64 "} w-full`}>
      Student
    </div>
  )
}

export default Student