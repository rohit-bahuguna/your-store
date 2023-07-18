import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to="/">
      <div className=" border-2 border-indigo-500 px-1 pt-1 md:pt-1.5 text-center md:h-12 h-8 text-lg  hover:bg-indigo-100  text-indigo-700   ">

        <h1 className="border-b-2 hidden md:block border-x-2 font-bold border-indigo-500 text-2xl  hover:cursor-pointer px-3   ">
          YOUR STORE
        </h1>
        <h1 className="border-b-2 border-x-2 md:hidden font-bold border-indigo-500 text-sm   hover:cursor-pointer px-1    ">
          YOUR STORE
        </h1>
      </div>
    </Link>
  )
}

export default Logo