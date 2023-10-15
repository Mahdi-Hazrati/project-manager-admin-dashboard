import React, { useState } from 'react'
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io"
import SidebarCollapse from './Sidebar-collapse'
import SidebarFull from './Sidebar-full'
import "./Sidebar.css"

const Sidebar = () => {
  const [isSidebarCollapse, setIsSidebarCollapse] = useState(false)
  function handleCollapse() {
    setIsSidebarCollapse(!isSidebarCollapse)
  }
  return (
    <div className={`sidebar ${isSidebarCollapse && "collapse-menu"}`}>
      <div className="collapse" onClick={handleCollapse}>
        {isSidebarCollapse
          ? <IoIosArrowBack className="icon" />
          : <IoIosArrowForward className="icon" />
        }
      </div>
      {isSidebarCollapse ? <SidebarCollapse /> : <SidebarFull />}
    </div>
  )
}

export default Sidebar