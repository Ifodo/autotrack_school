import React from 'react'

const Parent = ({sideBarToggle}) => {
  return (
    <div className={`${sideBarToggle ? " " : " ml-64 "} w-full`}>
        Parent
    </div>
  )
}

export default Parent