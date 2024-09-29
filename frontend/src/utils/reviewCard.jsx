import React from "react";
import { FaThumbsUp, FaComment, FaShare } from "react-icons/fa";

const ReviewCard = ({ card }) => {
    console.log('datttttttt', card)
    return (
        <div className="max-w-xl  bg-white shadow-md rounded-lg md:p-4 my-6">
            {/* Reviewer Info */}
            <div className="flex items-center justify-between  mb-4">
                <div className="flex space-x-4 items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                    <div>
                        <h3 className="text-gray-800 font-semibold">{card.name}</h3>
                        <p className="text-sm text-gray-500">{card.userReviews} reviews • {card.userFollowers} Followers</p>
                    </div>
                </div>
                <button className="ml-auto text-red-500 border border-red-500 px-4 py-1  rounded-md">
                    Follow
                </button>
            </div>

            {/* Delivery Info */}
            <div className="flex items-center space-x-2 text-xs text-gray-500 mb-2">
                <div className="bg-red-500 text-white p-1 rounded-lg font-bold">{card.star}★</div>
                <span className="uppercase font-semibold">{card.type}</span>
                <span>• one month ago</span>
            </div>

            {/* Review Content */}
            <div className="mb-4 text-sm">
                <ol className="list-decimal ml-6 mt-2 text-gray-600">
                    {Array.isArray(card.comments) ? (
                        card.comments.map((comment, index) => (
                            <li key={index}>{comment}</li>
                        ))
                    ) : (
                        <li>No comments available</li>
                    )}
                </ol>
            </div>

            {/* Voting Section */}
            <div className="text-sm text-gray-500 mb-2">
                <span>0 Votes for helpful, 0 Comments</span>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4 text-gray-500 text-sm">
                <button className="flex items-center space-x-1 hover:text-gray-700">
                    <FaThumbsUp />
                    <span>Helpful</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-gray-700">
                    <FaComment />
                    <span>Comment</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-gray-700">
                    <FaShare />
                    <span>Share</span>
                </button>
            </div>


        </div>
    );
};

export default ReviewCard;
