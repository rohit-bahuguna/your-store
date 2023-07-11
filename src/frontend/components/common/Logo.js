import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
   <Link to="/">
          <div className=" border-2 border-indigo-500 px-1 pt-1.5 text-center h-12  text-2xl hover:bg-indigo-100  text-indigo-700   ">

            <h1 className="border-b-2 border-x-2 font-bold border-indigo-500   hover:cursor-pointer px-3   ">
              {' '}YOUR STORE
            </h1>
          </div>
        </Link>
  )
}

export default Logo