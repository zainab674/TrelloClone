import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { AllUsers, CreateTask, DeleteTask, GetTasks, ProjectDetail, ProjectMembers, UpdateTask, } from '../../api/allApis';
import { useAuth } from '../../Authcontext';
import Nav from '../workspace/elements/nav';
import TaskCard from './elements/taskCard';
import { TaskDetails } from './elements/TaskDetails';
import ProjectHeader from './elements/ProjectHeader';
import { LoadingSpinner } from '../../constants/loadingSpinner';
import SuccessModal from '../../constants/SuccessModal';

const BoardPage = () => {
    const [users, setUsers] = useState([]);
    const [tasksByStatus, setTasksByStatus] = useState({ new: [], inProgress: [], completed: [] });
    const { id } = useParams();  // Get the 'id' from the URL
    const { me, token } = useAuth();
    const [project, setProject] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [currentTask, setCurrentTask] = useState(null);
    const [taskName, setTaskName] = useState('');
    const [priority, setPriority] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [assignedTo, setAssignedTo] = useState([]);
    const [assignedToID, setAssignedToID] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [successMessage, setSuccessMessage] = useState('');


    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

    const openDetailsModal = (task) => {
        setSelectedTask(task);
        setIsDetailModalOpen(true);
    };

    const closeDetailsModal = () => {
        setIsDetailModalOpen(false);
        setSelectedTask(null);
    };


    const Project = async () => {
        try {
            const res = await ProjectDetail(id, token);
            console.log("vghytgh", res)
            setProject(res);

        } catch (error) {
            console.error("Error fetching project DATA:", error);
        }
    };
    const Members = async () => {
        try {
            const res = await ProjectMembers(id, token);
            console.log(res)

            setUsers(res);

        } catch (error) {
            console.error("Error fetching project DATA:", error);
        }
    };

    const FetchAllTasks = async () => {
        try {
            const res = await GetTasks(id);
            const tasks = res || [];
            setTasksByStatus({
                new: tasks.filter(task => task.status === 'new'),
                inProgress: tasks.filter(task => task.status === 'inProgress'),
                completed: tasks.filter(task => task.status === 'completed'),
            });
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    };

    const AddTask = async () => {

        if (!taskName || !priority || !dueDate) {
            alert("Please fill in all fields!");
            return;
        }


        const priorityNumber = parseInt(priority, 10);
        const parsedDueDate = new Date(dueDate);


        const data = {
            taskName,
            priority: priorityNumber,
            dueDate: parsedDueDate.toISOString(),
            projectId: id,
            assignedTo: assignedToID,
            status: "new"
        };

        try {

            await CreateTask(data, token);
            setSuccessMessage('Task Added !');
            FetchAllTasks();
            closeModal();
        } catch (error) {
            console.error("Error adding task:", error);
            setSuccessMessage('Failed to add task.');
        }
    };


    const UpdateTaskk = async (taskId, updatedData) => {
        try {
            await UpdateTask(taskId, updatedData, token);
            // setSuccessMessage('Task Updated !');
            FetchAllTasks();
        } catch (error) {
            console.error("Error updating task:", error);
            setSuccessMessage('Error updating task:');
        }
    };



    const handleEditTask = () => {
        const priorityNumber = parseInt(priority, 10);
        const parsedDueDate = new Date(dueDate);

        const updatedTask = {
            taskName,
            priority: priorityNumber,
            dueDate: parsedDueDate.toISOString(),

            assignedTo: assignedToID,

        };

        UpdateTaskk(currentTask.id, updatedTask);
        closeModal();
        setSuccessMessage('Task Updated !');
    };

    const handleDrop = (task, newStatus) => {
        const updatedTaskData = { ...task, status: newStatus };
        UpdateTaskk(task.id, updatedTaskData);
    };

    const handleDeleteTask = async (taskId) => {
        try {
            await DeleteTask(taskId, token);
            setSuccessMessage('Task Deleted');
            setIsDetailModalOpen(false);
            FetchAllTasks();
        } catch (error) {
            setIsDetailModalOpen(false);
            console.error("Error deleting task:", error);
            setSuccessMessage("Error deleting task:");
        }
    };

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

    const openEditModal = (task, e) => {
        e.stopPropagation();
        setCurrentTask(task);
        setTaskName(task.taskName);
        setPriority(task.priority);
        setDueDate(task.dueDate);

        // Set assignedTo with display names based on the user IDs in task.assignedTo
        const assignedUsers = users.filter(user => task.assignedTo.includes(user.id));
        setAssignedTo(assignedUsers.map(user => user.displayName));
        setAssignedToID(task.assignedTo); // Keep the IDs as is
        setIsEditMode(true);
        setIsModalOpen(true);
    };


    useEffect(() => {
        // Wait until the authentication state is loaded
        if (token && me) {
            setIsLoading(false);
            Project()

            FetchAllTasks();
            Members();

        }
    }, [token, me]);

    if (isLoading || !token || !me) {
        return (
            <LoadingSpinner />
        );
    }


    const TaskColumn = ({ title, tasks, onDrop, openModal, openEditModal, handleDeleteTask, me, project }) => {
        const [, drop] = useDrop({
            accept: 'task',
            drop: (item) => onDrop(item),
        });

        return (
            <div className=" p-4  rounded-md shadow-lg" ref={drop}>

                <h2 className="text-lg font-semibold mb-1">{title}</h2>



                {title === 'Tasks' && (
                    <button className="mt-1 p-2 mb-2 bg-gray-700 hover:bg-gray-600 text-white rounded w-full" onClick={openModal}>
                        Add Task
                    </button>
                )}

                {console.log("Tasks in project:", tasks)}


                {tasks.length > 0 ? (
                    tasks
                        .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate)) // Sort tasks by dueDate in ascending order
                        .map((task) => (
                            <TaskCard
                                key={task.id}
                                task={task}
                                openEditModal={openEditModal}
                                handleDeleteTask={handleDeleteTask}
                                users={users}
                                openDetailsModal={openDetailsModal}
                                me={me}
                                project={project}
                            />
                        ))
                ) : (
                    <p>No tasks available.</p>
                )}


            </div>
        );
    };







    return (
        <>
            <Nav />
            <ProjectHeader project={project} users={users} />
            <DndProvider backend={HTML5Backend}>
                <div className="container mx-auto p-6">
                    <div className="grid grid-cols-3 gap-4">
                        <TaskColumn
                            title="Tasks"
                            tasks={tasksByStatus.new}
                            onDrop={(task) => handleDrop(task, 'new')}
                            openModal={openModal}
                            openEditModal={openEditModal}
                            handleDeleteTask={handleDeleteTask}
                            me={me}
                            project={project}
                        />
                        <TaskColumn
                            title="In Progress"
                            tasks={tasksByStatus.inProgress}
                            onDrop={(task) => handleDrop(task, 'inProgress')}
                            openEditModal={openEditModal}
                            handleDeleteTask={handleDeleteTask}
                            me={me}
                            project={project}
                        />
                        <TaskColumn
                            title="Completed"
                            tasks={tasksByStatus.completed}
                            onDrop={(task) => handleDrop(task, 'completed')}
                            openEditModal={openEditModal}
                            handleDeleteTask={handleDeleteTask}
                            me={me}
                            project={project}
                        />
                    </div>

                    {/* Add/Edit Task Modal */}
                    <Dialog open={isModalOpen} onClose={closeModal} className="fixed inset-0 z-10 flex items-center justify-center">
                        <div className=" bg-white rounded-lg p-6 shadow-lg w-full max-w-lg">
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
                                <div className="flex flex-col">
                                    <label className="mb-2 font-semibold">Select Task Priority:</label>

                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            value="1" // High priority
                                            checked={priority === 1}
                                            onChange={(e) => setPriority(Number(e.target.value))} // Convert to number
                                            className="mr-2"
                                        />
                                        <span>High</span>
                                    </label>

                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            value="2" // Medium priority
                                            checked={priority === 2}
                                            onChange={(e) => setPriority(Number(e.target.value))} // Convert to number
                                            className="mr-2"
                                        />
                                        <span>Medium</span>
                                    </label>

                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            value="3" // Low priority
                                            checked={priority === 3}
                                            onChange={(e) => setPriority(Number(e.target.value))} // Convert to number
                                            className="mr-2"
                                        />
                                        <span>Low</span>
                                    </label>
                                </div>

                                <input
                                    type="date"
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    value={dueDate}
                                    onChange={(e) => setDueDate(e.target.value)}
                                    min={new Date().toISOString().split('T')[0]}  // Disable past dates
                                />

                                {console.log("users", users)}
                                {users.length == 0 ?
                                    "no members in project "
                                    :


                                    <>
                                        <label className="block mb-2">
                                            Assign Members:
                                            <select
                                                multiple
                                                className="w-full p-2 border border-gray-300 rounded-md"
                                                value={assignedToID} // Use ID array for controlled component
                                                onChange={(e) => {
                                                    const selectedOptions = Array.from(e.target.selectedOptions);
                                                    setAssignedTo(selectedOptions.map(option => option.value));  // Set display names
                                                    setAssignedToID(selectedOptions.map(option => option.getAttribute('data-id')));  // Set IDs
                                                }}
                                            >
                                                <option value="" disabled>
                                                    Assigned To
                                                </option>
                                                {users.map((user) => (
                                                    <option
                                                        key={user.id}
                                                        value={user.displayName}  // Value is the display name
                                                        data-id={user.id}         // Store the ID in data-id
                                                        selected={assignedToID.includes(user.id)} // Set selected based on assignedToID
                                                    >
                                                        {user.displayName}
                                                    </option>
                                                ))}
                                            </select>
                                        </label>


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
                                    </>

                                }


                            </div>
                            <div className="mt-6 flex justify-end">
                                <button className="bg-gray-200 px-4 py-2 rounded mr-2" onClick={closeModal}>
                                    Cancel
                                </button>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={isEditMode ? handleEditTask : AddTask}>
                                    {isEditMode ? 'Update Task' : 'Add Task'}
                                </button>
                            </div>
                        </div>
                    </Dialog>
                </div>
            </DndProvider>

            {
                isDetailModalOpen && selectedTask && (

                    <TaskDetails
                        selectedTask={selectedTask}
                        closeDetailsModal={closeDetailsModal}
                        users={users}
                    />
                )
            }


            {successMessage && (
                <SuccessModal
                    message={successMessage}
                    onClose={() => setSuccessMessage('')}
                />
            )}

        </>
    );


};


export default BoardPage;
