import { useState, useEffect } from 'react'
import React from 'react'
import { useKeenSlider } from "keen-slider/react"
import Renderinfo from './Renderinfo'
import { Router, useRouter } from 'next/router'
import axios from 'axios'







function RenderSearch({ product }) {

    const router = useRouter()

    const [pause, setPause] = React.useState(false)
    const timer = React.useRef()
    const [sliderRef, slider] = useKeenSlider({
        loop: true,
        duration: 1000,
        spacing: 20,
        slidesPerView: 1,
        centered: true,
        loop: true,
        mode: "snap",
        breakpoints: {
            "(min-width: 768px)": {
                slidesPerView: 2,
                mode: "free-snap",
            },
            "(min-width: 1200px)": {
                slidesPerView: 3,
                mode: "free-snap",
            },
        },
        dragStart: () => {
            setPause(true)
        },
        dragEnd: () => {
            setPause(false)
        },
    })

    React.useEffect(() => {
        sliderRef.current.addEventListener("mouseover", () => {
            setPause(true)
        })
        sliderRef.current.addEventListener("mouseout", () => {
            setPause(false)
        })
    }, [sliderRef])

    React.useEffect(() => {
        timer.current = setInterval(() => {
            if (!pause && slider) {
                slider.next()

            }
        }, 2000)
        return () => {
            clearInterval(timer.current)
        }
    }, [pause, slider])




    return (
        <>
            {

                <div className="mt-10 mx-6 md:flex md:space-x-4 keen-slider slider-cont flex overflow-x-hidden " ref={sliderRef} >

                    {
                        product.map((item) =>

                            <>
                                <div className="border-2 keen-slider__slide slide-container"
                                    style={{
                                        borderTopRightRadius: '10px',
                                        borderBottomRightRadius: '10px',
                                        borderTopLeftRadius: '10px',
                                        borderBottomLeftRadius: '10px',
                                        outline: 'none',
                                    }}
                                    onClick={() => {
                                        router.push('/item_info')
                                    }}>

                                    <div className="flex justify-center" style={{ zIndex: "99" }}>
                                        <img src={'https://moxieus.co/api/storage/app/public/' + item.pic} className="h-[12em] w-[20em]" style={{
                                            borderTopRightRadius: '10px',
                                            borderBottomRightRadius: '10px',
                                            borderTopLeftRadius: '10px',
                                            borderBottomLeftRadius: '10px',
                                            outline: 'none',
                                            zIndex: '99'
                                        }} />
                                    </div>
                                    <div className="bg-black  mt-[-20px] z-0 h-20" style={{
                                        borderBottomRightRadius: '10px',
                                        borderBottomLeftRadius: '10px',
                                        outline: 'none',

                                    }} >
                                        <div className="h-6">

                                        </div>

                                        <div className=" flex justify-center">
                                            <span className=" font-serif text-2xl text-[#ea455d] "> <h2 className="text-white">{item.name}</h2>  <h2 className=" text-sm ">{item.yrs_production}</h2> </span> <br />
                                        </div>
                                        <div className="flex justify-center mt-[-15em] absolute bg-yellow-500"
                                            style={{
                                                borderTopRightRadius: '10px',
                                                borderBottomRightRadius: '10px',
                                                borderTopLeftRadius: '10px',
                                                borderBottomLeftRadius: '10px',
                                                outline: 'none',
                                                zIndex: '99'
                                            }}
                                        >
                                            <p className=" text-2lg text-white ">₦{item.amount}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }

                </div>}

        </>
    )
}


// export const getServerSideProps = async () => {
//     const res = await fetch(`http://localhost:8000/products`);
//     const data = await res.json();

//     return { props: { data } };
// }



export default RenderSearch


