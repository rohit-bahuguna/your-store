import React from "react";

import { ProductCard } from "./ProductCard";
import { ProductFilterBar } from "./ProductFilterBar";
import { filterDataBySubCatagories, filterDataByCatagory, searchProduct, sortData } from "../../utils";
import { useProductData } from "../../contexts/productContext/productContext";
import Layout from "../common/Layout"


export function ProductListing() {
  const {
    sortBy,
    priceRange,
    sortByRating,
    products,
    search,
    selectedCategory,
    selectedSubCategories
  } = useProductData();



  const searchData = searchProduct([...products], search);

  const filteredByCatagory = filterDataByCatagory([...searchData], selectedCategory);

  const filteredDataSubCatagories = filterDataBySubCatagories([...filteredByCatagory], selectedSubCategories);

  const sortedData = sortData([...filteredDataSubCatagories], sortBy, priceRange, sortByRating);

  // useEffect(() => {
  //   setLoader(true);
  //   setTimeout(() => {
  //     setLoader(false);
  //   }, 1000);
  //   changeTitle("Products");
  // }, []);


  return (
    <Layout>
      <div className="flex w-full gap-2">
        <div className="border-r-2 w-[20%] overflow-auto h-[90vh]  sticky top-[12vh] ">
          <ProductFilterBar />
        </div>
        <div className="w-[80%] px-2" >
          <div className="product-list-header">
            {sortedData.length > 0 ? (
              <>

                <p className="text-xl mb-2">Showing <span className="font-semibold">{sortedData.length}</span> of <span className="font-semibold" > {products.length}</span> items</p>
              </>
            ) : (
              products.length > 0 && <div className="flex justify-center">

                <img src="/images/no-product-found.png" alt="No Product Found" />

              </div>
            )}
          </div>

          <div className="grid grid-cols-4  gap-3">
            {sortedData && sortedData.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
