import React, { useEffect, useState } from "react";
import { AllUsers, DeleteProject, UpdateProject } from "../../../api/allApis";
import EditModal from './editModal'; // Ensure you import the modal
import { useAuth } from "../../../Authcontext";
import { useNavigate } from "react-router-dom";
import { apiConst } from "../../../constants/api.constants";

const ProjectHeader = ({ project, users }) => {
    const [members, setMembers] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { token } = useAuth();
    const navigate = useNavigate();

    const fetchAllUsers = async () => {
        try {
            const res = await AllUsers();
            setMembers(res.data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    useEffect(() => {
        fetchAllUsers();
    }, []);

    const handleEditSubmit = async (updatedProject) => {

        console.log("hi ia m working")


        // Call UpdateProject API
        const result = await UpdateProject(project.id, updatedProject, token);
        console.log("Updated Project: ", result);





    };


    const handleDeleteProject = async () => {

        const result = await DeleteProject(project.id, token);
        console.log("deleted Project: ", result);
        navigate(apiConst.Workspace);
    }

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div
                className="h-40 bg-cover bg-center"
                style={{
                    backgroundImage: 'url("https://grants.gettyimages.com/images/grants/GettyImages-1229275252.png")',
                }}
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
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="ml-4 bg-blue-500 text-white rounded-full px-4 py-2 font-medium hover:bg-blue-600"
                    >
                        Edit
                    </button>
                    <button
                        onClick={handleDeleteProject}
                        className="ml-4 bg-blue-500 text-white rounded-full px-4 py-2 font-medium hover:bg-blue-600"
                    >
                        Delete
                    </button>
                </div>
            </div>

            {/* Project Modal for Editing */}
            <EditModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleEditSubmit}
                users={members}
                initialData={{
                    title: project.title,
                    description: project.description || '',
                    dueDate: project.dueDate || '',
                    isCompleted: project.isCompleted || false,
                    assignedToID: project.assignedToID || []
                }}
            />
        </div>
    );
};

export default ProjectHeader;
