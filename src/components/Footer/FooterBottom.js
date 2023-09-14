import React from 'react'
import { bottomList } from '../../constants'

const FooterBottom = () => {
  return (
    <div className='w-full bg-footerBottom py-8 '> 
      <div className='max-w-5xl mx-auto'>
        <div className='w-full grid grid-cols-7 gap-3 place-content-center text-gray-400'>
          {
            bottomList.map((item)=>(
              <div key={item._id}>
                <h3 className='footerBottonTitle' >{item.title}</h3>
                <p className='footerBottonText'>{item.des}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default FooterBottom