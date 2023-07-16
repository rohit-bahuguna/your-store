import React, { useState } from 'react';
import Layout from '../common/Layout';
import { useNavigate } from 'react-router-dom';

import { useProductData } from '../../contexts/productContext/productContext';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ACTION_TYPE, filterDataByCatagory } from '../../utils';
import PrivateRoute from '../Auth/PrivateRoute';
import HorizontalProductsBar from '../common/HorizontalProductsBar';

const HomePage = () => {
  const { categories, products, dispatchProductData } = useProductData();

  const navigate = useNavigate();
  const categoryFilter = () => { };
  const [carouselImages, setcarouselImages] = useState([
    'essentials.jpg', 'Back-to-school_Banner_1500x300.gif', 'healtly.jpg', "mangomadness.jpg", 'supersaver.jpg'
  ])
  const navigateToProductPage = (categoryName) => {
    dispatchProductData({
      type: ACTION_TYPE.SELECTED_CATEGORY,
      payload: categoryName
    });
    navigate(`/products/${categoryName}`)
  }


  return (
    <Layout>
      <div className=" flex flex-col gap-3 ">

        {/* main banner image */}
        <div className="hover:cursor-pointer">
          <img
            onClick={() => navigate('/products')}
            className="w-full h-auto"
            src="/images/homepage-main-baner.jpg"
            alt="home-image"
          />
        </div>

        {/* categories bar */}
        <div className=" w-full gap-3  px-1 flex ">
          {categories.map(({ categoryName, _id, id, banner }) => {
            return (
              <div
                key={_id}
                onClick={() => categoryFilter('Men')}
                className="w-[25%] border-2 rounded-lg shadow-md flex flex-col justify-between hover:scale-105">

                <img className="rounded-t-lg w-full h-[80%] hover:cursor-pointer  " src={banner} alt="card image" onClick={() => navigateToProductPage(categoryName)} />


                <h3 className="text-center pb-3 text-xl">
                  {categoryName}
                </h3>

              </div>
            );
          })}
        </div>

        {/* Carousel bar */}
        <div >
          <Carousel
            showArrows={true}
            showIndicators={false}
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
            stopOnHover={true}
            swipeable={true}

            interval={3000}
            transitionTime={1000}>

            {
              carouselImages.map((image, index) => {
                return <div key={index}>
                  <img src={`/images/carousel/${image}`} alt="" />
                </div>
              })
            }
          </Carousel>
        </div>

        {/* category wise product  bar */}

        <div className='flex flex-col gap-5'>
          {categories.map(({ categoryName, _id }) => {

            const filteredProducts = filterDataByCatagory(products, categoryName)
            if (filteredProducts.length > 0) {
              filteredProducts.length = 4
              return (
                <div
                  key={_id}
                  className='px-5'
                >
                  <h1 className='px-2 text-2xl font-semibold mb-3'>{categoryName}</h1>

                  <HorizontalProductsBar products={filteredProducts} />

                </div>
              );
            }

          })}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
