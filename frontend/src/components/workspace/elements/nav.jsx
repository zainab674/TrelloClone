

import { useNavigate } from "react-router-dom";
import { apiConst } from "../../../constants/api.constants";
import { useEffect, useState } from "react";
import { useAuth } from "../../../Authcontext";
import { LogOut } from "../../../api/authfunction";
import { LoadingSpinner } from "../../../constants/loadingSpinner";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Nav = () => {
    const navigate = useNavigate();
    const { token, setToken, me, socket } = useAuth();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (token && me) {
            setIsLoading(false);
        }

        if (socket) {
            socket.on('notification', (message) => {
                toast.info(`New Notification: ${message}`, {
                    position: "bottom-right",
                    autoClose: false,
                    closeOnClick: true,

                });
            });

            return () => {
                socket.off('notification');
            };
        }
    }, [token, me, socket]);


    if (isLoading || !token) {
        return <LoadingSpinner />;
    }

    const logout = () => {
        LogOut(setToken, navigate);
    };

    return (
        <>
            <ToastContainer />
            <header className="w-full py-4 flex justify-between items-center text-white bg-gray-900 px-8 shadow-lg">
                <div className="flex items-center">
                    <div
                        className="text-xl font-semibold tracking-wide cursor-pointer hover:text-gray-400 transition duration-200"
                        onClick={() => navigate(apiConst.Workspace)}
                    >
                        Dashboard
                    </div>
                </div>


                <div className="flex items-center gap-6">
                    {me && (
                        <div className="flex items-center gap-4">
                            <div className="text-lg font-medium tracking-wide">{me.profile.displayName}</div>
                            <img
                                className="w-10 h-10 rounded-full border-4 border-green-500 cursor-pointer hover:shadow-lg transition duration-200"
                                src={me.profile.photoURL || "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"}
                                alt="User Profile"
                                onClick={() => navigate(apiConst.ProfilePage)}
                            />
                        </div>
                    )}
                    <button
                        onClick={logout}
                        className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition duration-200 shadow-sm hover:shadow-lg"
                    >
                        Logout
                    </button>
                </div>
            </header>


        </>
    );
};

export default Nav;
