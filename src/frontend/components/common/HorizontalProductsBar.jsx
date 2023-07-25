import React from 'react'

import { ProductCard } from "../Product/ProductCard"
const HorizontalProductsBar = ({ products }) => {
    return (
        <div className=" w-full  lg:flex-row  lg:gap-8 gap-2  px-1 lg:flex  grid grid-cols-2  ">
            {products.map((product) => {
                return (
                    <div className=' h-auto lg:w-[25%]'>
                        <ProductCard key={product._id} product={product} />
                    </div>
                );
            })}
        </div>
    )
}

export default HorizontalProductsBar