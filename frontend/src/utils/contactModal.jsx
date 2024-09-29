import React from 'react';



const ContactModal = ({ isOpen, onClose }) => {
    const phoneNumbers = [
        '+919529292901',
        '+919417605334',
        '+919929948009',
    ];
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={onClose}
        >
            <div className="bg-white p-5 rounded-lg shadow-lg w-3/4 relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-red-600 text-4xl"
                >
                    &times;
                </button>
                <h2 className=" font-semibold mb-2">Call Any one of these</h2>
                <ul className="mb-4">
                    {phoneNumbers.map((phone, index) => (
                        <li key={index} className="text-red-300 text-xs font-medium hover:text-red-700">
                            {phone}
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    );
};

export default ContactModal;
