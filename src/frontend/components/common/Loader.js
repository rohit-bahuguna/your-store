import React from 'react';

const Loader = ({ message }) => {
    return (
        <div className={`flex flex-col mt-10 `}>
            <img src="/images/loader.svg" alt="Loading" className='w-[40vw] md:w-[20vw]' />
            {message &&
                <span className={`text-indigo-700  text-xl self-center `}>
                    {message}
                </span>}
        </div>
    );
};

export default Loader;