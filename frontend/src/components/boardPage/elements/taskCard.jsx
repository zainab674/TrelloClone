import { useState } from 'react';
import { useDrag } from 'react-dnd';
import { Menu, Transition } from '@headlessui/react';
import { BsThreeDotsVertical } from 'react-icons/bs'; // Import from react-icons

const TaskCard = ({ task, openDetailsModal, openEditModal, handleDeleteTask, users }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [{ isDragging }, drag] = useDrag({
        type: 'task',
        item: { id: task.id },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const getPriorityLabel = (priority) => {
        switch (priority) {
            case 1:
                return { label: 'Highh', bgColor: 'bg-red-200', color: "text-red-700" };
            case 2:
                return { label: 'Medium', bgColor: 'bg-yellow-200', color: "text-yellow-600" };
            case 3:
                return { label: 'Low', bgColor: 'bg-green-200', color: "text-green-700" };
            default:
                return { label: 'Unknown', bgColor: 'bg-gray-200', color: "text-gray-600" };
        }
    };

    const { label: priorityLabel, bgColor: priorityBgColor, color: priorityColor } = getPriorityLabel(task.priority);

    // Find user photos based on assigned user IDs
    const assignedUserPhotos = task.assignedTo.map(userId => {
        const user = users.find(user => user.id === userId);
        return user ? user.photoURL || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" : null; // Return the user's photoURL or null if not found
    }).filter(photo => photo !== null); // Filter out any null values

    return (
        <div
            ref={drag}
            className={`relative p-2 mb-2 bg-white rounded shadow-lg ${isDragging ? 'opacity-50' : 'opacity-100'}`}
            onClick={(e) => {
                e.stopPropagation();
                openDetailsModal(task)
            }}
        >
            {/* First row: Priority label and menu icon */}
            <div className="flex justify-between items-center mb-2">
                <span className={`text-xs px-1 py-0.5 rounded  ${priorityBgColor}  ${priorityColor}`}>
                    {priorityLabel}
                </span>
                <div className="relative inline-block text-left">
                    <Menu>
                        <div>
                            <Menu.Button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsMenuOpen(!isMenuOpen)
                                }} // Toggle menu on icon click
                                className="inline-flex justify-center w-full text-sm font-medium text-gray-700 hover:text-gray-900"
                            >
                                <BsThreeDotsVertical className="w-5 h-5" />
                            </Menu.Button>
                        </div>
                        <Transition
                            show={isMenuOpen}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 w-28 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg focus:outline-none"
                                onClick={() => {

                                    setIsMenuOpen(false); // Close menu after selection
                                }}
                            >
                                <div className="py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                onClick={(e) => {
                                                    openEditModal(task, e);
                                                    setIsMenuOpen(false); // Close menu after selection
                                                }}
                                                className={`flex w-full px-4 py-2 text-sm text-gray-700 ${active ? 'bg-gray-100' : ''}`}
                                            >
                                                Edit
                                            </button>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                onClick={() => {
                                                    handleDeleteTask(task.id);
                                                    setIsMenuOpen(false); // Close menu after selection
                                                }}
                                                className={`flex w-full px-4 py-2 text-sm text-gray-700 ${active ? 'bg-gray-100' : ''}`}
                                            >
                                                Delete
                                            </button>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>

            {/* Second row: Task name */}
            <h3 className="font-bold mb-2">{task.taskName}</h3>

            {/* Third row: Assigned user photos */}
            <div className="flex space-x-1">
                {assignedUserPhotos.map((photo, index) => (
                    <img
                        key={index}
                        src={photo}
                        alt="User"
                        className="w-8 h-8 rounded-full border border-gray-300"
                    />
                ))}
            </div>
        </div>
    );
};

export default TaskCard;
