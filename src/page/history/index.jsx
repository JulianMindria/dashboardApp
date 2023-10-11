import React from 'react'
import Header from '../../component/homeComp/header'
import Footer from '../../component/homeComp/footer'
import { RxDashboard } from 'react-icons/rx'
import { LiaArrowUpSolid } from 'react-icons/lia'
import { AiOutlinePlus } from 'react-icons/ai'
import up from '../../assets/img/arrow-up.svg'
import down from '../../assets/img/down.svg'
import dummyData from '../../assets/img/graphic.svg'
import { MdPersonOutline, MdLogout } from 'react-icons/md'
import profile from '../../assets/img/Default_Profile.png'
import Sidebar from '../../component/homeComp/sidebar'


function history() {
    return (
        <>
            <Header />
            <div className='bg-gray-200'>
                <div className="p-5 bg-gray-200 max-w-7xl mx-auto">
                    <div className="lg:grid flex flex-col grid-rows-4 grid-flow-col gap-4">
                        <div className="hidden lg:flex row-span-4 w-full bg-white auto-cols-min rounded-lg">
                            <Sidebar />
                        </div>
                        <div class="max-h-7xl row-span-4 col-span-10 bg-white md:h-auto h-screen rounded-lg overflow-auto">
                            <div className='flex justify-between mx-5 mt-5'>
                                <h1 className='text-lg font-bold'>Transaction History</h1>
                                <button className='text-base text-primary hover:text-lg'>view all</button>
                            </div>
                            <div className='text-sm text-gray-400 mx-5 mt-8'>This week</div>
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
                                    <div className='flex gap-x-3 items-center'>
                                        <img className='w-14 h-14' src={profile} alt="" />
                                        <div className='flex flex-col gap-x-2'>
                                            <h2>Samuel Suhi</h2>
                                            <h3 className='text-sm text-gray-400'>Subscription</h3>
                                        </div>
                                    </div>
                                    <h3 className='text-red-500'>-Rp50.000</h3>
                                </div>
                                <div className='text-sm text-gray-400 mx-5 mt-10'>This month</div>
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

export default history