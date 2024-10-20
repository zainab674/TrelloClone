import React, { useEffect, useState } from 'react';
import { useAuth } from '../../Authcontext';
import { LoadingSpinner } from '../../constants/loadingSpinner';
import Nav from '../workspace/elements/nav';
import EditProfileModal from './editProfile';
import { DeleteNotifications, UpdateUser } from '../../api/allApis';
import { useNavigate } from 'react-router-dom';
import { apiConst } from '../../constants/api.constants';

const MeProfile = () => {
    const { me, loading, token, fetchUserProfile } = useAuth();  // Add a loading state if available
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState('profile');
    const navigate = useNavigate();

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const handleSaveProfile = async (updatedProfile) => {
        try {
            console.log('Updated Profile:', updatedProfile);
            await UpdateUser(updatedProfile, token);
            fetchUserProfile();
            setIsEditModalOpen(false);
        } catch (err) {
            console.error(err)
        }
    };
    useEffect(() => {

        if (!loading && me) {
            setIsLoading(false);
        }
    }, [loading, me]);

    if (isLoading || !me) {
        return (
            <LoadingSpinner />
        );
    }

    const handleDelete = async (id) => {
        try {
            const result = await DeleteNotifications(id, token);
            console.log(result)

            fetchUserProfile();

        } catch (error) {
            console.error("Error deleting project:", error);

        }

    };


    const handleClick = (id) => {
        console.log("id", id)
        const url = apiConst.BoardPage.replace(':id', id);
        navigate(url);
    };
    return (
        <>
            <Nav />
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8   bg-gray-900 min-h-screen z-50">
                {/* Sidebar */}
                <div className="w-2/12 p-8 text-white rounded-lg  shadow-md">
                    <ul className="space-y-4">
                        <li className="hover:text-gray-500   cursor-pointer" onClick={() => { setPage('profile') }}>My Profile</li>
                        <li className="hover:text-gray-500  cursor-pointer" onClick={() => { setPage('projects') }}>Projects</li>
                        <li className="hover:text-gray-500  cursor-pointer" onClick={() => { setPage('sharedProjects') }}>Shared Projects</li>
                        <li className="hover:text-gray-500  cursor-pointer" onClick={() => { setPage('tasks') }}>Tasks</li>

                        <li className="hover:text-gray-500   cursor-pointer" onClick={() => { setPage('notify') }}>Notifications</li>

                    </ul>
                </div>


                <div className="w-full  bg-white p-20 shadow-md space-y-8">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                            <img src={me.profile.photoURL ? me.profile.photoURL : "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"} alt={me.profile.displayName} className="w-16 h-16 rounded-full" />
                            <div>
                                <h1 className="text-xl font-bold">{me.profile.displayName}</h1>
                            </div>
                        </div>
                        <button className="flex items-center space-x-2 text-lg mr-8 text-cyan-900 hover:bg-cyan-900 hover:text-white   border px-4 py-1 border-cyan-900"
                            onClick={() => setIsEditModalOpen(true)}
                        >
                            <span>Edit</span>

                        </button>
                    </div>


                    {page == 'profile' &&

                        <>

                            <div className="space-y-6">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-lg font-bold">Personal Information</h2>

                                </div>


                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-gray-500">First Name</p>
                                        <p className="text-lg font-medium">{me.profile.displayName}</p>
                                    </div>

                                    <div>
                                        <p className="text-gray-500">Email address</p>
                                        <p className="text-lg font-medium">{me.profile.email}</p>
                                    </div>

                                    <div className="md:col-span-2">
                                        <p className="text-gray-500">Bio</p>
                                        <p className="text-lg font-medium">{me.profile.about ? me.profile.about : "Description will show here"}</p>
                                    </div>
                                </div>
                            </div>



                        </>
                    }
                    {page == 'projects' &&

                        <>

                            <div className="space-y-6">


                                <div className="p-4">
                                    <h2 className="text-2xl font-bold mb-4">Projects</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        {me.projects.map((project) => (
                                            <div key={project._id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-200">

                                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>


                                                <p className="mb-2">
                                                    <span className="font-medium">Completed:</span> {project.isCompleted ? 'Yes' : 'No'}
                                                </p>


                                                <p className="mb-4">
                                                    <span className="font-medium">Number of Members:</span> {project.members.length}
                                                </p>


                                                <div className="flex justify-between">
                                                    <button className="bg-cyan-800 text-white py-2 px-4 rounded-lg hover:bg-cyan-700"
                                                        onClick={() => handleClick(project._id)}
                                                    >View</button>
                                                    {/* <button className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700">Edit</button> */}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </>
                    }
                    {page == 'sharedProjects' &&

                        <>

                            <div className="space-y-6">

                                <div className="shared-projects grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <h2 className="col-span-full text-2xl font-bold mb-4">Shared Projects</h2>
                                    {me.sharedProjects.length > 0 ? (
                                        me.sharedProjects.map((project) => (
                                            <div className='flex flex-col justify-between'>
                                                <div key={project._id} className="project-card  p-4 bg-white">
                                                    <h3 className="text-xl font-semibold">{project.title}</h3>
                                                    <p className="text-gray-600">Status: {project.isCompleted ? "Completed" : "In Progress"}</p>
                                                    <h4 className="text-lg font-medium mt-2">Members:</h4>
                                                    <ul className="list-disc list-inside">
                                                        {project.members.map((member) => (
                                                            <li key={member._id} className="text-gray-800">{member.displayName}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="flex justify-between">
                                                    <button className="bg-cyan-800 text-white py-2 px-4 rounded-lg hover:bg-cyan-700"
                                                        onClick={() => handleClick(project._id)}
                                                    >View</button>
                                                    {/* <button className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700">Edit</button> */}
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <p>No shared projects available.</p>
                                    )}
                                </div>

                            </div>
                        </>
                    }
                    {page == 'tasks' &&

                        <>

                            <div className="space-y-6">

                                <div className="p-4">
                                    <h2 className="text-2xl font-bold mb-4">Tasks</h2>

                                    {me.tasks.map((task) => (
                                        <div
                                            key={task._id}
                                            className="flex justify-between items-center bg-white shadow-md p-4 mb-4 rounded-lg"
                                        >

                                            <div className="flex-1">
                                                <p className="font-semibold">Task Name:</p>
                                                <p>{task.taskName}</p>
                                            </div>


                                            <div className="flex-1">
                                                <p className="font-semibold">Project Name:</p>
                                                <p>{task.projectId?.title || 'No Project'}</p>
                                            </div>


                                            <div className="flex-1">
                                                <p className="font-semibold">Status:</p>
                                                <p>{task.status || 'N/A'}</p>
                                            </div>


                                            <div className="flex-1">
                                                <p className="font-semibold">Due Date:</p>
                                                <p>{new Date(task.dueDate).toLocaleDateString()}</p>
                                            </div>



                                            <div className="flex-1 justify-between">
                                                <button className="bg-cyan-800 text-white py-2 px-4 rounded-lg hover:bg-cyan-700"
                                                    onClick={() => handleClick(task.projectId.id)}
                                                >View</button>

                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </>
                    }

                    {page === 'notify' && (
                        <>
                            <div className="space-y-6">


                                <div className="p-4">



                                    {me.notify.map((notification) => (
                                        <div
                                            key={notification.id}
                                            className="border p-4 rounded-lg mb-4 shadow-md relative group hover:border-red-500"
                                            onClick={() => { handleDelete(notification.id) }}
                                        >
                                            <p className="text-md font-semibold">{notification.message}</p>
                                            <p className="text-xs text-gray-400">Received at: {new Date(notification.createdAt).toLocaleString()}</p>

                                            {/* Remove text that appears on hover */}
                                            <span className="absolute right-4 top-4 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                                Remove
                                            </span>
                                        </div>

                                    ))}
                                </div>
                            </div>
                        </>
                    )}


                </div>
            </div>



            {isEditModalOpen && (
                <EditProfileModal
                    user={me.profile}
                    onClose={() => setIsEditModalOpen(false)} // Close modal
                    onSave={handleSaveProfile} // Save handler
                />
            )}
        </>
    );
};

export default MeProfile;
