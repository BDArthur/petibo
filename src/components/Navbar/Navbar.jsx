import React from 'react'
import logoImg from "../../assets/Logo.png"
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = ({ sidebar, setSidebar }) => {
    return (
        <div className='absolute top-0 left-0 w-full py-2 z-20'>
            <div className='container'>
                <div className='flex justify-between items-center'>
                    {/* logo section  */}
                    <div className='flex items-center space-x-1'>
                    <img src={logoImg} alt="Logo" className='w-12 md:w-16'/>
                    <h1 className='text-xl font-bold uppercase'>petibo</h1>
                    </div>
                    {/* NavLinks section  */}
                    <ul className='md:flex space-x-8 hidden font-bold'>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                        <li>
                            <a href="#">Where to find</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>

                    <div onClick={() => setSidebar(!sidebar)}>
                    <GiHamburgerMenu className='text-3xl cursor-pointer
                    md:hidden' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar