import React from 'react'
import { MdWorkHistory } from "react-icons/md"
import {BiSolidReport} from "react-icons/bi"
import {FaBusinessTime, FaUsers} from "react-icons/fa"
import {MdSpaceDashboard} from "react-icons/md"
import { Link } from "react-router-dom"

const SidebarFull = () => {
  return (
    <>
      <div className="top">
        سلام مهدی حضرتی! - مدیریت
      </div>
      {/* Menu Items */}
      <ul className="menu">
        <Link to={"/dashboard"} className="Link">
          <li className="menu-item">
            <MdSpaceDashboard className="icon" />
            <span className="title">داشبورد</span>
          </li>
        </Link>
        <Link to={"/projects"} className='Link'>
          <li className="menu-item">
            <MdWorkHistory className="icon" />
            <span className="title">پروژه</span>
          </li>
        </Link>
        <Link to={"/reports"} className='Link'>
          <li className="menu-item">
            <BiSolidReport className="icon" />
            <span className="title">گزارش </span>
          </li>
        </Link>
        <Link to={"/timelog"} className='Link'>
        <li className="menu-item">
          <FaBusinessTime className="icon" />
          <span className="title">تایم لاگ</span>
        </li>
        </Link>
        <Link to={"/employees"} className='Link'>

        <li className="menu-item">
          <FaUsers className="icon" />
          <span className="title">کارمندان</span>
        </li>
        </Link>
      </ul>
      {/* ----------------------- */}
      <div className="bottom">
        <div className="version">ورژن 1.0</div>
        <div className="logout">خروج از حساب کاربری</div>
      </div>
    </>
  )
}

export default SidebarFull