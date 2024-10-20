import React, { useEffect, useState } from 'react';
import ProjectModal from './projectmodal';
import Board from './BoardCard';
import { useAuth } from '../../../Authcontext';
import { AllUsers, CreateProject, UserProjects } from '../../../api/allApis';
import { useNavigate } from 'react-router-dom';
import SuccessModal from '../../../constants/SuccessModal';
import { io } from 'socket.io-client';

const CompletedProjects = ({ handleClick }) => {
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



        <div className="mt-8 mx-8 flex-1">
            <div className="mt-10">
                <h2 className="text-2xl font-semibold mb-4">Completed Projects</h2>
                <div>
                    {me.projects && me.sharedProjects ? (
                        (() => {
                            const combinedProjects = [
                                ...me.projects.filter((proj) => proj.isCompleted),
                                ...me.sharedProjects.filter((proj) => proj.isCompleted),
                            ];
                            const uniqueProjects = Array.from(
                                new Map(combinedProjects.map((proj) => [proj.id, proj])).values()
                            );
                            return uniqueProjects.length > 0 ? (
                                uniqueProjects.map((proj, index) => (
                                    <div key={index} className="bg-white shadow-md p-4 mb-4 rounded-lg">
                                        <div className="flex flex-wrap justify-between w-full">
                                            <div className="flex-1 mb-4 sm:mb-0">
                                                <p className="font-semibold">Project Name:</p>
                                                <p>{proj.title}</p>
                                            </div>
                                            <div className="flex-1 mb-4 sm:mb-0">
                                                <p className="font-semibold">Status:</p>
                                                <p>{proj.isCompleted ? "Completed" : "On Going" || "N/A"}</p>
                                            </div>
                                            <div className="flex-1 mb-4 sm:mb-0">
                                                <p className="font-semibold">Due Date:</p>
                                                <p>{new Date(proj.dueDate).toLocaleDateString()}</p>
                                            </div>
                                            <div className="flex-1 flex justify-end">
                                                <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700" onClick={() => handleClick(proj.id)}>
                                                    View
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>No completed projects or shared projects found.</p>
                            );
                        })()
                    ) : (
                        <p>Loading projects...</p>
                    )}
                </div>
            </div>
        </div>



    );
};

export default CompletedProjects;
















// import React, { useEffect, useState } from 'react';
// import ProjectModal from './projectmodal';
// import Board from './BoardCard';
// import { useAuth } from '../../../Authcontext';
// import { AllUsers, CreateProject, UserProjects } from '../../../api/allApis';
// import { useNavigate } from 'react-router-dom';
// import SuccessModal from '../../../constants/SuccessModal';
// import { io } from 'socket.io-client';

// const CompletedProjects = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const { token } = useAuth();
//     const [isLoading, setIsLoading] = useState(true);
//     const { me, loading, fetchUserProfile, socket } = useAuth();
//     const [successMessage, setSuccessMessage] = useState('');
//     const [users, setUsers] = useState('');

//     const navigate = useNavigate();
//     const FetchAllUsers = async () => {
//         try {
//             const res = await AllUsers();
//             setUsers(res.data);
//         } catch (error) {
//             console.error("Error fetching users:", error);
//         }
//     };

//     useEffect(() => {
//         // Wait until the authentication state is loaded
//         if (!loading && me) {
//             setIsLoading(false);
//             FetchAllUsers()
//         }
//     }, [loading, me, navigate]);

//     if (isLoading || !me) {
//         return (
//             <div className="flex justify-center items-center min-h-screen">
//                 <p>Loading profile...</p>
//             </div>
//         );
//     }










//     return (
//         <div className="mt-8 mx-8">

//             <h2 className="text-xl font-semibold mb-4">Completed Projects</h2>
//             <div className="">
//                 {me.projects && me.sharedProjects ? (
//                     // Combine the filtered arrays and remove duplicates by project ID
//                     (() => {
//                         // Combine and filter by `isCompleted`
//                         const combinedProjects = [
//                             ...me.projects.filter((proj) => proj.isCompleted),
//                             ...me.sharedProjects.filter((proj) => proj.isCompleted),
//                         ];

//                         // Remove duplicates based on `id`
//                         const uniqueProjects = Array.from(
//                             new Map(combinedProjects.map((proj) => [proj.id, proj])).values()
//                         );

//                         return uniqueProjects.length > 0 ? (
//                             uniqueProjects.map((proj, index) => (
//                                 <div
//                                     key={index}
//                                     className="bg-white shadow-md p-4 mb-4 rounded-lg w-full"
//                                 >
//                                     <div className="flex flex-wrap justify-between w-full">
//                                         <div className="flex-1 mb-4 sm:mb-0">
//                                             <p className="font-semibold">Project Name:</p>
//                                             <p>{proj.title}</p>
//                                         </div>

//                                         <div className="flex-1 mb-4 sm:mb-0">
//                                             <p className="font-semibold">Status:</p>
//                                             <p>{proj.isCompleted ? "Completed" : "On Going" || "N/A"}</p>
//                                         </div>

//                                         <div className="flex-1 mb-4 sm:mb-0">
//                                             <p className="font-semibold">Due Date:</p>
//                                             <p>{new Date(proj.dueDate).toLocaleDateString()}</p>
//                                         </div>

//                                         <div className="flex-1 flex justify-end">
//                                             <button
//                                                 className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
//                                                 onClick={() => handleClick(proj.id)}
//                                             >
//                                                 View
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))
//                         ) : (
//                             <p>No completed projects or shared projects found.</p>
//                         );
//                     })()
//                 ) : (
//                     <p>Loading projects...</p>
//                 )}
//             </div>




//         </div>

//     );
// };

// export default CompletedProjects;
