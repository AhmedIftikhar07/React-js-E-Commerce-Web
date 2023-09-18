
import { Api, ShoppingCart, ArrowCircleRight , Favorite , StarRate } from '@mui/icons-material'
import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Product = () => {
  const data = useLoaderData()
  const productData = data.data
  return (
    <div className='max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xl:gap-10 gap-6'>
      {
        productData.map((item) => (
          <div key={item.id} className='bg-white h-auto border-[1px] border-gray-200 py-10 z-30 hover:border-transparent shadow-none hover:shadow-textShadow duration-200 relative flex flex-col gap-4 '>
            <p className='absolute top-0 right-0 text-xs text-gray-400 p-1 capitalize italic'>{item.category}</p>
            <div className='w-full h-auto flex items-center justify-center relative group'>
              <img className='md:w-52 md:h-64 w-30 h-40 object-contain' src={item.image} alt="product" />

              <ul className='absolute w-full h-36 bg-gray-100 bottom-[-165px] group-hover:bottom-0 duration-700 flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-r  border-l '>
                <li className='productLi'>Compare <span><Api/></span></li>
                <li className='productLi'>Add to Cart<span><ShoppingCart/></span></li>
                <li className='productLi'>View Details <span><ArrowCircleRight/></span></li>
                <li className='productLi'>Add to Wish List <span><Favorite/></span></li>
              </ul>

            </div>
            <div className='px-4 z-10 bg-white'>
              <div className='flex items-center justify-between'>
                <h2 className='font-titleFont tracking-wide text-lg text-amazon_blue font-medium '>{item.title.substring(0, 20)}</h2>
                <p className='text-sm text-gray-600 font-semibold '>${item.price}</p>
              </div>
              <div>
                <p className='text-sm text-gray-500 mb-1'>{item.description.substring(0, 90)}...</p>
                <div className='text-yellow-500 -ml-1'>
                  <StarRate />
                  <StarRate />
                  <StarRate />
                  <StarRate />
                  <StarRate />
                </div>
              </div>
              <button className=' w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b boder border-zinc-400 active:border-yellow-800 active:shadow-amazonInput mt-4'>Add to Cart</button>
            </div>

          </div>
        ))
      }
    </div>
  )
}

export default Product
