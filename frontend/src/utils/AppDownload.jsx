import React, { useState } from 'react';
import zomato from './../assets/zomato.png'

import AppDownloadModal from './AppDownloadModal';


const AppDownloadBanner = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    return (

        <div className='fixed bottom-10 right-10 z-50'>
            <div className="bg-gray-900  text-white flex items-center justify-between px-4  pt-2 rounded-lg max-w-xs"
                onClick={() => setIsModalOpen(true)}
            >
                {/* Left Text Section */}
                <div className="flex-1">
                    <h2 className=" font-medium mb-2">Online ordering is only supported on the mobile app</h2>
                    <button className="bg-white text-black py-1 px-2 rounded-md font-medium">Download the App</button>
                </div>

                {/* Right Image Section */}
                <div className="ml-4">
                    <img
                        src={zomato}
                        alt="Zomato App"
                        className="h-40 w-auto"
                    />
                </div>
            </div>
            <AppDownloadModal
                isOpen={isModalOpen}
                closeModal={() => setIsModalOpen(false)}
            />
        </div>


    );
};

export default AppDownloadBanner;
