import { AccountCircle, Close, Menu } from '@mui/icons-material'
import React, { useEffect, useRef, useState } from 'react'
import SideNavContent from './SideNavContent'
import { motion } from 'framer-motion'

const HeaderBottom = () => {
    const ref = useRef();
    const [sidebar, setSidebar] = useState(false)
    useEffect(()=>{
     document.body.addEventListener("click", (e)=>{
        if(e.target.contains(ref.current)){
            setSidebar(false)
        }
     })
    },[ref,sidebar])
    return (
        <div className='w-full px-4 h-[36px] bg-amazon_light text-white flex items-center'>
            {/* =========== List Item Start here ============== */}
            <ul className='flex items-center gap-2 text-sm  tracking-wide'>
                <li onClick={() => setSidebar(true)} className='headerHover flex items-center gap-1'><Menu /> All</li>
                <li className='headerHover hidden mdl:inline-flex'>Today's Deals</li>
                <li className='headerHover hidden mdl:inline-flex'>Customer Service</li>
                <li className='headerHover hidden mdl:inline-flex'>Gift Cards</li>
                <li className='headerHover hidden mdl:inline-flex'>Registry</li>
                <li className='headerHover hidden mdl:inline-flex'>Sell</li>
            </ul>
            {/* =========== List Item End here ============== */}
            {/* =========== Side Nav Start here ============== */}
            {
                sidebar && (
                    <div className='w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50'>
                        <div className='w-full h-full relative '>
                            <motion.div 
                            ref={ref}
                            initial={{x:-500 , opacity:0}}
                            animate={{x:0 , opacity:1}}
                            transition={{duration:.3}}
                             className='w-[100%] md:w-[350px] h-full bg-white border border-black '>
                                <div className='w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4'>
                                    <AccountCircle/>
                                    <h3 className='font-titleFont font-bold text-lg tracking-wide'>Hello, Sign In
                                    </h3>
                                </div>
                               <SideNavContent
                               title="Digital Content & Devices"
                               one="Amazon Music"
                               two="Kindle E-readers & Books"
                               three="Amazon Appstore"/>

                               <SideNavContent
                               title="Shop by Department"
                               one="Electronics"
                               two="Computers"
                               three="Smart Home"/>

                               <SideNavContent
                               title="Digital Content & Devices"
                               one="Gift Cards"
                               two="Amazon Live"
                               three="International Shopping"/>

                               <SideNavContent
                               title="Help & Settings"
                               one="Your Account"
                               two="Customer Services"
                               three="Contact Us"/>
                               
                            <span onClick={()=>setSidebar(false)} className='cursor-pointer absolute top-0   left-[89%] md:left-[360px] w-10 h-10 md:text-black flex items-center justify-center md:border md:bg-gray-200 hover:bg-rose-500 hover:text-white duration-300 text-white'>
                                <Close/>
                            </span>
                            </motion.div>  
                        </div>
                    </div>
                )
            }
            {/* =========== Side Nav End here ============== */}
        </div>
    )
}

export default HeaderBottom
