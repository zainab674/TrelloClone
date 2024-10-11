import React, { useState, useEffect } from 'react';

const EditModal = ({ isOpen, onClose, onSubmit, users, initialData }) => {
    const [projectTitle, setProjectTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [isCompleted, setIsCompleted] = useState(false);
    const [assignedToID, setAssignedToID] = useState([]);

    useEffect(() => {
        if (isOpen) {
            setProjectTitle(initialData.title || '');
            setDescription(initialData.description || '');
            setDueDate(initialData.dueDate || '');
            setIsCompleted(initialData.isCompleted || false);
            setAssignedToID(initialData.assignedToID || []);
        }
    }, [isOpen, initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (projectTitle && assignedToID.length > 0) {
            onSubmit({
                "title": projectTitle,
                description, dueDate, isCompleted,
                "members": assignedToID

            });
            // Reset the form fields
            setProjectTitle('');
            setDescription('');
            setDueDate('');
            setIsCompleted(false);
            setAssignedToID([]);
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white rounded-lg p-6 w-1/3">
                <h2 className="text-lg font-semibold mb-4">Edit Project</h2>
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

                    <label className="block mb-2">
                        Description:
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded p-2"
                            required
                        />
                    </label>

                    <label className="block mb-2">
                        Due Date:
                        <input
                            type="date"
                            value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)}
                            min={new Date().toISOString().split("T")[0]} // Prevent past dates
                            className="mt-1 block w-full border border-gray-300 rounded p-2"
                            required
                        />
                    </label>

                    <label className="block mb-2">
                        Completed:
                        <input
                            type="checkbox"
                            checked={isCompleted}
                            onChange={(e) => setIsCompleted(e.target.checked)}
                            className="ml-2"
                        />
                    </label>

                    <label className="block mb-2">
                        Assign Members:
                        <select
                            multiple
                            className="w-full p-2 border border-gray-300 rounded-md"
                            value={assignedToID}
                            onChange={(e) => {
                                const selectedOptions = Array.from(e.target.selectedOptions);
                                setAssignedToID(selectedOptions.map(option => option.value));
                            }}
                        >
                            {users.map((user) => (
                                <option key={user.id} value={user.id}>
                                    {user.displayName}
                                </option>
                            ))}
                        </select>
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
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditModal;
