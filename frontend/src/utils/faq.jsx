



import React, { useState } from 'react';

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";


function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div
                className="flex justify-between items-center py-4 mb-6 w-full cursor-pointer border-t"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h2 className="text-xl font-normal text-gray-950 ">{question}</h2>
                <span className="text-gray-500">{isOpen ? <IoIosArrowUp className='text-xl text-gray-800 font-bold ' /> : <IoIosArrowDown className='text-xl text-gray-800 font-bold ' />}</span>
            </div>
            {isOpen && <p className="text-gray-500 text-lg  font-normal text-left ">{answer}</p>}
        </div>
    );
}
export default FAQItem;