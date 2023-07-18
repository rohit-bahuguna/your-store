import React, { useRef, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Toaster } from "react-hot-toast";
import SearchBar from "./SearchBar";
import { useOutsideClick } from "../../hooks/useOutsideClick";

const Layout = ({ children }) => {
  const [showSearch, setShowSearch] = useState(false)
  const searchRef = useRef()
  useOutsideClick(searchRef, () => setShowSearch(false))
  console.log(showSearch)
  return (
    <div className="flex w-full flex-col md:gap-5 gap-1 relative">
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Header setShowSearch={setShowSearch} />
      {showSearch && <div className="md:hidden px-1 my-1  bg-white top-[4.5rem] w-screen "
        ref={searchRef}
      >
        <SearchBar />

      </div>}
      <div className=" ">
        {children}
      </div>
      <Footer />
      {/* <div className="absolute top-20 bottom-0 right-0 left-0 flex justify-center items-center bg-[#0808089b] ">

        <div

        >

          <div className="p-6 text-center">
            <svg
              aria-hidden="true"
              className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to Logout?
            </h3>
            <button
              data-modal-hide="popup-modal"
              type="button"
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              onClick={() => {

              }}>
              Logout
            </button>
            <button
              data-modal-hide="popup-modal"
              type="button"
              className="text-gray-500 d hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              No, cancel
            </button>
          </div>
        </div>

      </div> */}
    </div>
  );
};

export default Layout;
