import React, { useEffect, useState } from "react";
import { AllUsers, DeleteProject, UpdateProject } from "../../../api/allApis";
import EditModal from './editModal'; // Ensure you import the modal
import { useAuth } from "../../../Authcontext";
import { useNavigate } from "react-router-dom";
import { apiConst } from "../../../constants/api.constants";
import { ProjectDetails } from "./TaskDetails";
import ConfirmDelete from "../../../constants/ConfiirmDelete";
import SuccessModal from "../../../constants/SuccessModal";


const ProjectHeader = ({ project, users }) => {
    const [members, setMembers] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { token, fetchUserProfile, me, loading } = useAuth();
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const { socket } = useAuth();

    const openDetailsModal = () => {

        setIsDetailModalOpen(true);
    };

    const closeDetailsModal = () => {
        setIsDetailModalOpen(false);

    };

    const fetchAllUsers = async () => {
        try {
            const res = await AllUsers();
            setMembers(res.data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };
    useEffect(() => {
        // Wait until the authentication state is loaded
        if (!loading && me) {
            setIsLoading(false);
            fetchAllUsers();

        }
    }, [loading, me]);

    if (isLoading || !me) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p>Loading profile...</p>
            </div>
        );
    }





    const handleEditSubmit = async (updatedProject) => {
        try {
            // Update the project
            const result = await UpdateProject(project.id, updatedProject, token);


            // Compare the original assignedToID and updated assignedToID
            const originalAssignedToID = project.members || [];
            const updatedAssignedToID = updatedProject.members || [];

            // Identify newly assigned users
            const newUsers = updatedAssignedToID.filter(userID => !originalAssignedToID.includes(userID));
            // console.log("im am new", newUsers)
            console.log("im am original", typeof (originalAssignedToID))
            console.log("im am updated", typeof (updatedAssignedToID))
            console.log("im am original", originalAssignedToID)
            console.log("im am updated", updatedAssignedToID)

            // Notify new users if there are any
            if (newUsers.length > 0) {
                const msg = `You have been assigned to a new project: ${updatedProject.title}`;
                const info = {
                    members: newUsers,
                    message: msg
                };
                console.log(info);
                socket.emit('notifyMembers', info); // Send notification to new members
            }

            // Success message after project update
            setSuccessMessage('Project Updated!');
            fetchUserProfile(); // Update user profile or project data
            setIsModalOpen(false);
        } catch (error) {
            console.error("Error updating project:", error);
            setSuccessMessage("Error updating project.");
        }
    };



    const handleDeleteProject = async () => {

        try {
            const result = await DeleteProject(project.id, token);
            // console.log("Deleted Project: ", result);
            setSuccessMessage('Project Deleted !');
            fetchUserProfile();
            navigate(apiConst.Workspace);
        } catch (error) {
            console.error("Error deleting project:", error);
            setSuccessMessage("Error deleting project:");
        }

    };
    const handleCancelDelete = async (e) => {
        e.stopPropagation();
        setIsDeleteModalOpen(false)
    };

    return (
        <div className=" shadow-lg  overflow-hidden"

        >
            <div
                className="h-40 bg-cover bg-center"
                style={{
                    backgroundImage: 'url("https://grants.gettyimages.com/images/grants/GettyImages-1229275252.png")',
                }}
                onClick={openDetailsModal}
            />
            <div className="p-4 flex justify-between items-center">
                <div className="flex items-center">
                    <span className="text-2xl">🧑‍💻</span>
                    <h1 className="ml-2 text-xl font-semibold">{project.title}</h1>
                </div>

                <div className="flex items-center">
                    <div className="flex -space-x-2">
                        {users.slice(0, 3).map((user, index) => (
                            <div key={index} className="flex items-center">
                                <img
                                    className="w-8 h-8 rounded-full border-2 border-white"
                                    src={user.photoURL || "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"}
                                    alt={`Avatar of ${user.displayName}`}
                                />
                            </div>
                        ))}
                        {users.length > 3 && (
                            <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium border-2 border-white">
                                +{users.length - 3}
                            </span>
                        )}
                    </div>


                    {(project.userId === me.profile._id) ?
                        <>

                            <button
                                onClick={(e) => {
                                    e.stopPropagation()
                                    setIsModalOpen(true)
                                }}

                                className=" ml-4  px-4 py-2 rounded-lg text-white bg-cyan-800  hover:bg-cyan-600"
                            >
                                Edit
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation()
                                    setIsDeleteModalOpen(true)
                                }}
                                className=" ml-4  px-4 py-2 rounded-lg text-white bg-cyan-800  hover:bg-cyan-600"
                            >
                                Delete
                            </button>
                        </>
                        :
                        <>

                        </>
                    }




                </div>
            </div>

            {/* Project Modal for Editing */}
            <EditModal
                isOpen={isModalOpen}
                onClose={(e) => {
                    // e.stopPropagation();
                    setIsModalOpen(false)
                }}
                onSubmit={handleEditSubmit}
                users={members}
                initialData={{
                    title: project.title,
                    description: project.description || '',
                    dueDate: project.dueDate || '',
                    isCompleted: project.isCompleted || false,
                    assignedToID: project.members || []
                }}
            />

            {successMessage && (
                <SuccessModal
                    message={successMessage}
                    onClose={() => setSuccessMessage('')}
                />
            )}


            {
                isDetailModalOpen && project && (

                    <ProjectDetails
                        selectedProject={project}
                        closeDetailsModal={closeDetailsModal}
                        users={users}
                    />
                )
            }



            {
                isDeleteModalOpen && (
                    <ConfirmDelete handleDeletePost={handleDeleteProject} handleCancelDelete={handleCancelDelete} />
                )
            }
        </div >
    );
};

export default ProjectHeader;
