






import { useNavigate } from "react-router-dom";
import { apiConst } from "../../../constants/api.constants";
import { useEffect, useState } from "react";

import { useAuth } from "../../../Authcontext";
import { LogOut } from "../../../api/authfunction";
import { Profile } from "../../../api/allApis";
import { LoadingSpinner } from "../../../constants/loadingSpinner";




const Nav = () => {

    const navigate = useNavigate();
    const { token } = useAuth();
    const { setToken } = useAuth();
    const { me } = useAuth();

    const [Login, setLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    console.log("uuuuuu", me)


    const authh = () => {
        navigate(apiConst.Auth)
    }
    const landing = () => {
        navigate(apiConst.Home)
    }
    const dash = () => {
        navigate(apiConst.Workspace)
    }
    const profile = () => {
        navigate(apiConst.ProfilePage)
    }


    useEffect(() => {
        // Wait until the authentication state is loaded
        if (token, me) {
            setIsLoading(false);


        }
    }, [token, me]);

    if (isLoading || !token) {
        return (
            <LoadingSpinner />
        );
    }

    const logout = () => {

        LogOut(setToken, navigate);
    }



    return (

        <header className="w-full py-4 flex justify-between items-center px-6 bg-white shadow-md">
            <div className="flex gap-4">
                <div className="md:text-2xl text-lg font-bold text-gray-800" onClick={landing}>Taskify</div>
                <div className="md:text-2xl text-lg font-bold text-gray-800" onClick={dash}>DashBoard</div>

            </div>
            <div className="flex gap-4">
                {me &&
                    <>
                        <div className="md:text-lg text-xs font-bold text-gray-800">{me.profile.displayName}</div>
                        <img
                            className="w-8 h-8 rounded-full text-gray-800"
                            src={me.profile.photoURL ? me.profile.photoURL : "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"}
                            alt="User Profile"
                            onClick={profile}
                        />
                    </>}





                <button onClick={logout} className="bg-black text-white px-2 py-1 rounded-md">
                    Logout
                </button>
            </div>
        </header>
    )

}


export default Nav;