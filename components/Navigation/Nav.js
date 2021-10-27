import Image from 'next/image'
import { IoGrid } from "react-icons/io5";
import { RiShoppingBasketFill } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { CgOptions } from "react-icons/cg";
import { RiMenu4Line } from "react-icons/ri"
import { useEffect, useState } from "react";
import { HiMenuAlt4 } from 'react-icons/hi'

import Link from 'next/link'
import { navbarLinks as link } from '../../NavigationMenu'





const Nav = ({ toggle, clicks }) => {


    return (
        <div>

            <nav className={clicks ? "flex justify-between items-center w-full h-[11.3em] text-block relative  font-mono navbar" : "flex justify-between items-center w-full h-[4.5em] text-block relative  font-mono navbar"}

            >

                <div className="text-white md:ml-10 ml-6">
                    <h2 className="text-2xl">𝖋𝖗𝖊𝖘𝐡𝖑𝖞 𝖗𝖎𝖉𝖊</h2>
                </div>


                <div className="md:flex  mt-[8px] hidden ">


                    <div className="space-x-4 mr-4 orderlist text-white font-serif">
                        {link.map((nav) => {
                            const { id, text, path } = nav;
                            return (

                                <Link href={path}>

                                    <a>{text}</a>
                                </Link>

                            )
                        })}
                    </div>


                </div>

                <div className="md:mr-20 mr-[40px]">
                    <div className="" onClick={toggle}>
                        {
                            clicks ? <HiMenuAlt4 className="text-white text-2xl md:hidden" />

                                : <RiMenu4Line className="text-white text-2xl md:hidden" />
                        }
                    </div>
                    <div className="hidden md:flex ">
                        <h1 className="absolute ml-[12px] text-3sm mt-[18px] text-white">Be A MEMBER</h1>
                        <svg width="128" height="60" viewBox="0 0 103 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 13L1 1L56 1" stroke="url(#paint0_linear)" stroke-opacity="0.8" stroke-linecap="round"></path>
                            <path d="M102 20V26H51" stroke="url(#paint1_linear)" stroke-opacity="0.8" stroke-linecap="round"></path>
                            <defs>
                                <linearGradient id="paint0_linear" x1="1.00001" y1="2.04348" x2="55.2949" y2="2.04348" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white"></stop>
                                    <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                                </linearGradient>

                                <linearGradient id="paint1_linear" x1="102" y1="26" x2="73.4746" y2="26" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white"></stop>
                                    <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                </div>
            </nav>
        </div>
    )
}


export default Nav