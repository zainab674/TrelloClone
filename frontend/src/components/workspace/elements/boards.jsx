import React, { useEffect, useState } from 'react';

import ProjectModal from './projectmodal'; // Import the new modal component
import { useAuth } from '../../../Authcontext';
import { CreateProject } from '../../../api/allApis';

const Boards = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { token } = useAuth();




    const FetchProjects = async () => {

        const res = await UserProjects(token);
        console.log(res);
    };

    const handleProjectSubmit = async (projectTitle) => {
        const data = {
            title: projectTitle,
        }
        const result = await CreateProject(data, token);
        console.log(result);
        FetchProjects()
    };

    useEffect((
        FetchProjects()

    ), [])


    return (
        <div className="p-6">
            <button
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
                Create Project
            </button>

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
