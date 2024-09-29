import React, { useEffect, useState } from 'react';
import ProjectModal from './projectmodal';
import Board from './BoardCard';
import { useAuth } from '../../../Authcontext';
import { CreateProject, UserProjects } from '../../../api/allApis';

const Boards = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { token } = useAuth();
    const [myProj, setMyProj] = useState([]); // Initialize as an empty array

    const FetchProjects = async () => {
        try {
            const res = await UserProjects(token);
            console.log("Fetched Projects:", res);


            setMyProj(res.data);

        } catch (error) {
            console.error("Error fetching projects:", error);
        }
    };

    const handleProjectSubmit = async (projectTitle) => {
        const data = {
            title: projectTitle,
        };
        try {
            const result = await CreateProject(data, token);
            console.log("Project created:", result);
            FetchProjects(); // Refresh the project list after creation
        } catch (error) {
            console.error("Error creating project:", error);
        }
    };

    useEffect(() => {
        FetchProjects(); // Fetch projects on component mount
    }, []);

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
                    {myProj && myProj.length > 0 ? (
                        myProj.map((proj, index) => (
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
            />
        </div>
    );
};

export default Boards;
