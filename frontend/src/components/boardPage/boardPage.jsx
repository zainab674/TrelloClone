// import { useParams } from 'react-router-dom';

// const BoardPage = () => {
//     const { id } = useParams();  // Get the 'id' from the URL

//     return (
//         <>
//             {/* <h1>hiuytrewqasdfzcx</h1> */}
//             <p>Project ID: {id}</p>  {/* Display the ID in a paragraph */}
//         </>
//     );
// };

// export default BoardPage;





import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { AllUsers, CreateTask } from '../../api/allApis';
import { useAuth } from '../../Authcontext';
import Nav from '../workspace/elements/nav';








// const users = ['John Doe', 'Jane Smith', 'Alice Johnson'];

const BoardPage = () => {
    const [users, setUsers] = useState([]);
    const { id } = useParams();  // Get the 'id' from the URL

    const FetchAllUsers = async () => {
        try {
            const res = await AllUsers();
            console.log("Fetched Users:", res.data);


            setUsers(res.data);

        } catch (error) {
            console.error("Error fetching Users:", error);
        }
    };



    useEffect(() => {
        FetchAllUsers(); // Fetch projects on component mount
    }, []);
    const { me } = useAuth();
    const { token } = useAuth();
    console.log("hhhhh", me)

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [currentTask, setCurrentTask] = useState(null);
    const [taskName, setTaskName] = useState('');
    const [priority, setPriority] = useState('');
    const [dueDate, setDueDate] = useState('');

    const [assignedTo, setAssignedTo] = useState([]);
    const [assignedToID, setAssignedToID] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [columns, setColumns] = useState({
        tasks: [],
        inProgress: [],
        completed: [],
    });
    const [assignedBy, setAssignedBy] = useState(me ? me.profile.displayName : '');

    // Inside your useEffect or after you fetch user data, you can set assignedBy again
    useEffect(() => {
        if (me) {
            setAssignedBy(me.profile.displayName);
        }
    }, [me]);



    const openModal = () => {
        resetForm();
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setIsEditMode(false);
        setCurrentTask(null);
    };

    const resetForm = () => {
        setTaskName('');
        setPriority('');
        setDueDate('');

        setAssignedTo([]);
    };



    const AddTask = async (data, token) => {

        try {
            const result = await CreateTask(data, token);
            console.log("task created:", result);
            // FetchProjects(); 
        } catch (error) {
            console.error("Error creating task:", error);
        }
    };


    const handleAddTask = () => {
        if (!taskName || !priority || !dueDate || assignedTo.length === 0) {
            alert("Please fill in all fields!");
            return;
        }

        // Ensure priority is a number and within the required range
        const priorityNumber = parseInt(priority, 10);
        if (isNaN(priorityNumber) || priorityNumber < 1 || priorityNumber > 3) {
            alert("Priority must be a number between 1 and 3.");
            return;
        }

        // Convert dueDate to a Date object if necessary
        const parsedDueDate = new Date(dueDate);
        if (isNaN(parsedDueDate)) {
            alert("Due date must be a valid date.");
            return;
        }

        const newTask = {
            id: tasks.length + 1, // Consider changing this to a unique identifier
            taskName,
            priority, // Ensure priority is a number
            dueDate,
            assignedBy,
            assignedTo,
        };

        const data = {
            taskName,
            priority: priorityNumber, // Use number priority
            dueDate: parsedDueDate.toISOString(),  // Use Date object for dueDate
            projectId: id, // Ensure this is correct as per your API's requirements
            assignedTo: assignedToID, // Pass assignedTo as an array
        };

        // Call the API to add the task
        AddTask(data, token)
            .then(() => {
                setTasks([...tasks, newTask]);
                setColumns({ ...columns, tasks: [...columns.tasks, newTask] });
                closeModal();
            })
            .catch((error) => {
                console.error("Error adding task:", error);
                alert("Failed to add task. Please try again.");
            });
    };



    const handleEditTask = () => {
        const updatedTask = {
            ...currentTask,
            taskName,
            priority,
            dueDate,
            assignedBy,
            assignedTo,
        };
        const updatedColumns = {
            tasks: columns.tasks.map((t) => (t.id === currentTask.id ? updatedTask : t)),
            inProgress: columns.inProgress.map((t) => (t.id === currentTask.id ? updatedTask : t)),
            completed: columns.completed.map((t) => (t.id === currentTask.id ? updatedTask : t)),
        };
        setColumns(updatedColumns);
        closeModal();
    };

    const handleDrop = (task, newStatus) => {
        const updatedColumns = {
            tasks: columns.tasks.filter((t) => t.id !== task.id),
            inProgress: columns.inProgress.filter((t) => t.id !== task.id),
            completed: columns.completed.filter((t) => t.id !== task.id),
            [newStatus]: [...columns[newStatus], { ...task, status: newStatus }],
        };
        setColumns(updatedColumns);
    };

    const handleDeleteTask = (taskId) => {
        const updatedColumns = {
            tasks: columns.tasks.filter((t) => t.id !== taskId),
            inProgress: columns.inProgress.filter((t) => t.id !== taskId),
            completed: columns.completed.filter((t) => t.id !== taskId),
        };
        setColumns(updatedColumns);
    };

    const openEditModal = (task) => {
        setCurrentTask(task);
        setTaskName(task.taskName);
        setPriority(task.priority);
        setDueDate(task.dueDate);

        setAssignedTo(task.assignedTo);
        setIsEditMode(true);
        setIsModalOpen(true);
    };

    return (

        <>

            <Nav />
            <DndProvider backend={HTML5Backend}>
                <div className="container mx-auto p-6">
                    <div className="grid grid-cols-3 gap-4">
                        <TaskColumn
                            title="Tasks"
                            tasks={columns.tasks}
                            onDrop={(task) => handleDrop(task, 'tasks')}
                            openModal={openModal}
                            openEditModal={openEditModal}
                            handleDeleteTask={handleDeleteTask}
                        />
                        <TaskColumn
                            title="In Progress"
                            tasks={columns.inProgress}
                            onDrop={(task) => handleDrop(task, 'inProgress')}
                            openEditModal={openEditModal}
                            handleDeleteTask={handleDeleteTask}
                        />
                        <TaskColumn
                            title="Completed"
                            tasks={columns.completed}
                            onDrop={(task) => handleDrop(task, 'completed')}
                            openEditModal={openEditModal}
                            handleDeleteTask={handleDeleteTask}
                        />
                    </div>

                    {/* Add/Edit Task Modal */}
                    <Dialog
                        open={isModalOpen}
                        onClose={closeModal}
                        className="fixed inset-0 z-10 flex items-center justify-center"
                    >
                        <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-lg">
                            <h2 className="text-xl font-semibold mb-4">
                                {isEditMode ? 'Edit Task' : 'Add Task'}
                            </h2>
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Task Name"
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    value={taskName}
                                    onChange={(e) => setTaskName(e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder="Priority"
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    value={priority}
                                    onChange={(e) => setPriority(e.target.value)}
                                />
                                <input
                                    type="date"
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    value={dueDate}
                                    onChange={(e) => setDueDate(e.target.value)}
                                />
                                {/* <select
                                className="w-full p-2 border border-gray-300 rounded-md"
                                value={assignedBy}
                                onChange={(e) => setAssignedBy(e.target.value)}
                            >
                                <option value="" disabled>
                                    Assigned By
                                </option>
                                {users.map((user) => (
                                    <option key={user} value={user.displayName}>
                                        {user.displayName}
                                    </option>
                                ))}
                            </select> */}
                                <select
                                    multiple
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    value={assignedTo}
                                    onChange={(e) => {
                                        const selectedOptions = Array.from(e.target.selectedOptions);
                                        setAssignedTo(selectedOptions.map(option => option.value));  // Display names
                                        setAssignedToID(selectedOptions.map(option => option.getAttribute('data-id')));  // IDs
                                    }}
                                >
                                    <option value="" disabled>
                                        Assigned To
                                    </option>
                                    {users.map((user) => (
                                        <option key={user.id} value={user.displayName} data-id={user.id}>
                                            {user.displayName}
                                        </option>
                                    ))}
                                </select>

                            </div>
                            <div className="mt-6 flex justify-end">
                                <button
                                    className="bg-gray-200 px-4 py-2 rounded mr-2"
                                    onClick={closeModal}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="bg-blue-500 text-white px-4 py-2 rounded"
                                    onClick={isEditMode ? handleEditTask : handleAddTask}
                                >
                                    {isEditMode ? 'Update Task' : 'Add Task'}
                                </button>
                            </div>
                        </div>
                    </Dialog>
                </div>
            </DndProvider>
        </>
    );
};

const TaskColumn = ({ title, tasks, onDrop, openModal, openEditModal, handleDeleteTask }) => {
    const [, drop] = useDrop({
        accept: 'task',
        drop: (item) => onDrop(item),
    });

    return (
        <div className="bg-gray-100 p-4 rounded-md shadow-lg" ref={drop}>
            <h2 className="text-lg font-semibold mb-4">{title}</h2>
            {tasks.length > 0 ? (
                tasks.map((task) => (
                    <TaskCard
                        key={task.id}
                        task={task}
                        openEditModal={openEditModal}
                        handleDeleteTask={handleDeleteTask}
                    />
                ))
            ) : (
                <p className="text-gray-500">No tasks here</p>
            )}
            {title === 'Tasks' && (
                <button
                    onClick={openModal}
                    className="bg-green-500 text-white w-full py-2 mt-4 rounded-md"
                >
                    + Add Task
                </button>
            )}
        </div>
    );
};

const TaskCard = ({ task, openEditModal, handleDeleteTask }) => {
    const [, drag] = useDrag({
        type: 'task',
        item: task,
    });

    return (
        <div className="bg-white p-4 mb-4 shadow-md rounded-md" ref={drag}>
            <h3 className="text-lg font-semibold">{task.taskName}</h3>
            <p className="text-sm text-gray-600">Priority: {task.priority}</p>
            <p className="text-sm text-gray-600">Due: {task.dueDate}</p>
            <p className="text-sm text-gray-600">Assigned By: {task.assignedBy}</p>
            <p className="text-sm text-gray-600">Assigned To: {task.assignedTo.join(', ')}</p>
            <div className="flex justify-end space-x-2 mt-2">
                <button
                    onClick={() => openEditModal(task)}
                    className="text-blue-500 text-sm"
                >
                    Edit
                </button>
                <button
                    onClick={() => handleDeleteTask(task.id)}
                    className="text-red-500 text-sm"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default BoardPage;
