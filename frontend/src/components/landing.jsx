import { useNavigate } from "react-router-dom";
import { apiConst } from "../constants/api.constants";
import { useEffect, useState } from "react";

import { useAuth } from "../Authcontext";
import { LogOut } from "../api/authfunction";



export function Landing() {
    const navigate = useNavigate();
    const [creatorId, setCreatorId] = useState("");
    const [Login, setLogin] = useState(true);
    const { token } = useAuth();
    const { setToken } = useAuth();


    const authh = () => {
        navigate(apiConst.Auth)

    }
    const workspace = () => {
        console.log("hhh")
        navigate(apiConst.Workspace)

    }

    const logout = () => {

        LogOut(setToken, navigate);
    }




    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center">
            {/* Navbar */}
            <header className="w-full py-4 flex justify-between items-center px-6 bg-white shadow-md">
                <div className="md:text-2xl text-lg font-bold text-gray-800">Taskify</div>
                <div className="flex gap-4">
                    {token ?
                        <button className="text-gray-800" onClick={logout}>Log Out</button>
                        :
                        <button className="text-gray-800" onClick={authh}>Log in</button>
                    }


                    <button className="bg-black text-white px-4 py-2 rounded-md">
                        Get Taskify for free
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex flex-col items-center text-center mt-20 px-4 sm:px-0">
                <div className="flex items-center space-x-2 bg-yellow-200 text-yellow-800 font-semibold px-4 py-2 rounded-full mb-4">
                    <span className="material-icons">emoji_objects</span>
                    <span>No 1 Task Management</span>
                </div>

                <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-4">
                    Taskify helps team move <span className="text-purple-600">work forward</span>.
                </h1>

                <p className="text-sm sm:text-lg text-gray-600 mb-8 max-w-lg sm:max-w-xl">
                    Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office,
                    the way your team works is unique – accomplish it all with Taskify.
                </p>


                {token ? <button className="bg-black text-white px-6 py-3 rounded-md font-semibold" onClick={workspace}>
                    Start Your project
                </button>
                    :

                    <button className="bg-black text-white px-6 py-3 rounded-md font-semibold" >
                        Get Taskify for free
                    </button>
                }

            </main>
        </div>
    );
}

export default Landing;
