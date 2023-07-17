import React from 'react'
import { useProductData } from '../../contexts/productContext/productContext';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { ACTION_TYPE } from '../../utils';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const { categories, dispatchProductData } = useProductData();
  const navigate = useNavigate()
  const navigateToProductPage = (categoryName) => {
    dispatchProductData({
      type: ACTION_TYPE.SELECTED_CATEGORY,
      payload: categoryName
    });
    navigate(`/products/${categoryName}`)
  }
  return (
    <section className=' flex   justify-evenly border-t-2 py-3 h-[30vh] bg-[#f6f6f6]'>
      <div className=' ' >
        <h3 className='mb-3 uppercase font-semibold '>All Categories</h3>
        <div className='flex flex-col gap-2'>
          {
            categories.map(({ categoryName, _id }) => <p
              key={_id}

              className='hover:text-indigo-700 hover:cursor-pointer'

              onClick={() => navigateToProductPage(categoryName)}
            >{categoryName}</p>)
          }
        </div>

      </div>
      <div>
        <h3 className='mb-3 uppercase font-semibold' >Connect With Us</h3>
        <div className='flex flex-col gap-3 '>
          <Link to="https://www.linkedin.com/in/rohit--bahuguna" target='#blank'>
            <p className="hover:text-indigo-700 "> <AiFillLinkedin className='inline text-xl' /> Linkdin</p>
          </Link>


          <Link to="https://github.com/rohit-bahuguna" target='#blank'>
            <p className="hover:text-indigo-700 "> <AiFillGithub className='inline text-xl' />  GitHub</p></Link>

          <Link to="https://www.instagram.com/the_rohit_bahuguna" target='#blank'>
            <p className="hover:text-indigo-700 ">  <AiFillInstagram className='inline text-xl' /> InstaGram</p></Link>
        </div>

      </div>
      <div>
        <h3 className='mb-3 uppercase font-semibold'>Contact Us</h3>

        <div className='flex flex-col gap-3' >
          <h4 className="">Rohit Bahuguna</h4>
          <p className="">Call / Whatsapp : <span className='contact'>9627944998</span></p>

          <p className="">Email :  <span className='contact'>rohitbahuguna.work@gmail.com</span></p>
        </div>


      </div>
    </section>
  )
}

export default Footer