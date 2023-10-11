import React from 'react'
import Header from '../../component/homeComp/header'
import Footer from '../../component/homeComp/footer'
import { LiaArrowUpSolid } from 'react-icons/lia'
import { AiOutlinePlus } from 'react-icons/ai'
import up from '../../assets/img/arrow-up.svg'
import down from '../../assets/img/down.svg'
import profile from '../../assets/img/Default_Profile.png'
import Sidebar from '../../component/homeComp/sidebar'
import { Link } from 'react-router-dom'

import authChecked from '../../helper/authCheck'


function home() {
    return (
        <>
            <Header />
            <div className='bg-gray-200'>
                <div className="p-5 bg-gray-200 max-w-7xl mx-auto">
                    <div className="lg:grid flex flex-col grid-rows-4 grid-flow-col gap-4">
                        <div className="hidden lg:flex row-span-4 bg-white auto-cols-min rounded-lg">
                            <Sidebar />
                        </div>
                        <div className="col-span-2 bg-primary h-40 flex items-center rounded-lg justify-between px-10 py-5">
                            <div className='flex flex-col gap-y-3'>
                                <h2 className='text-lg text-gray-300'>Balance</h2>
                                <h1 className='text-4xl text-white font-bold'>Rp120.000</h1>
                                <h3 className='text-lg text-gray-300'>+62 8139 3877 7946</h3>
                            </div>
                            <div className='lg:flex hidden flex-col gap-y-3'>
                                <button className='flex text-white border items-center gap-x-3 w-28 justify-center hover:bg-white hover:text-primary rounded-lg h-12 mx-auto'><LiaArrowUpSolid /> Transfer</button>
                                <button className='flex text-white border items-center gap-x-3 w-28 justify-center hover:bg-white hover:text-primary rounded-lg h-12 mx-auto'><AiOutlinePlus /> Top Up</button>
                            </div>
                        </div>
                        <div className='lg:hidden mx-auto flex gap-x-5'>
                            <button className='flex text-white bg-gray-400 border items-center gap-x-3 w-28 justify-center hover:bg-white hover:text-primary rounded-lg h-12 mx-auto'><LiaArrowUpSolid /> Transfer</button>
                            <button className='flex text-white bg-gray-400 border items-center gap-x-3 w-28 justify-center hover:bg-white hover:text-primary rounded-lg h-12 mx-auto'><AiOutlinePlus /> Top Up</button>
                        </div>
                        <div className="lg:flex flex-col hidden row-span-3 bg-white rounded-lg">
                            <div className='flex justify-between p-4 mt-5 mx-5'>
                                <div>
                                    <img src={down} alt="" />
                                    <h2>Income</h2>
                                    <h2>Rp2.120.000</h2>
                                </div>
                                <div>
                                    <img src={up} alt="" />
                                    <h2>Expense</h2>
                                    <h2>Rp1.560.000</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row-span-3 bg-white rounded-lg overflow-auto">
                            <div className='flex justify-between mx-5 mt-5'>
                                <h1 className='text-lg font-bold'>Transaction History</h1>
                                <Link to="/history" className='text-base text-primary hover:text-lg'>view all</Link>
                            </div>
                            <div className='flex flex-col gap-y-5 mt-5'>
                                <div className='flex justify-between mx-5 mt-5'>
                                    <div className='flex gap-x-3 items-center'>
                                        <img className='w-14 h-14' src={profile} alt="" />
                                        <div className='flex flex-col gap-x-2'>
                                            <h2>Samuel Suhi</h2>
                                            <h3 className='text-sm text-gray-400'>Transfer</h3>
                                        </div>
                                    </div>
                                    <h3 className='text-green-500'>+Rp50.000</h3>
                                </div>
                                <div className='flex justify-between mx-5 mt-5'>
                                    <div className='flex gap-x-3 items-cente'>
                                        <img className='w-14 h-14' src={profile} alt="" />
                                        <div className='flex flex-col gap-x-2'>
                                            <h2>Samuel Suhi</h2>
                                            <h3 className='text-sm text-gray-400'>Subscription</h3>
                                        </div>
                                    </div>
                                    <h3 className='text-red-500'>-Rp50.000</h3>
                                </div>
                                <div className='flex justify-between mx-5 mt-5'>
                                    <div className='flex gap-x-3 items-center'>
                                        <img className='w-14 h-14' src={profile} alt="" />
                                        <div className='flex flex-col gap-x-2'>
                                            <h2>Samuel Suhi</h2>
                                            <h3 className='text-sm text-gray-400'>Transfer</h3>
                                        </div>
                                    </div>
                                    <h3 className='text-green-500'>+Rp50.000</h3>
                                </div>
                                <div className='flex justify-between mx-5 mt-5'>
                                    <div className='flex gap-x-3 items-center'>
                                        <img className='w-14 h-14' src={profile} alt="" />
                                        <div className='flex flex-col gap-x-2'>
                                            <h2>Samuel Suhi</h2>
                                            <h3 className='text-sm text-gray-400'>Transfer</h3>
                                        </div>
                                    </div>
                                    <h3 className='text-green-500'>+Rp50.000</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default authChecked(true, home, ['user'])