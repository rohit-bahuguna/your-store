import React from 'react'
import { Link } from 'react-router-dom';

const HorizontalProductsBar = ({ products }) => {
    return (
        <div className=" w-full gap-3  px-1 flex ">
            {products.map(({ id,
                _id,
                title,

                image }) => {
                return (
                    <div
                        key={_id}

                        className="w-[25%] border-2 rounded-lg shadow-md flex flex-col justify-between hover:scale-105">


                        <Link to={`/product-details/${id}`}>

                            <img className="rounded-t-lg w-full h-[80%] hover:cursor-pointer  " src={image} alt={title} />
                        </Link>

                        <h3 className="text-center pb-3 text-xl">
                            {title}
                        </h3>

                    </div>
                );
            })}
        </div>
    )
}

export default HorizontalProductsBar