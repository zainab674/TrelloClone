import React, { useState } from "react";

const ZomatoOffer = () => {
    const [close, setClose] = useState(false);
    const onclose = () => {
        setClose(true)
    }
    return (
        <div className={` ${close ? "hidden" : "block"}  w-full bg-white fixed  md:hidden z-50 h-1/2 bottom-0 shadow-lg  p-4 text-center`
        }>
            {/* Image and Offer Text */}
            <div className="relative flex justify-center">
                <img
                    src="https://brandmusiq.com/assets/work_banner_vyEql_Zomato.jpg"
                    alt="Exclusive offers"
                    className="w-1/3"
                />
                <button
                    className="absolute top-2 right-2 text-black focus:outline-none z-20"
                    onClick={onclose}
                >
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
            </div>


            <h2 className="text-sm font-bold mb-1">Unlock exclusive offers</h2>
            <p className="text-gray-600 text-xs">
                Great deals are waiting for you. Get up to 60% off on ordering from the app.
            </p>



            {/* App Only Text */}
            <p className="text-gray-500 mt-4 text-xs">Online ordering is only available on the Zomato app</p>

            {/* Continue Button */}
            <button className="bg-red-500 text-white font-semibold py-1 px-4 text-sm rounded-full mt-2 hover:bg-red-600">
                Continue in app
            </button>
        </div >
    );
};

export default ZomatoOffer;
