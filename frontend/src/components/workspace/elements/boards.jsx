import React, { useEffect, useState } from 'react';
import ProjectModal from './projectmodal';
import Board from './BoardCard';
import { useAuth } from '../../../Authcontext';
import { AllUsers, CreateProject, UserProjects } from '../../../api/allApis';
import { useNavigate } from 'react-router-dom';
import SuccessModal from '../../../constants/SuccessModal';
import { io } from 'socket.io-client';

const Boards = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { token } = useAuth();
    const [isLoading, setIsLoading] = useState(true);
    const { me, loading, fetchUserProfile, socket } = useAuth();
    const [successMessage, setSuccessMessage] = useState('');
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

            setSuccessMessage('Project Created !');

            const msg = `You have been assigned to a new project: ${projectTitle}`;


            const member = assignedToID
            const info = {
                members: member,
                message: msg
            }
            console.log(info)
            socket.emit('notifyMembers', info);
            fetchUserProfile()

        } catch (error) {
            console.error("Error creating project:", error);
            setSuccessMessage('Error creating project: !');
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
                <h2 className="text-xl font-semibold mb-4">Shared projects</h2>


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
            {successMessage && (
                <SuccessModal
                    message={successMessage}
                    onClose={() => setSuccessMessage('')}
                />
            )}
        </div>
    );
};

export default Boards;
