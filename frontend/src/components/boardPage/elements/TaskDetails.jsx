const TaskDetails = ({ selectedTask, closeDetailsModal, users }) => {
    if (!selectedTask) return null;


    const getPriorityLabel = (priority) => {
        switch (priority) {
            case 1:
                return { label: 'High', bgColor: 'bg-red-700', color: "text-red-900" };
            case 2:
                return { label: 'Medium', bgColor: 'bg-yellow-700', color: "text-yellow-600" };
            case 3:
                return { label: 'Low', bgColor: 'bg-green-700', color: "text-green-600" };
            default:
                return { label: 'Unknown', bgColor: 'bg-gray-700', color: "text-gray-600" };
        }
    };

    const { label: priorityLabel, bgColor: priorityBgColor, color: priorityColor } = getPriorityLabel(selectedTask.priority);
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={closeDetailsModal}>
            <div className="bg-white p-4 rounded shadow-lg w-96">
                <button onClick={closeDetailsModal} className="text-right mb-4">Close</button>

                <h3 className="text-xl font-bold">{selectedTask.taskName}</h3>
                <p>Priority: {priorityLabel}</p>
                <p>Status: {selectedTask.status}</p>
                <p>Due Date: {selectedTask.dueDate}</p>
                <p>Assigned By: {selectedTask.assignedBy}</p>

                <div>
                    <h4>Assigned To:</h4>
                    <div className="flex space-x-2">
                        {selectedTask.assignedTo.map(userId => {
                            const user = users.find(user => user.id === userId);
                            return (
                                <div key={userId} className="flex items-center space-x-2">
                                    <img
                                        src={user?.photoURL || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}
                                        alt={user?.displayName}
                                        className="w-8 h-8 rounded-full"
                                    />
                                    <p>{user?.displayName}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};



export default TaskDetails;