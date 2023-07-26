import React, { useEffect, useRef, useState } from 'react'
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { useProductData } from '../../contexts/productContext/productContext';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [showSearchOutputModal, setShowOutputModal] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [searchData, setSearchData] = useState([]);
    const { products } = useProductData()
    const navigate = useNavigate()
    const searchProducts = () => {
        setShowOutputModal(true)
        const searchedProduct = products.filter(({ title }) => title.toLowerCase().includes(searchInput.toLowerCase()))
        setSearchData(searchedProduct)

    }

    const searchRef = useRef()
    const resetSearch = () => {
        setSearchInput('')
        setShowOutputModal(false)
    }
    useOutsideClick(searchRef, resetSearch)

    useEffect(() => {
        if (searchInput) {
            searchProducts()
        } else {
            setSearchData([])
        }

    }, [searchInput]);

    return (
        <div className='w-full  relative '>
            <input type="text" className='px-2 py-2 border w-full rounded text-lg outline-indigo-700 border-black' placeholder='Search Here' onChange={(e) => setSearchInput(e.target.value)} value={searchInput} />
            {showSearchOutputModal &&
                <div className='flex max-h-[50vh] overflow-y-scroll z-10 flex-col gap-3 bg-white absolute w-full rounded-b-xl border-x border-b px-2   py-2  ' ref={searchRef}>
                    {searchData.length === 0 ? (
                        <p className='text-center text-lg'>No item to show</p>
                    ) : (
                        searchData.map(({ id, title, price, image }) => {
                            return (
                                <div
                                    onClick={() => {
                                        setShowOutputModal(false)
                                        setSearchInput('')
                                        navigate(`/product-details/${id}`, { replace: true })
                                    }}
                                    className='flex justify-between items-center px-2 py-1 changeColorOnHover rounded border'
                                >
                                    <img
                                        className='w-10 h-auto  mix-blend-multiply   '
                                        loading="lazy"
                                        src={image}
                                        alt='nav search img'
                                    />
                                    <div className='  w-[80%] flex justify-between px-5'>

                                        <p className='text-lg font-wt-semibold'>{title}</p>

                                        <p className='font-wt-md'>₹ {price}</p>

                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
            }
        </div>
    )
}

export default SearchBar