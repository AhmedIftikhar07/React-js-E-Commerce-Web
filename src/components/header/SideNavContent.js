import { KeyboardArrowRight } from '@mui/icons-material'
import React from 'react'

const SideNavContent = ({title, one, two, three }) => {
    return (
        <div>
            <div className='py-3 border-b-[1px] border-b-gray-300'>
                <h3 className='text-lg font-titleFont font-semibold mb-1 px-6'>{title}
                </h3>
                <ul className='text-sm'>
                    <li className='flex items-center justify-between hover:bg-zinc-100 px-6 py-2 cursor-pointer duration-200'>{one}<span><KeyboardArrowRight /></span>
                    </li>
                    <li className='flex items-center justify-between hover:bg-zinc-100 px-6 py-2 cursor-pointer duration-200'>{two}<span><KeyboardArrowRight /></span>
                    </li>
                    <li className='flex items-center justify-between hover:bg-zinc-100 px-6 py-2 cursor-pointer duration-200'>{three}<span><KeyboardArrowRight /></span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideNavContent
