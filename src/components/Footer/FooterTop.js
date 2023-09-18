import React from 'react'
import { Link } from 'react-router-dom'

const FooterTop = () => {
    return (
        <div className='w-full bg-white py-6'>
            <div className='w-full botder-t-[1px] border-b-[1px] py-8'>
                <div className='w-64 mx-auto text-center flex flex-col gap-1'>
                    <p className='text-sm'>See Personalised Recommendations</p>
                    <Link to={'/signin'}>
                    <button className='w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b boder border-zinc-400 active:border-yellow-800 active:shadow-amazonInput'>Sign In</button>
                    </Link>
                    <p className='text-xs mt-1 '>New Customer ? <span className='text-blue-600 ml-1 cursor-pointer'><Link to={'/registration'}> Start here </Link></span></p>
                </div>
            </div>
        </div>
    )
}

export default FooterTop
