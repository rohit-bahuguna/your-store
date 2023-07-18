import React from 'react'

import { ProductCard } from "../Product/ProductCard"
const HorizontalProductsBar = ({ products }) => {
    return (
        <div className=" w-full  sm:flex-row  sm:gap-8 gap-2  px-1 sm:flex  grid grid-cols-2  ">
            {products.map((product) => {
                return (
                    <div className=' h-auto sm:w-[25%]'>
                        <ProductCard key={product._id} product={product} />
                    </div>
                );
            })}
        </div>
    )
}

export default HorizontalProductsBar