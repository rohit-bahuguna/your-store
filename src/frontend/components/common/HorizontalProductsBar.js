import React from 'react'
import { Link } from 'react-router-dom';
import { ProductCard } from "../Product/ProductCard"
const HorizontalProductsBar = ({ products }) => {
    return (
        <div className=" w-full gap-3  px-1 flex ">
            {products.map((product) => {
                return (
                    <ProductCard key={product._id} product={product} />
                );
            })}
        </div>
    )
}

export default HorizontalProductsBar