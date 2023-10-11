import React from 'react'
import profile from '../../assets/img/Default_Profile.png'
import up from '../../assets/img/arrow-up.svg'
import down from '../../assets/img/down.svg'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { GiHamburgerMenu } from 'react-icons/gi'

function header() {
    return (
        <header className='bg-gray-200'>
            <div className='rounded-b-3xl border bg-white w-full h-auto'>
                <div className='flex justify-between max-w-7xl mx-auto p-5 items-center'>
                    <div className='lg:flex hidden'>
                        <h1 className='font-bold text-3xl text-primary'>Zwallet</h1>
                    </div>
                    <div className='flex lg:mx-0 justify-between gap-x-4 items-center'>
                        <img src={profile} alt="#" className='w-14 h-14 rounded-lg' />
                        <div className='flex flex-col text-center items-center'>
                            <h2 className='font-bold text-lg'>Robert Chandler</h2>
                            <h2 className='text-xs text-gray-600'>+62 8139 3877 7946</h2>
                        </div>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn m-1"><IoIosNotificationsOutline className='w-7 h-7' /></label>
                            <ul tabIndex={0} className="dropdown-content flex flex-col gap-y-4 z-[1] menu py-6 px-6 mt-8 shadow bg-base-100 rounded-box w-72 items-center">
                                <li className='flex'>
                                    <div>Today</div>
                                    <div className='flex border shadow flex mt-5'>
                                        <img src={down} alt="#" />
                                        <div>
                                            <h3 className='text-sm text-gray-600'>Transfered from Joshua Lee</h3>
                                            <h3 className='text-lg font-bold'>Rp220.000</h3>
                                        </div>
                                    </div>
                                    <div className='flex border shadow flex mt-5'>
                                        <img src={up} alt="#" />
                                        <div>
                                            <h3 className='text-sm text-gray-600'>Transfered from Joshua Lee</h3>
                                            <h3 className='text-lg font-bold'>Rp220.000</h3>
                                        </div>
                                    </div>
                                </li>
                                <li className='flex'>
                                    <div>This weeks</div>
                                    <div className='border shadow flex mt-5'>
                                        <img src={down} alt="#" />
                                        <div>
                                            <h3 className='text-sm text-gray-600'>Transfered from Joshua Lee</h3>
                                            <h3 className='text-lg font-bold'>Rp220.000</h3>
                                        </div>
                                    </div>
                                    <div className='flex border shadow flex mt-5'>
                                        <img src={up} alt="#" />
                                        <div>
                                            <h3 className='text-sm text-gray-600'>Transfered from Joshua Lee</h3>
                                            <h3 className='text-lg font-bold'>Rp220.000</h3>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className="flex lg:hidden dropdown dropdown-bottom dropdown-end">
                        <label tabIndex={0} className="btn m-1"><GiHamburgerMenu className='lg:hidden flex w-6 h-6' /></label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Dashboad</a></li>
                            <li><a>Profile</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default header