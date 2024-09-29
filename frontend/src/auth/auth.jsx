import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { apiConst } from "../constants/api.constants";
import { Login, Signin } from "../api/authApi";
import { Onlogin } from "../api/authfunction";
import { useAuth } from '../Authcontext'; // Import the AuthContext

const Auth = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("");
    const [isLogin, setIsLogin] = useState(true);
    const { setToken } = useAuth();



    const onsignin = async () => {



        try {

            await Signin(name, email, password, setError);


            setIsLogin(true)
        } catch (error) {
            console.log(error);

            setError(error.message || "An error occurred during register");
        }


    }


    const handleLogin = async () => {
        await Onlogin(email, password, setError, setToken, navigate);
    };







    return (
        <div className="flex justify-center items-center w-1/2 mx-auto mt-10 border border-gray-800">
            <div className="w-full max-w-md p-4">
                {!isLogin && (
                    <div>
                        <h1 className="text-2xl font-bold mb-4">Register</h1>
                        {error && <p className="text-red-500 mt-4">{error}</p>}
                        <div className="flex flex-col space-y-5 mt-10">
                            <input
                                type="text"
                                placeholder="Name"
                                className="p-3 rounded-lg border border-gray-300"
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="p-3 rounded-lg border border-gray-300"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="p-3 rounded-lg border border-gray-300"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                onClick={onsignin}
                                className="bg-rose-500 text-white p-3 rounded-lg hover:bg-rose-600"
                            >
                                Register
                            </button>
                            <p
                                className="text-blue-600 hover:cursor-pointer"
                                onClick={() => setIsLogin(true)}
                            >
                                Already Registered? Login to your account
                            </p>

                        </div>
                    </div>
                )}
                {isLogin && (
                    <div>
                        <h1 className="text-2xl font-bold mb-4">Login</h1>
                        {error && <p className="text-red-500 mt-4">{error}</p>}
                        <div className="flex flex-col space-y-5 mt-10">
                            <input
                                type="email"
                                placeholder="Email"
                                className="p-3 rounded-lg border border-gray-300"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="p-3 rounded-lg border border-gray-300"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                onClick={handleLogin}
                                className="bg-rose-500 text-white p-3 rounded-lg hover:bg-rose-600"
                            >
                                Login
                            </button>
                            <p
                                className="text-blue-600 hover:cursor-pointer"
                                onClick={() => setIsLogin(false)}
                            >
                                Are You New? Create your account
                            </p>

                        </div>
                    </div>
                )}
            </div>
        </div>



    )
}

export default Auth;