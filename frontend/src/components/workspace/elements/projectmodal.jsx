import React, { useState } from 'react';

const ProjectModal = ({ isOpen, onClose, onSubmit }) => {
    const [projectTitle, setProjectTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (projectTitle) {
            onSubmit(projectTitle); // Call the onSubmit prop with the project title
            setProjectTitle(''); // Reset input field
            onClose(); // Close the modal
        }
    };

    if (!isOpen) return null; // Don't render anything if the modal is not open

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white rounded-lg p-6 w-1/3">
                <h2 className="text-lg font-semibold mb-4">Create a New Project</h2>
                <form onSubmit={handleSubmit}>
                    <label className="block mb-2">
                        Project Title:
                        <input
                            type="text"
                            value={projectTitle}
                            onChange={(e) => setProjectTitle(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded p-2"
                            required
                        />
                    </label>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="mr-2 px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProjectModal;
