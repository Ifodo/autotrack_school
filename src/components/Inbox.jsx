import React from 'react'

const Inbox = ({sideBarToggle}) => {
  return (
    <div className={`${sideBarToggle ? " " : " ml-64 "} w-full`}>Inbox</div>
  )
}

export default Inbox