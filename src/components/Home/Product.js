
import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Product = () => {
    const data = useLoaderData()
    console.log(data.data);
  return (
    <div>
      
      Product
    </div>
  )
}

export default Product
