import React, { useState } from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { logo } from '../../assests/index'
import { ArrowDropDownOutlined, SearchOutlined, ShoppingCart } from '@mui/icons-material';
import { allItems } from '../../constants';
import HeaderBottom from './HeaderBottom';

const Header = () => {
    const [showAll, setShowAll] = useState(false);
    
    return (
        <div className='w-full sticky top-0 z-50'>
            <div className='w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-4 ' >
                {/* image start here  */}
                <div className='headerHover'>
                    <img className='w-24 mt-2' src={logo} alt="logo" />
                </div>
                {/* image end here  */}


                {/* deliver start here  */}
                <div className='headerHover'>
                    <LocationOnOutlinedIcon />
                    <p className='text-xs text-lightText font-light flex flex-col'>
                        Deliver to <span className='text-sm font-semibold -mt-1 text-whiteText'>Pakistan</span>
                    </p>
                </div>
                {/* deliver end here  */}


                {/* search start here  */}
                <div className='h-10 flex flex-grow rounded-md relative'>
                    <span onClick={() => setShowAll(!showAll)} className='w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md'>
                        All <span></span><ArrowDropDownOutlined />
                    </span>
                    {
                        showAll && (
                            <div>
                                <ul className='absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white text-black p-2 flex-col gap-1 z-50 border-[1px] border-amazon_blue'>

                                    {/* <li className='text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-300'>
                                        All Departments
                                    </li> */}
                                    {
                                        allItems.map((item) => {
                                            return (
                                                <div key={item._id}>
                                                    <li className='py-1 text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-300'>

                                                        {item.title}
                                                    </li>
                                                </div>
                                            )
                                        })
                                    }

                                </ul>
                            </div>
                        )
                    }
                    <input
                        className='h-full text-base text-amazon_blue flex-grow outline-none border-none px-2'
                        type="text"
                    />
                    <span className='w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md '>
                        <SearchOutlined />
                    </span>
                </div>
                {/* search end here  */}


                {/* signin start here  */}
                    <div className='flex flex-col items-start justify-center headerHover'>
                        <p className='text-xs text-lightText font-light'>hello, sign in</p>
                        <p className='text-sm font-semibold -mt-1 text-whiteText'>Accounts & Lists <span><ArrowDropDownOutlined/></span></p>
                    </div>
                {/* signin end here  */}


                {/* orders start here  */}
                    <div className='flex flex-col items-start justify-center headerHover'>
                        <p className='text-xs text-lightText font-light'>Returns</p>
                        <p className='text-sm font-semibold -mt-1 text-whiteText'>& Orders</p>
                    </div>
                {/* orders end here  */}


                {/* cart start here  */}
                <div className='flex items-start justify-center headerHover relative'>
                    <ShoppingCart/>
                    <p className='text-xs font-semibold mt-3 text-whiteText'>Cart <span className='absolute -top-1 left-6 font-semibold p-1 h-4 bg-[#f3a874] text-amazon_blue rounded-full flex items-center justify-center'>0</span></p>
                </div>
                {/* cart end here  */}
            </div>


            {/* bottom header  */}
               <HeaderBottom/>

        </div>


    )
}

export default Header
