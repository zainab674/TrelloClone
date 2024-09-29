import React from 'react';
import CalculateAverageRating from './calculateRating';
import { useNavigate } from 'react-router-dom';
import { Card } from 'antd';
import { apiConst } from '../constants/api.constants';

const Cards = ({ location, discount }) => {
    const averageRating = CalculateAverageRating(location.reviews); // Calculate average rating for each location
    const navigate = useNavigate();
    const handleDetail = (id) => {
        navigate(apiConst.RestaurantDetail.replace(':id', id))
    }
    console.log("disss", discount)
    return (
        <Card
            hoverable
            className="md:w-full w-full  rounded-lg shadow-md"
            cover={
                <img
                    src={location.image}
                    alt={location.title}
                    className="w-full h-40 sm:h-48 md:h-56 lg:h-60 object-cover rounded-2xl cursor-pointer"
                    onClick={() => handleDetail(location.id)}
                />
            }
        >
            {discount && location.discount && (
                <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 left-4 bg-blue-600 text-white font-medium px-2 py-1 rounded-md">
                    {location.discount}% OFF
                </div>
            )}

            <Card.Meta
                title={
                    <h3 className="font-medium flex justify-between items-center text-gray-900 whitespace-nowrap text-base sm:text-lg md:text-xl overflow-hidden">
                        <span className="w-8/12 sm:w-10/12 truncate">{location.title}</span>
                        <div
                            className={`${averageRating >= 4
                                ? "bg-green-800"
                                : averageRating >= 3 && averageRating < 4
                                    ? "bg-green-600"
                                    : "bg-green-500"
                                } flex items-center space-x-1 w-10 h-5 sm:w-12 sm:h-6 text-white px-1 py-0 rounded-lg`}
                        >
                            <span className="text-sm sm:text-base font-bold leading-none">{averageRating}</span>
                            <span className="text-xs sm:text-sm">★</span>
                        </div>
                    </h3>
                }
            />

            <div className="mt-1">
                <div className="flex justify-between flex-wrap">
                    <div className="overflow-hidden w-1/2">
                        <div className="flex flex-wrap">
                            {location.cuisines.map((cuisine, index) => (
                                <span key={index} className="p-0.5 text-sm sm:text-base text-gray-500">
                                    {cuisine}{index !== location.cuisines.length - 1 && ','}
                                </span>
                            ))}
                        </div>
                    </div>
                    <p className="text-sm sm:text-base text-gray-400">
                        ₹{location.price} for {location.person}
                    </p>
                </div>

                {!discount && (
                    <div className="flex justify-between flex-wrap">
                        <p className="text-sm sm:text-base text-gray-400">
                            {location.city}, {location.country}
                        </p>
                        <p className="text-sm sm:text-base text-gray-600">{location.distance} km</p>
                    </div>
                )}

                {discount && (
                    <div className="flex justify-end">
                        <p className="text-sm sm:text-base text-gray-600">{location.deliveryTime} min</p>
                    </div>
                )}
            </div>
        </Card>
    );
}
export default Cards;