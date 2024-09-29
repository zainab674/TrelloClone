import React from 'react';
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";



const ImageModal = ({ images, currentImageIndex, onClose, onNext, onPrev }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-4 md:p-6 lg:p-8 rounded-lg shadow-lg w-full max-w-4xl relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-red-600 text-2xl md:text-3xl lg:text-4xl"
                >
                    &times;
                </button>

                {/* Display the current image */}
                <div className="flex flex-row items-center justify-between">
                    <button
                        onClick={onPrev}
                        className="text-2xl text-gray-600 mb-4 md:mb-0 md:mr-4"
                        disabled={images.length <= 1}
                    >
                        <BiSolidLeftArrow />
                    </button>

                    <img
                        src={images[currentImageIndex]}
                        alt={`Menu Page ${currentImageIndex + 1}`}
                        className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg"
                    />

                    <button
                        onClick={onNext}
                        className="text-2xl text-gray-600 mb-4 md:mb-0 md:ml-4"
                        disabled={images.length <= 1}
                    >
                        <BiSolidRightArrow />
                    </button>
                </div>
            </div>
        </div>

    );
};

export default ImageModal;
