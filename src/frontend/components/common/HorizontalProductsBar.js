import React from 'react'

import { ProductCard } from "../Product/ProductCard"
const HorizontalProductsBar = ({ products }) => {
    return (
        <div className=" w-full gap-8  px-1 flex  ">
            {products.map((product) => {
                return (
                    <div className=' h-auto w-[25%]'>
                        <ProductCard key={product._id} product={product} />
                    </div>
                );
            })}
        </div>
    )
}

export default HorizontalProductsBar