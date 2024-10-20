import React, { useEffect, useState } from 'react';
import ProjectModal from './projectmodal';
import Board from './BoardCard';
import { useAuth } from '../../../Authcontext';
import { AllUsers, CreateProject, UserProjects } from '../../../api/allApis';
import { useNavigate } from 'react-router-dom';
import SuccessModal from '../../../constants/SuccessModal';


const SharedProjects = () => {
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


            <div className="mt-10">
                <h2 className="text-2xl font-semibold mb-4">Shared Projects</h2>
                <div className="flex flex-wrap">
                    {me.sharedProjects && me.sharedProjects.length > 0 ? (
                        me.sharedProjects.map((proj, index) => (
                            <Board key={index} proj={proj} />
                        ))
                    ) : (
                        <p>No shared projects found.</p>
                    )}
                </div>
            </div>





        </div>

    );
};

export default SharedProjects;
