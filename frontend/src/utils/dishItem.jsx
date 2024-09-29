
import React from 'react';

const DishItem = ({ dish }) => {
    return (
        <div className="flex mb-4">
            <img
                src={dish.img}
                alt={dish.name}
                className="w-24 h-24 object-cover mr-4 rounded-lg"
            />
            <div className="flex flex-col justify-between flex-grow">
                <div className=" font-medium">{dish.name}</div>
                <div className="flex items-center text-yellow-500">
                    {[...Array(5)].map((_, index) => (
                        <svg
                            key={index}
                            className={`w-4 h-4 ${index < dish.rating ? 'text-yellow-500' : 'text-gray-300'
                                }`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 15.27l-3.36 1.76.64-3.73L4 9.73l3.73-.54L10 3l1.27 5.46 3.73.54-2.64 2.65.64 3.73L10 15.27z"
                                clipRule="evenodd"
                            />
                        </svg>
                    ))}
                </div>
                <div className="text-gray-800">{dish.price}</div>
            </div>
        </div>
    );
};

export default DishItem;
