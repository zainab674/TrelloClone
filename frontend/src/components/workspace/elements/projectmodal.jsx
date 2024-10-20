import React, { useState } from 'react';

const ProjectModal = ({ isOpen, onClose, onSubmit, users }) => {
    const [projectTitle, setProjectTitle] = useState('');
    const [assignedTo, setAssignedTo] = useState('');
    const [assignedToID, setAssignedToID] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (projectTitle && assignedToID) {
            onSubmit(projectTitle, assignedToID);
            setProjectTitle('');
            setAssignedToID('');
            setAssignedTo('');
            onClose();
        }
    };
    const Close = (e) => {
        e.preventDefault();
        if (assignedToID) {

            setAssignedTo('');
            onClose();
        }
        onClose();
    };

    if (!isOpen) return null;

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



                    <select
                        multiple
                        className="w-full p-2 border border-gray-300 rounded-md"
                        value={assignedToID} // Keep this as assignedToID
                        onChange={(e) => {
                            const selectedOptions = Array.from(e.target.selectedOptions);
                            setAssignedTo(selectedOptions.map(option => option.value));  // Display names
                            setAssignedToID(selectedOptions.map(option => option.getAttribute('data-id')));  // IDs
                        }}
                    >
                        <option value="" disabled>
                            Add Members
                        </option>
                        {users.map((user) => (
                            <option
                                key={user.id}
                                value={user.displayName}
                                data-id={user.id}
                            >
                                {user.displayName}
                            </option>
                        ))}
                    </select>

                    {/* Display Selected Users */}
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold">Selected Members:</h3>
                        {assignedTo.length > 0 ? (
                            <ul className="list-disc pl-5">
                                {assignedTo.map((member, index) => (
                                    <li key={index}>{member}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No members selected.</p>
                        )}
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={Close}
                            className="mr-2 px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 text-white bg-cyan-800 rounded hover:bg-cyan-600"
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
