import React, { useState } from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { logo } from '../../assests/index'
import { ArrowDropDownOutlined, Logout, SearchOutlined, ShoppingCart } from '@mui/icons-material';
import { allItems } from '../../constants';
import HeaderBottom from './HeaderBottom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth, signOut } from 'firebase/auth';
import { userSignOut } from '../../redux/AmazonSlice';


const Header = () => {
    const dispatch = useDispatch()
    const auth = getAuth()
    const [showAll, setShowAll] = useState(false);
    const products = useSelector((state) => state.amazon.products)
    const userInfo = useSelector((state) => state.amazon.userInfo)
    // console.log(userInfo);
    // console.log(products);
    const handleLogout =()=>{
        signOut(auth)
        .then(()=>{
            dispatch(userSignOut())
            console.log("sign out successfully");
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    return (
        <div className='w-full sticky top-0 z-50'>
            <div className='w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-4 ' >
                {/* image start here  */}
                <Link to={'/'}>
                    <div className='headerHover'>
                        <img className='w-24 mt-2' src={logo} alt="logo" />
                    </div>
                </Link>
                {/* image end here  */}


                {/* deliver start here  */}
                <div className='headerHover hidden mdl:inline-flex'>
                    <LocationOnOutlinedIcon />
                    <p className='text-xs text-lightText font-light flex flex-col'>
                        Deliver to <span className='text-sm font-semibold -mt-1 text-whiteText'>Pakistan</span>
                    </p>
                </div>
                {/* deliver end here  */}


                {/* search start here  */}
                <div className='h-10 hidden lgl:flex flex-grow rounded-md relative'>
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
                <Link to={'/signin'}>
                    <div className='flex flex-col items-start justify-center headerHover'>
                        {
                            userInfo ?
                                <p className='mdl:text-xs text-sm text-white mdl:text-lightText font-medium'>
                                    {userInfo.userName}
                                </p>
                                :
                                <p className='mdl:text-xs text-sm text-white mdl:text-lightText font-light'>
                                    hello, sign in
                                </p>
                        }

                        <p className='text-sm font-semibold -mt-1 text-whiteText hidden mdl:inline-flex'>Accounts & Lists <span><ArrowDropDownOutlined /></span></p>
                    </div>
                </Link>
                {/* signin end here  */}


                {/* orders start here  */}
                <div className='hidden mdl:flex flex-col items-start justify-center headerHover'>
                    <p className='text-xs text-lightText font-light'>Returns</p>
                    <p className='text-sm font-semibold -mt-1 text-whiteText'>& Orders</p>
                </div>
                {/* orders end here  */}


                {/* cart start here  */}
                <Link to={'/cart'}>
                    <div className='flex items-start justify-center headerHover relative'>
                        <ShoppingCart />
                        <p className='text-xs font-semibold mt-3 text-whiteText'>Cart <span className='absolute -top-1 left-6 font-semibold p-1 h-4 bg-[#f3a874] text-amazon_blue rounded-full flex items-center justify-center'>
                            {products.length > 0 ? products.length : 0}
                        </span></p>
                    </div>
                </Link>
                {/* cart end here  */}
                {
                    userInfo && (
                        <div onClick={handleLogout} className='flex flex-col justify-center items-center headerHover relative'>
                            <Logout/>
                            <p className='hidden mdl:inline-flex text-xs font-semibold text-white'>
                                Log out
                            </p>
                        </div>
                    )
                }
            </div>


            {/* bottom header  */}
            <HeaderBottom />

        </div>


    )
}

export default Header
