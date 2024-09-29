import React, { useState } from 'react';
import fone from './../assets/fone.png';
const AppDownloadModal = ({ isOpen, closeModal }) => {
    const [selectedOption, setSelectedOption] = useState("Phone");

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50"
            onClick={closeModal}
        >
            <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-6 relative">
                {/* Close Button */}
                <button
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                    onClick={closeModal}
                >
                    &times;
                </button>

                {/* Modal Content */}
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Left: App Mockup Image */}
                    <div className="w-full lg:w-1/2 flex items-center justify-center">
                        <img
                            src={fone} // Replace with the actual image path
                            alt="Zomato App"
                            className="max-w-full"
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-2xl font-semibold mb-4">Get the Zomato App</h2>
                        <p className="text-gray-500 mb-6">
                            We will send you a link, open it on your phone to download the app.
                        </p>

                        {/* Phone / Email Selection */}
                        <div className="flex items-center mb-6 space-x-4">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="contact-method"
                                    value="Phone"
                                    checked={selectedOption === "Phone"}
                                    onChange={() => setSelectedOption("Phone")}
                                    className="mr-2"
                                />
                                <span>Phone</span>
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="contact-method"
                                    value="Email"
                                    checked={selectedOption === "Email"}
                                    onChange={() => setSelectedOption("Email")}
                                    className="mr-2"
                                />
                                <span>Email</span>
                            </label>
                        </div>

                        {/* Input Field */}
                        <div className="flex items-center mb-6">
                            {selectedOption === "Phone" && (
                                <>
                                    <select
                                        className="border border-gray-300 rounded-md py-2 px-4 mr-2"
                                    >
                                        <option value="+91">+91</option>
                                        {/* Add more country codes as needed */}
                                    </select>
                                    <input
                                        type="text"
                                        placeholder="type here..."
                                        className="border border-gray-300 rounded-md py-2 px-4 flex-1"
                                    />
                                </>
                            )}
                            {selectedOption === "Email" && (
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="border border-gray-300 rounded-md py-2 px-4 flex-1"
                                />
                            )}
                        </div>

                        {/* Share App Link Button */}
                        <button className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600">
                            Share App Link
                        </button>

                        {/* Download App Buttons */}
                        <div className="flex space-x-4 mt-6">
                            <a
                                href="#"
                                className="flex items-center justify-center w-32 h-10 mb-4 bg-gray-800 text-white rounded-md"
                            >
                                Google Play
                            </a>
                            <a
                                href="#"
                                className="flex items-center justify-center w-32 h-10 bg-gray-800 text-white rounded-md"
                            >
                                App Store
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppDownloadModal;
