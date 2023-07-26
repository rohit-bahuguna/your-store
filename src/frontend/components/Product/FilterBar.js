import React from 'react'
import { useProductData } from '../../contexts/productContext/productContext';
import { AiFillStar } from 'react-icons/ai';
const FilterBar = () => {
    const {
        sortBy,
        priceRange,
        sortByRating,
        selectedCategory,
        selectedSubCategories,
    } = useProductData();
    return (
        <div className="flex flex-wrap items-center text-sm  gap-2  mb-3 px-3 ">
            <h4 className='font-semibold text-lg mb-1'>Filters</h4>
            <div>
                {sortBy && sortBy === "LOW_TO_HIGH" && <span className="filter">Low To High</span>}
            </div>
            <div>
                {sortBy && sortBy === "HIGH_TO_LOW" && <span className="filter">High To Low</span>}
            </div>

            <div>
                {priceRange > 0 && <span className="filter"> 0 To ₹ {priceRange}</span>}
            </div>

            <div>
                {sortByRating > 0 && <span className="filter"> 0 To {sortByRating} <AiFillStar className='inline  text-yellow-500' /></span>}
            </div>

            <div className="flex justify-start flex-wrap gap-2  ">
                {selectedCategory && <span className="filter">{selectedCategory}</span>}

            </div>


            {selectedSubCategories && selectedSubCategories.map(subCategories => <span className="filter">{subCategories}</span>)}




        </div>
    )
}

export default FilterBar