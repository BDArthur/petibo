import React from 'react'
import BannerImg from "../../assets/Pet2.png"
const Banner = () => {
    return ( 
        <div className='container my-14 md:px-12 md:py-6 bg-primaryDark'>
            <div className='grid grid-cols-1 sm:grid-cols-2 relative min-h-[650px]
            bg-gradient-to-r from-primary to-secondary w-full rounded-xl shadow-md'>
                <div>
                    <img src={BannerImg} alt="" className='relative z-10 md:ml-40 left-20 md:left-0 w-[400px] img-shadow3' />
                </div>
                <div className='flex md:justify-end justify-center text-center items-center md:mr-20 pb-4'>
                    <div className='space-y-2'>
                        <h1 className='text-4xl font-extrabold'>Veterinary Team</h1>
                        <h2 className='text-xl font-semibold'>Always Be On Your Side</h2>
                        <button className='primary-btn bg-primaryDark hover:bg-purple-900 hover:text-white font-semibold'>Reserve Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner