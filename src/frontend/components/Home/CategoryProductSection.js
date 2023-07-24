import React from 'react'
import { useProductData } from '../../contexts/productContext/productContext';
import { useNavigate } from 'react-router-dom';
import { ACTION_TYPE, filterDataByCatagory } from '../../utils';
import { MdKeyboardArrowRight } from 'react-icons/md';
import HorizontalProductsBar from '../common/HorizontalProductsBar';

const CategoryProductSection = () => {

    const { categories, dispatchProductData, products } = useProductData();

    const navigate = useNavigate();

    const navigateToProductPage = (categoryName) => {
        dispatchProductData({
            type: ACTION_TYPE.SELECTED_CATEGORY,
            payload: categoryName
        });
        navigate(`/products`, { state: categoryName })
    }

    return (
        <div className='flex flex-col gap-5'>
            {categories.map(({ categoryName, _id }) => {

                const filteredProducts = filterDataByCatagory(products, categoryName)
                if (filteredProducts.length > 0) {
                    filteredProducts.length = 4
                    return (
                        <div
                            key={_id}
                            className='sm:px-5  '
                        >
                            <h1 className='px-2 text-2xl font-semibold mb-3 hover:text-indigo-700  hover:cursor-pointer'
                                onClick={() => navigateToProductPage(categoryName)}
                            >

                                {categoryName}
                                <MdKeyboardArrowRight className='inline  text-3xl mb-1' />
                            </h1>

                            <HorizontalProductsBar products={filteredProducts} />

                        </div>
                    );
                }

            })}
        </div>
    )
}

export default CategoryProductSection