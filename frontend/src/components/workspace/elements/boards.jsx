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


        <>
            <div className="flex mt-8 justify-between items-center">
                <h2 className="text-2xl  mb-4 font-semibold">Your Workspaces</h2>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-8 py-4 text-white bg-cyan-800 rounded hover:bg-cyan-600"
                >
                    Create Project
                </button>
            </div>

            <div className="mt-8 mx-8">
                {/* Boards Grid */}
                <div className="flex flex-wrap gap-4">
                    {me.projects && me.projects.length > 0 ? (
                        me.projects
                            .filter((proj) => !proj.isCompleted)
                            .map((proj, index) => (
                                <Board key={index} proj={proj} />
                            ))
                    ) : (
                        <p>No projects found.</p>
                    )}
                </div>

                {/* Shared Projects */}
                <div className="mt-20">
                    <h2 className="text-2xl font-semibold mb-4">Shared Projects</h2>
                    <div className="flex flex-wrap gap-4">
                        {me.sharedProjects && me.sharedProjects.length > 0 ? (
                            me.sharedProjects
                                .filter((proj) => !proj.isCompleted)
                                .map((proj, index) => (
                                    <Board key={index} proj={proj} />
                                ))
                        ) : (
                            <p>No shared projects found.</p>
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

                {/* Success Modal */}
                {successMessage && (
                    <SuccessModal
                        message={successMessage}
                        onClose={() => setSuccessMessage('')}
                    />
                )}
            </div>
        </>


    );
};

export default Boards;
