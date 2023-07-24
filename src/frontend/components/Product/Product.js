import React, { useEffect, useRef, useState } from "react";
import { MdFilterAltOff, MdFilterListAlt } from "react-icons/md"
import { ProductCard } from "./ProductCard";
import { ProductFilterBar } from "./ProductFilterBar";
import { filterDataBySubCatagories, filterDataByCatagory, searchProduct, sortData } from "../../utils";
import { useProductData } from "../../contexts/productContext/productContext";
import Layout from "../common/Layout"
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { getCategoryImage } from "../../utils/staticData";
import Loader from "../common/Loader"

export function ProductListing() {
  const {
    sortBy,
    priceRange,
    sortByRating,
    products,
    search,
    selectedCategory,
    selectedSubCategories,
    changeTitle
  } = useProductData();

  const [showFilter, setShowFilter] = useState(false)

  const searchData = searchProduct([...products], search);

  const currentCategoryImage = getCategoryImage(selectedCategory)

  const filteredByCatagory = filterDataByCatagory([...searchData], selectedCategory);



  const filteredDataSubCatagories = filterDataBySubCatagories([...filteredByCatagory], selectedSubCategories);

  const sortedData = sortData([...filteredDataSubCatagories], sortBy, priceRange, sortByRating);

  const filterRef = useRef();
  useOutsideClick(filterRef, () => setShowFilter(false))

  useEffect(() => {

    changeTitle("Products");
  }, []);


  return (
    <Layout>
      <div className="flex w-full gap-2 ">
        <div className="border-r-2 w-[20%] overflow-auto h-[90vh]  sticky hidden md:block top-[12vh] ">
          <ProductFilterBar />
        </div>
        <div className="md:w-[80%] px-2" >
          <div className="product-list-header">
            {sortedData.length > 0 ? (
              <div className="flex justify-between ">

                <p className="text-xl mb-2">Showing <span className="font-semibold">{sortedData.length}</span> of <span className="font-semibold" > {products.length}</span> items</p>

                {!showFilter ? <MdFilterListAlt className="md:hidden text-3xl hover:text-indigo-700 " onClick={() => setShowFilter(true)} /> :
                  <MdFilterAltOff className="md:hidden text-3xl hover:text-indigo-700 " onClick={() => setShowFilter(false)} />
                }
              </div>
            ) : (
              products.length > 0 && <div className="flex justify-center">

                  <img loading="lazy" src="/images/no-product-found.png" alt="No Product Found" />

              </div>
            )}
          </div>
          <div className="  mb-3   overflow-hidden">
            <img loading="lazy" className="w-full max-h-36 rounded-3xl mix-blend-multiply " src={`/images/categoryBanners/${currentCategoryImage}`} />

          </div>
          {sortedData ? <div className="grid md:grid-cols-4 grid-cols-2  gap-3">
            {sortedData.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div> : <div className="flex justify-center items-center">
            <Loader message={"Loading Products"} />
          </div>
          }
        </div>
        {showFilter && <div className="fixed bottom-0 top-[4.5rem]  py-2 bg-white overflow-auto " ref={filterRef}>
          <ProductFilterBar />
        </div>}
      </div>
    </Layout>
  );
}
