import React, { useState } from "react";

const ZomatoBanner = () => {
    const [close, setClose] = useState(false);
    const onclose = () => {
        setClose(true)
    }



    return (
        <div className={` ${close ? "hidden" : "flex"}  bg-black fixed  md:hidden z-50 bottom-0 w-full  text-white  items-center justify-between p-4  shadow-md mx-0`}>
            {/* Close button */}
            <button className="text-white focus:outline-none" onClick={onclose}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-4 h-4"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {/* Content */}
            <div className="flex items-center space-x-2">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png" // Zomato logo URL
                    alt="Zomato Logo"
                    className="w-8 h-8"
                />
                <div>
                    <p className="text-xs">Zomato now available in</p>
                    <p className="text-xs">Hindi and 9 more languages</p>
                </div>
            </div>

            {/* Order button */}
            <button className="bg-white text-xs text-red-600 font-semibold py-1 px-2 rounded-full hover:bg-gray-200">
                Order on App
            </button>
        </div>
    );
};

export default ZomatoBanner;
