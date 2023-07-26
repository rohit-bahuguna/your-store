import React, { useEffect } from 'react';
import Layout from '../common/Layout';
import { useNavigate } from 'react-router-dom';
import { useProductData } from '../../contexts/productContext/productContext';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ACTION_TYPE, carouselImages } from '../../utils';
import { categoryImages } from '../../utils/staticData';
import CategoriesSection from './CategoriesSection';
import CategoryProductSection from './CategoryProductSection';

export const HomePage = () => {

  const { dispatchProductData, changeTitle, products } = useProductData();

  const navigate = useNavigate();

  changeTitle("Home")

  const navigateToProductPage = (categoryName) => {
    dispatchProductData({
      type: ACTION_TYPE.SELECTED_CATEGORY,
      payload: categoryName
    });
    navigate(`/products`, { state: categoryName })
  }

  useEffect(() => {
    dispatchProductData({
      type: ACTION_TYPE.CLEAR_FILTER,
      payload: products
    })
  }, [])


  return (
    <Layout>
      <div className="  flex flex-col gap-3 ">

        {/* main banner image */}

        <div className="hover:cursor-pointer">
          <img
            loading="lazy"
            onClick={() => navigate('/products')}
            className="w-full h-auto"
            src="/images/homepage-main-baner.jpg"
            alt="home-image"
          />
        </div>

        {/* categories bar */}

        <CategoriesSection />

        {/* Carousel bar */}

        <div>
          <Carousel
            showArrows={true}
            showIndicators={false}
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
            stopOnHover={true}
            swipeable={true}

            interval={2000}
            transitionTime={500}>

            {
              carouselImages.map((image, index) => {
                return <div key={index}>
                  <img loading="lazy" src={`/images/carousel/${image}`} alt="" />
                </div>
              })
            }
          </Carousel>
        </div>

        {/* category wise product  bar */}

        <CategoryProductSection />

        {/*category Carousel bar */}
        <div>
          <Carousel
            showArrows={true}
            showIndicators={false}
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
            stopOnHover={true}
            swipeable={true}
            onClickItem={(index) => navigateToProductPage(categoryImages[index].split('.')[0])}
            interval={2000}
            transitionTime={500}>

            {
              categoryImages.map((image, index) => {
                return <div key={index}>
                  <img loading="lazy" src={`/images/categoryBanners/${image}`} alt={image} className='rounded-3xl px-2' />
                </div>
              })
            }
          </Carousel>
        </div>

      </div>
    </Layout>
  );
};

