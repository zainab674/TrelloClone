import React, { useRef, useState, useEffect } from 'react';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';

const CategoryCrousel = ({ Menu }) => {
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
            container.removeEventListener('scroll', checkScrollPosition);
        };
    }, []);

    return (
        <div className="bg-white py-4 w-full flex items-center md:px-20">
            {/* Left arrow button */}
            {canScrollLeft && (
                <button
                    onClick={scrollLeft}
                    className="p-2 absolute left-0 ml-7 md:ml-10 lg:ml-14 z-10 items-center hidden md:flex"
                >
                    <IoIosArrowDropleft className="text-gray-500 text-4xl" />
                </button>
            )}

            {/* Scrollable Menu */}
            <div className="flex-1 flex overflow-hidden md:mx-2 mx-0 md:mr-3 md:ml-2 mt-4 relative">
                <ul
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto scrollbar-hide"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {Menu.map((item) => (
                        <li key={item.id} className="mx-7">
                            <div className="flex-shrink-0 w-32 transition-transform duration-300 transform">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="w-32 h-32 object-cover rounded-full"
                                />
                                <p className="mt-2 text-center text-lg">{item.name}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right arrow button */}
            {canScrollRight && (
                <button
                    onClick={scrollRight}
                    className="p-2 absolute right-0 md:mr-10 lg:mr-8 mr-0 mb-2 z-10 items-center hidden md:flex"
                >
                    <IoIosArrowDropright className="text-gray-500 bg-white rounded-full text-4xl" />
                </button>
            )}
        </div>
    );

};

export default CategoryCrousel;
