import React, { useRef, useState, useEffect } from 'react';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';

const CardCrousel = ({ Menu }) => {
    const scrollContainerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const scrollLeft = () => {
        scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    };

    useEffect(() => {
        const checkScrollPosition = () => {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;

            // Check if we can scroll left or right
            setCanScrollLeft(scrollLeft > 0);

            // Add a small tolerance to avoid floating point precision issues
            const tolerance = 1; // Tolerance for floating point precision
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth - tolerance);
        };

        // Initial check
        checkScrollPosition();

        // Add event listener to track scroll position
        const container = scrollContainerRef.current;
        container.addEventListener('scroll', checkScrollPosition);

        return () => {
            2
            container.removeEventListener('scroll', checkScrollPosition);
        };
    }, []);

    return (
        <div className="bg-white py-4 w-9/12 mx-auto flex items-center relative">
            {/* Left arrow button */}
            {canScrollLeft && (
                <button
                    onClick={scrollLeft}
                    className="absolute left-0 p-2 z-10 flex items-center"
                    style={{ marginLeft: '-2.5rem' }} // Adjust the margin to ensure no extra space
                >
                    <IoIosArrowDropleft className="text-gray-500 text-4xl" />
                </button>
            )}

            {/* Scrollable Menu */}
            <div className="flex flex-grow overflow-hidden relative">
                <ul
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto scrollbar-hide space-x-4"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {Menu.map((item) => (
                        <li key={item.id} className="flex-shrink-0 mx-5">
                            <div className="w-64 bg-white shadow-lg rounded-lg transition-transform duration-300 transform">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="w-full h-40 object-cover rounded-t-lg"
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-medium mb-2">{item.name}</h3>
                                    <h4 className="text-sm text-gray-500 mb-2">{item.desc}</h4>
                                    <h1 className='text-lg text-blue-500'>Learn More </h1>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right arrow button */}
            {canScrollRight && (
                <button
                    onClick={scrollRight}
                    className="absolute right-0 p-2 z-10 flex items-center"
                    style={{ marginRight: '-2.5rem' }} // Adjust the margin to ensure no extra space
                >
                    <IoIosArrowDropright className="text-gray-500 text-4xl" />
                </button>
            )}
        </div>
    );
};

export default CardCrousel;
