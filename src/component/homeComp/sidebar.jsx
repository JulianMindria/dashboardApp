import React from 'react'
import { RxDashboard } from 'react-icons/rx'
import { LiaArrowUpSolid } from 'react-icons/lia'
import { MdPersonOutline, MdLogout } from 'react-icons/md'
import { AiOutlinePlus } from 'react-icons/ai'

import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../store/reducer/user'
import { useDispatch } from "react-redux";

function Sidebar() {
  const navigates = useNavigate();
  const dispatch = useDispatch()

  const btnlogout = () => {
    dispatch(logout())
    navigates(`/sign-in`)
  }
  return (
    <div className="row-span-4 bg-white auto-cols-min rounded-lg">
      <div className='flex flex-col gap-y-10 mt-10 mx-10 my-8'>
        <Link to="#" className='flex items-center text-lg gap-x-3 hover:text-primary hover:font-bold '> <RxDashboard /> Dashboard</Link>
        <Link to="#" className='flex items-center text-lg gap-x-3 hover:text-primary hover:font-bold'><LiaArrowUpSolid /> Transfer</Link>
        <Link to="#" className='flex items-center text-lg gap-x-3 hover:text-primary hover:font-bold'><AiOutlinePlus /> Top Up</Link>
        <Link to="#" className='flex items-center text-lg gap-x-3 hover:text-primary hover:font-bold'><MdPersonOutline /> Profile</Link>
        <div className='mt-96'>
          <button onClick={btnlogout} className='text-lg hover:text-primary flex items-center gap-x-3 hover:font-bold'><MdLogout /> Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar