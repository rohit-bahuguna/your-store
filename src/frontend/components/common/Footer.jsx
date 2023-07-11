import React, { useState } from 'react'
import { useProductData } from '../../contexts/productContext/productContext';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  const { categories } = useProductData();
  const [style, setStyle] = useState({})
  return (
    <section className='flex justify-evenly border-t-2 py-3 h-[30vh] bg-[#f6f6f6]  '>
      <div className=' ' >
        <h3 className='mb-3 uppercase font-semibold '>All Categories</h3>
        <div className='flex flex-col gap-2'>
          {
            categories.map(({ categoryName, _id }) => <p
              key={_id}

              className='hover:text-sky-700 hover:cursor-pointer'
              style={style}
            >{categoryName}</p>)
          }
        </div>

      </div>
      <div>
        <h3 className='mb-3 uppercase font-semibold' >Connect With Us</h3>
        <div className='flex flex-col gap-3 '>
          <p className="hover:text-sky-700 hover:cursor-pointer"> <AiFillLinkedin className='inline text-xl' /> Linkdin</p>

          <p className="hover:text-sky-700 hover:cursor-pointer"> <AiFillGithub className='inline text-xl' />  GitHub</p>
          <p className="hover:text-sky-700 hover:cursor-pointer">  <AiFillInstagram className='inline text-xl' /> InstaGram</p>
        </div>

      </div>
      <div>
        <h3 className='mb-3 uppercase font-semibold'>Contact Us</h3>

        <div className='flex flex-col gap-3' >
          <h4 className="hover:text-sky-700 hover:cursor-pointer">Rohit Bahuguna</h4>
          <p className="hover:text-sky-700 hover:cursor-pointer">Call / Whatsapp : <span className='contact'>9627944998</span></p>

          <p className="hover:text-sky-700 hover:cursor-pointer">Email :  <span className='contact'>rohitbahuguna.work@gmail.com</span></p>
        </div>


      </div>
    </section>
  )
}

export default Footer