import React, { Children } from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import "./Layout.css"

const Layout = ({children}) => {
  return (
    <div className='layout'>
      <Sidebar />
      {children}
    </div>
  )
}

export default Layout