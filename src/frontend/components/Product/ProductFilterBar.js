import React from 'react';
import { ACTION_TYPE } from '../../utils';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { useProductData } from '../../contexts/productContext/productContext';

const stars = [1, 2, 3, 4];

export function ProductFilterBar() {
	const {
		dispatchProductData,
		sortBy,
		priceRange,
		sortByRating,
		products,
		categories
	} = useProductData();

	const changeHandler = (actionType, payload) => {

		dispatchProductData({
			type: actionType,
			payload
		});
	};

	const isSortByRating = star => sortByRating && sortByRating === star;
	const isSortByPrice = type => sortBy && sortBy === type;

	return (
		<div className=" flex flex-col gap-6 w-full  h-full">
			<div className="px-3 self-end ">

				<button
					onClick={() => {
						changeHandler(ACTION_TYPE.CLEAR_FILTER, products);
					}}
					className="btnIndigo">
					Clear
				</button>
			</div>

			<div className="px-5">
				<h4 className='font-semibold text-lg mb-1'>Price</h4>
				<div>
					<div className="flex justify-between">
						<p className='hover:cursor-pointer hover:text-indigo-700' onClick={() => changeHandler(ACTION_TYPE.PRICE_RANGE, 10)}>10</p>
						{priceRange > 10 && priceRange < 1000 && <p>{priceRange}</p>}
						<p className='hover:cursor-pointer hover:text-indigo-700' onClick={() => changeHandler(ACTION_TYPE.PRICE_RANGE, 1000)}>1000</p>
					</div>
					<input
						type="range"
						name="rangeInput"
						className="w-full"
						min="10"
						max="1000"

						value={priceRange}
						onChange={e =>
							changeHandler(ACTION_TYPE.PRICE_RANGE, e.target.value)}
					/>
				</div>
			</div>

			<div className="px-5">
				<h4 className='font-semibold  text-lg mb-1'>Category</h4>
				<div>
					{categories.map(
						({ categoryName, subCategories, _id, showSubCategories }) => {
							return (
								<div key={_id} className="category">
									<h3
										onClick={() => {
											changeHandler(ACTION_TYPE.SHOW_OR_HIDE_SUBCATEGORIES, {
												_id,
												value: !showSubCategories
											});
										}}
										className='hover:text-indigo-700 hover:cursor-pointer'
									>
										{showSubCategories
											? <BiChevronUp className="inline text-3xl" />
											: <BiChevronDown className="inline text-3xl" />}
										{categoryName}
									</h3>
									{showSubCategories &&
										subCategories.map(({ _id, subCategoryName, ischecked }) => {
											return (
												<div className="flex gap-2 mb-1 group hover:cursor-pointer  ">
													<input
														type="checkbox"
														name="light"
														className="w-[8%] "
														checked={ischecked}
														onChange={e =>
															changeHandler(
																ACTION_TYPE.SELECTED_SUBCATEGORY,
																{ subCategoryName, categoryName, chackedValue: !ischecked },
																e
															)}
														id={subCategoryName}
													/>
													<label key={_id} htmlFor={subCategoryName}
														className='group-hover:cursor-pointer group-hover:text-indigo-700'
													>
														{`${subCategoryName
															.charAt(0)
															.toUpperCase()}${subCategoryName.slice(1)}`}
													</label>
												</div>
											);
										})}
								</div>
							);
						}
					)}
				</div>
			</div>

			<div className="px-5">
				<h4 className='font-semibold text-lg mb-1'>Rating</h4>
				<div className='flex flex-col gap-2 '>
					{stars.map(star =>
						<div className="group flex items-center" key={star}>
							<input
								className="mr-2 w-4 h-6"
								type="radio"
								name="rating"
								value=""
								checked={isSortByRating(star) // className="radio-input"
								}
								onChange={() => {
									changeHandler(ACTION_TYPE.SORT_BY_RATING, star);
								}}
								id={star}
							/>
							<label htmlFor={star} className='group-hover:text-indigo-700 group-hover:cursor-pointer' >
								{star} Stars & above
							</label>
						</div>
					)}
				</div>
			</div>

			<div className="px-5">
				<h4 className='font-semibold text-lg mb-1'>Sort by price</h4>
				<div className='flex flex-col gap-2'>
					<div className="flex items-center group">
						<input
							type="radio"
							name="sort"
							className="mr-2  w-4 h-6 "
							checked={isSortByPrice('LOW_TO_HIGH')}
							onChange={() => changeHandler(ACTION_TYPE.SORT_BY, 'LOW_TO_HIGH')}
							id='lowToHigh'
						/>

						<label className="group-hover:text-indigo-700 group-hover:cursor-pointer" htmlFor='lowToHigh'> Low to High</label>
					</div>
					<div className="flex items-center group">
						<input
							type="radio"
							name="sort"
							className="mr-2 w-4 h-6"
							checked={isSortByPrice('HIGH_TO_LOW')}
							onChange={() => changeHandler(ACTION_TYPE.SORT_BY, 'HIGH_TO_LOW')}
							id='highToLow'
						/>
						<label className="group-hover:text-indigo-700 group-hover:cursor-pointer" htmlFor='highToLow'> High to Low</label>
					</div>
				</div>
			</div>
		</div>
	);
}
