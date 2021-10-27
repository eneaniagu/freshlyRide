
import React from 'react'
import { RiArrowLeftCircleLine } from 'react-icons/ri'
import { RiArrowRightCircleLine } from 'react-icons/ri'
import { GiSelfLove } from "react-icons/gi"
import { useEffect, useState } from "react";

import { AiFillCar } from 'react-icons/ai'
import { AiOutlineSafety } from 'react-icons/ai'
import { RiPinDistanceFill } from 'react-icons/ri'
import { FaLocationArrow } from 'react-icons/fa'
import { RiUserLocationFill } from 'react-icons/ri'

import Carlist from '../components/FrontPages/Carlist'
import axois from 'axios'
import axios from 'axios';


export const getStaticProps = async (ctx) => {
    const res = await fetch('http://localhost:8000/fetchproductbyid');
    const data = await res.json();
    return {
        props: {
            product: data
        }
    }
}

function item_info(product) {


    console.log(product)
    // const [current, setCurrent] = useState(0)

    // const length = imageData.length


    // const nextSlide = () => {
    //     setCurrent(current === length - 1 ? 0 : current + 1)
    // }

    // const prevSlide = () => {
    //     setCurrent(current === 0 ? length - 1 : current - 1)
    // }


    return (
        <div className=" routing ">
            <div className="mx-2 md:mx-6 md:flex space-x-4">
                <div className="shadow-lg">
                    <h2 className="ml-2 text-xl text-white mt-6 c-name ">FORD VD450</h2>
                    <h2 className=" ml-6 text-xl text-white c-price">$50M</h2>
                    <img src="/images/cars/1.png" className="w-[30em] h-[20em]" />
                    <div className="flex absolute ml-20 md:ml-40 mt-[-10px] md:space-x-[30px] space-x-[40px]">
                        <GiSelfLove className="text-2xl text-white" />
                        <div className="space-x-2 flex">
                            <RiArrowLeftCircleLine className="text-2xl text-white" />
                            <RiArrowRightCircleLine className="text-2xl text-white" />
                        </div>
                        <button className="buy-btn ">Buy</button>
                    </div>

                </div>
                <div className="text-white mt-10 ">
                    <ul className="space-y-2">
                        <li className="list-d"><RiUserLocationFill className="list-icons" />Commander</li>
                        <li className="list-d"><AiFillCar className="list-icons" />Commander</li>
                        <li className=" list-d "><FaLocationArrow className="list-icons" />Commander</li>
                        <li className="list-d"><RiPinDistanceFill className="list-icons" />Doeoeeo</li>
                        <li className="list-d"><AiOutlineSafety className="list-icons" />dmmfmmfm</li>
                    </ul>

                    <p>
                        Every car saled here is well registered and i have it original crediential be caution please
                    </p>

                </div>
            </div>

            <div>
                <h2 className="text-white">something new </h2>
            </div>

            <div>
                <Carlist />
            </div>





        </div>
    )
}

export default item_info
