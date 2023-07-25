import React from 'react'
import { useProductData } from '../../contexts/productContext/productContext';
import { ACTION_TYPE } from '../../utils';
import { useNavigate } from 'react-router-dom';

const CategoriesSection = () => {
    const { categories, dispatchProductData } = useProductData();
    const navigate = useNavigate();
    const navigateToProductPage = (categoryName) => {
        dispatchProductData({
            type: ACTION_TYPE.SELECTED_CATEGORY,
            payload: categoryName
        });
        navigate(`/products`, { state: categoryName })
    }

    return (
        <div className=" w-full  gap-3  px-1  md:flex  md:flex-row grid grid-cols-2 grid-rows-2   ">
            {categories.map(({ categoryName, _id, id, banner }) => {
                return (
                    <div
                        key={_id}
                        className="md:w-[25%] border-2 rounded-lg shadow-md flex flex-col justify-between hover:scale-105 hover:text-indigo-700">

                        <img loading="lazy" className="rounded-t-lg w-full h-[80%] hover:cursor-pointer  " src={banner} alt="card image" onClick={() => navigateToProductPage(categoryName)} />


                        <h3 className="text-center pb-3 text-lg md:text-xl">
                            {categoryName}
                        </h3>

                    </div>
                );
            })}
        </div>
    )
}

export default CategoriesSection