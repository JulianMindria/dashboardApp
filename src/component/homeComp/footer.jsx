import React from 'react'

function footer() {
  return (
    <>
        <footer className='bg-primary'>
            <div className='max-w-7xl mx-auto px-5'>
                <div className='flex md:flex-row flex-col py-5 justify-between h-20 mx-auto items-center'>
                    <div>
                        <p className='text-white text-base'>2020 Zwallet. All right reserved.</p>
                    </div>
                    <div className='flex gap-x-5'>
                        <p className='text-white text-base'>+62 5637 8882 9901</p>
                        <p className='text-white text-base'>contact@zwallet.com</p>
                    </div> 
                </div>
            </div>
        </footer>
    </>
  )
}

export default footer