import React, { useEffect, useState } from 'react';
import ProjectModal from './projectmodal';
import Board from './BoardCard';
import { useAuth } from '../../../Authcontext';
import { AllUsers, CreateProject, UserProjects } from '../../../api/allApis';
import { useNavigate } from 'react-router-dom';

const Boards = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { token } = useAuth();
    const [isLoading, setIsLoading] = useState(true);
    const { me, loading } = useAuth();

    const [users, setUsers] = useState('');
    const navigate = useNavigate();
    const FetchAllUsers = async () => {
        try {
            const res = await AllUsers();
            setUsers(res.data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };
    const handleProjectSubmit = async (projectTitle, assignedToID) => {
        const data = {
            title: projectTitle,
            members: assignedToID
        };
        try {
            const result = await CreateProject(data, token);
            console.log("Project created:", result);
            // Refresh the project list after creation
        } catch (error) {
            console.error("Error creating project:", error);
        }
    };
    useEffect(() => {
        // Wait until the authentication state is loaded
        if (!loading && me) {
            setIsLoading(false);
            FetchAllUsers()
        }
    }, [loading, me, navigate]);

    if (isLoading || !me) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p>Loading profile...</p>
            </div>
        );
    }










    return (
        <div className="p-6">
            <button
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
                Create Project
            </button>

            <div className="mt-20">
                <h2 className="text-xl font-semibold mb-4">Your Workspaces</h2>
                <div className="flex items-center justify-between mb-6">
                    <div className="flex space-x-2">
                        <button className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded">
                            Boards
                        </button>
                        <button className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded">
                            Views
                        </button>
                        <button className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded">
                            Members (1)
                        </button>
                        <button className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded">
                            Settings
                        </button>
                        <button className="bg-purple-700 hover:bg-purple-600 text-white p-2 rounded">
                            Upgrade
                        </button>
                    </div>
                </div>

                {/* Boards Grid */}
                <div className="grid grid-cols-2 gap-4">
                    {me.projects && me.projects.length > 0 ? (
                        me.projects.map((proj, index) => (
                            <Board key={index} proj={proj} />
                        ))
                    ) : (
                        <p>No projects found.</p> // Display a message if no projects
                    )}
                </div>
            </div>
            <div className="mt-20">
                <h2 className="text-xl font-semibold mb-4">Assigned projects</h2>


                {/* Boards Grid */}
                <div className="grid grid-cols-2 gap-4">
                    {me.sharedProjects && me.sharedProjects.length > 0 ? (
                        me.sharedProjects.map((proj, index) => (
                            <Board key={index} proj={proj} />
                        ))
                    ) : (
                        <p>No projects found.</p> // Display a message if no projects
                    )}
                </div>
            </div>

            {/* Project Modal */}
            <ProjectModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleProjectSubmit}
                users={users}
            />
        </div>
    );
};

export default Boards;
