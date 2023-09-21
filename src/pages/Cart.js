import { CheckCircle } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreamentQty, deleteItem, increamentQty, resetCart } from '../redux/AmazonSlice'

function Cart() {
    const dispatch = useDispatch()
    const products = useSelector((state)=>state.amazoneReducer.products)
    const [totalPrice, setTotalPrice] = useState('')
    useEffect(()=>{
        let Total = 0;
        products.map((item)=>{
            Total += item.price * item.quantity;
            return setTotalPrice(Total.toFixed(2))
        })
    },[products])
    return (
        <div className='w-full bg-gray-100 p-4 '>
            <div className='container mx-auto h-auto grid grid-cols-5 gap-8 '>
                <div className='w-full h-full bg-white px-4 col-span-4'>
                    <div className='font-titleFont flex items-center justify-between border-b-[1px] border-b-gray-400 py-3'>
                        <h2 className='text-3xl font-medium'>Shopping Cart</h2>
                        <h2 className='text-xl font-normal'>SubTotal</h2>
                    </div>

                    {/* products start here  */}

                    <div>
                        {
                            products.map((item,index)=>(
                                <div key={index} className='w-full border-b-[1px] border-b-gray-300 py-4 flex items-center gap-6'>
                                    <div className='w-56'>
                                    <img className='w-full h-44' src={item.image} alt="Product img" />
                                    </div>
                                    <div className='w-full'>
                                        <h2 className='font-semibold text-lg'>{item.title}</h2>
                                        <p className='pr-10 text-gray-600 text-sm '>{item.description}</p>
                                        <p className='text-base'>Price : <span className='font-semibold'>${item.price}</span></p>
                                        <div className='bg-[#F0F2F2] flex justify-center items-center gap-1 w-24 py-1 text-center drop-shadow-lg rounded-md'>
                                            <p>Qty:</p>
                                            <p onClick={()=>dispatch(decreamentQty(item.id))} className='cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-300 active:bg-gray-400 duration-300 '>-</p>
                                            <p>{item.quantity}</p>
                                            <p onClick={()=>dispatch(increamentQty(item.id))} className='cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-300 active:bg-gray-400 duration-300 '>+</p>
                                        </div>
                                        <button onClick={()=>dispatch(deleteItem(item.id))} className='bg-red-500 w-36 py-1 rounded-lg text-white mt-2 hover:bg-red-600 active:bg-red-800 duration-300'>Delete Item</button>
                                    </div>
                                    <div className='w-12 mr-3'>
                                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                        <div className='w-full py-2'>
                            <button onClick={()=>dispatch(resetCart())} className='bg-red-500 w-36 py-1 rounded-lg text-white mt-2 hover:bg-red-600 active:bg-red-800 duration-300'>Clear Cart</button>
                        </div>

                </div>
                <div className='w-full h-52 bg-white col-span-1 flex flex-col items-center p-4 justify-center'>
                    <div>
                        <p className='flex gap-2 items-start text-sm'><span className='bg-white text-green-500 rounded-full'><CheckCircle/></span> Your order for Free shipping choose this option at checkout. See details... </p>
                    </div>
                    <div>
                        <p className='font-semibold px-10 py-1 flex items-center justify-between'>Total:<span className='text-lg font-bold translate-x-1'>{"$"+totalPrice}</span></p>
                    </div>
                    <button  className='w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput'>Proceed to Pay</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
