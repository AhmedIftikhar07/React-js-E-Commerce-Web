import React from 'react'

const FooterMiddileList = ({ title, listItem }) => {
    return (
        <div>
            <div>
                <h3 className='font-titleFont text-white md:text-base text-sm mt-3 text-center md:text-left font-semibold mb-3'>{title}</h3>
                <ul className='flex flex-col gap-2 font-bodyFont '>
                   {
                    listItem.map((item)=> item.listData.map((data , index)=>(
                        <li key={index} className='footerLink'>{data}</li>
                    )))
                   }
                </ul>
            </div>
        </div>
    )
}

export default FooterMiddileList
