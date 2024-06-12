import React from 'react'

const Settings = ({sideBarToggle}) => {
  return (
    <div className={`${sideBarToggle ? " " : " ml-64 "} w-full`}>
        Settings

    </div>
  )
}

export default Settings