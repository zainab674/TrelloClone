import React, { useState } from 'react';

const defaultProfilePictures = [
    'https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg',
    'https://cdn.vectorstock.com/i/1000v/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg',
    'https://as1.ftcdn.net/v2/jpg/02/30/60/82/1000_F_230608264_fhoqBuEyiCPwT0h9RtnsuNAId3hWungP.jpg',
    'https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg',


];

const EditProfileModal = ({ user, onClose, onSave }) => {
    const [displayName, setDisplayName] = useState(user.displayName || '');
    const [about, setAbout] = useState(user.about || '');
    const [photoURL, setPhotoURL] = useState(user.photoURL || ''); // URL for the image

    const handleSave = () => {
        const updatedProfile = {
            displayName,
            about,
            photoURL, // Send the selected photoURL or default image URL
        };
        onSave(updatedProfile);
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">
                <h2 className="text-xl font-bold mb-6">Edit Profile</h2>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Display Name</label>
                    <input
                        type="text"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">About</label>
                    <textarea
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Choose a Profile Picture</label>
                    <div className="grid grid-cols-3 gap-4">
                        {defaultProfilePictures.map((url, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <img
                                    src={url}
                                    alt={`Default Avatar ${index + 1}`}
                                    className={`w-16 h-16 rounded-full cursor-pointer ${photoURL === url ? 'ring-4 ring-blue-500' : ''
                                        }`}
                                    onClick={() => setPhotoURL(url)} // Set the selected URL as photoURL
                                />
                                <p className="text-sm text-gray-600 mt-2">Avatar {index + 1}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-end space-x-4">
                    <button
                        onClick={onClose}
                        className="bg-gray-500 text-white px-4 py-2 rounded"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className="bg-blue-600 text-white px-4 py-2 rounded"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditProfileModal;
