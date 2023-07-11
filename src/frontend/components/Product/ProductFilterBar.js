import React, { useState } from 'react';

import { ACTION_TYPE } from '../../utils';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { useProductData } from '../../contexts/productContext/productContext';

const STARS = [1, 2, 3, 4];

export function ProductFilterBar() {
	const {
		dispatchProductData,
		sortBy,
		priceRange,
		sortByRating,
		products,
		categories
	} = useProductData();

	const changeHandler = (typeOfDispatch, typeOfAction, e) => {
		dispatchProductData({
			type: typeOfDispatch,
			payload: typeOfAction
		});
	};

	const isSortByRating = star => sortByRating && sortByRating === star;
	const isSortByPrice = type => sortBy && sortBy === type;

	return (
		<div className=" flex flex-col gap-6 px-8  h-full">
			<div className="flex justify-between  ">
				<h4 className='font-semibold text-lg mb-1'>Filters</h4>
				<button
					onClick={() => {
						changeHandler(ACTION_TYPE.CLEAR_FILTER, products);
					}}
					className="border px-5 hover:bg-sky-500 py-1 rounded-full shadow">
					Clear
				</button>
			</div>

			<div className="">
				<h4 className='font-semibold text-lg mb-1'>Price</h4>
				<div>
					<div className="flex justify-between">
						<p>10</p>
						<p>50</p>
						<p>500</p>
						<p>1000</p>
					</div>
					<input
						type="range"
						name="rangeInput"
						className="w-full"
						min="10"
						max="1000"
						value={priceRange}
						onChange={e =>
							changeHandler(ACTION_TYPE.PRICE_RANGE, e.target.value, e)}
					/>
				</div>
			</div>

			<div className="">
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
										className='hover:text-sky-500'
									>
										{showSubCategories
											? <BiChevronUp className="inline text-3xl" />
											: <BiChevronDown className="inline text-3xl" />}
										{categoryName}
									</h3>
									{showSubCategories &&
										subCategories.map(({ _id, subCategoryName, ischecked }) => {
											return (
												<div className="flex gap-2 mb-1">
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
													/>
													<label key={_id} >
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

			<div className="">
				<h4 className='font-semibold text-lg mb-1'>Rating</h4>
				<div className='flex flex-col gap-2'>
					{STARS.map(star =>
						<div className="" key={star}>
							<input
								className="mr-2 "
								type="radio"
								name="rating"
								value=""
								checked={isSortByRating(star) // className="radio-input"
								}
								onChange={() => {
									changeHandler(ACTION_TYPE.SORT_BY_RATING, star);
								}}
							/>
							<label >
								{star} Stars & above
							</label>
						</div>
					)}
				</div>
			</div>

			<div className="">
				<h4 className='font-semibold text-lg mb-1'>Sort by</h4>
				<div className='flex flex-col gap-2'>
					<div className="select-category">
						<input
							type="radio"
							name="sort"
							className="mr-2"
							checked={isSortByPrice('LOW_TO_HIGH')}
							onChange={() => changeHandler(ACTION_TYPE.SORT_BY, 'LOW_TO_HIGH')}
						/>

						<label className="input-label">Price - Low to High</label>
					</div>
					<div className="select-category">
						<input
							type="radio"
							name="sort"
							className="mr-2"
							checked={isSortByPrice('HIGH_TO_LOW')}
							onChange={() => changeHandler(ACTION_TYPE.SORT_BY, 'HIGH_TO_LOW')}
						/>
						<label className="input-label">Price - High to Low</label>
					</div>
				</div>
			</div>
		</div>
	);
}
