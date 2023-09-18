import React from 'react'
import FooterMiddileList from './FooterMiddileList'
import { middleList } from '../../constants'
import { logo, pakFlag, } from '../../assests'


const FooterMiddle = () => {
  return (
    <div className='w-full bg-amazon_light text-white'>
      {/* ============== Top Start ============== */}
      <div className='w-full border-b-[1px] boder-gray-500 py-10'>
        <div className='max-w-5xl mx-auto text-gray-300'>
          <div className='w-full grid md:grid-cols-4 grid-cols-2 place-items-center items-start'>           
            {
              middleList.map((item , index)=>{
                return(
                  <>
                  <FooterMiddileList
                   key={index}
                   title={item.title}
                   listItem={item.listItem}
                   />  
                  </>
                )
              })
            }
          </div>
        </div>
      </div>
      {/* ============== Top End ============== */}
      {/* ============== Bottom Start ============== */}
      <div className='w-full flex gap-6 items-center justify-center py-6 '>
            <div>
              <img className='w-20 pt-3 ' src={logo} alt="logo" />
            </div>
            <div className='flex gap-2 '>
              <p className='flex gap-1 items-center justify-center border border-gray-500 hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1'>English</p>
            </div>
            <div className='flex gap-2  items-center justify-center border border-gray-500 hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1'>
              <img className='w-6 ' src={pakFlag} alt="flag" />
              <p>Pakistan</p>
              </div>
      </div>
      {/* ============== Bottom Start ============== */}
    </div>
  )
}

export default FooterMiddle
