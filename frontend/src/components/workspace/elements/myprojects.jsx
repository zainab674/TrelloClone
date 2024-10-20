import React, { useEffect, useState } from 'react';
import ProjectModal from './projectmodal';
import Board from './BoardCard';
import { useAuth } from '../../../Authcontext';
import { AllUsers, CreateProject, UserProjects } from '../../../api/allApis';
import { useNavigate } from 'react-router-dom';
import SuccessModal from '../../../constants/SuccessModal';


const MyProjects = () => {
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
        <div className="mt-8 mx-8">

            <h2 className="text-2xl font-semibold mb-4">My Projects</h2>

            {/* Boards Grid */}
            <div className="flex flex-wrap">
                {me.projects && me.projects.length > 0 ? (
                    me.projects.map((proj, index) => (
                        <Board key={index} proj={proj} />
                    ))
                ) : (
                    <p>No projects found.</p>
                )}
            </div>





        </div>

    );
};

export default MyProjects;
