import React, { useState } from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { logo } from '../../assests/index'
import { ArrowDropDownOutlined, SearchOutlined } from '@mui/icons-material';

const Header = () => {
    const [showAll, setShowAll] = useState(false);
    const allItems = [
        {
            _id: 100, title: "All Departments",
        },
        {
            _id: 101, title: "Apparel and Fashion",
        },
        {
            _id: 102, title: "Electronics",
        },
        {
            _id: 103, title: "Home and Furniture",
        },
        {
            _id: 104, title: "Beauty and Personal Care",
        },
        {
            _id: 105, title: "Health and Wellness",
        },
        {
            _id: 106, title: "Toys and Games",
        },
        {
            _id: 107, title: "Books, Movies, and Music",
        },
        {
            _id: 108, title: "Sports and Outdoors",
        },
       
        {
            _id: 109, title: "Jewelry and Watches",
        },
       
        {
            _id: 110, title: "Automotive",
        },
       
        {
            _id: 111, title: "Pets",
        },
        {
            _id: 112, title: "Office Supplies",
        },
        {
            _id: 113, title: "Food and Beverages",
        },
        {
            _id: 114, title: "Art and Craft Supplies",
        },
        {
            _id: 115, title: "Baby and Kids",
        },
        {
            _id: 116, title: "Computers",
        },
        {
            _id: 117, title: "Laptops",
        },
       
        {
            _id: 118, title: "Mobiles",
        },
       
    ]
    return (
        <div>
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
                                                <div key={item.id}>
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

                {/* signin end here  */}


                {/* orders start here  */}

                {/* orders end here  */}


                {/* cart start here  */}
                {/* cart end here  */}
            </div>
        </div>
    )
}

export default Header
