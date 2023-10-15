import React from 'react'
import { MdWorkHistory } from "react-icons/md"
import {BiSolidReport} from "react-icons/bi"
import {FaBusinessTime, FaUsers} from "react-icons/fa"
import {MdSpaceDashboard} from "react-icons/md"
import { Link } from "react-router-dom"

const SidebarCollapse = () => {
  return (
    <>
      <div className="top">
        مدیریت
      </div>
      {/* Menu Items */}
      <ul className="menu">
        <Link to={"/dashboard"} className="Link">
          <li className="menu-item">
            <MdSpaceDashboard className="icon" />
          </li>
        </Link>
        <Link to={"/projects"} className='Link'>
          <li className="menu-item">
            <MdWorkHistory className="icon" />
          </li>
        </Link>
        <Link to={"/reports"} className='Link'>
          <li className="menu-item">
            <BiSolidReport className="icon" />
          </li>
        </Link>
        <Link to={"/timelog"} className='Link'>
        <li className="menu-item">
          <FaBusinessTime className="icon" />
        </li>
        </Link>
        <Link to={"/employees"} className='Link'>

        <li className="menu-item">
          <FaUsers className="icon" />
        </li>
        </Link>
      </ul>
      {/* ----------------------- */}
      <div className="bottom">
        <div className="logout">
          خروج
        </div>
      </div>
    </>
  )
}

export default SidebarCollapse