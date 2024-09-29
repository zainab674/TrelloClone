






import { apiConst } from '../constants/api.constants';
import { Login } from './authApi';

export const Onlogin = async (email, password, setError, setToken, navigate) => {
    try {
        const token = await Login(email, password, setError);
        console.log("hi", token);

        if (token) {
            setToken(token);
            navigate(apiConst.Workspace)
        }
    } catch (error) {
        console.log(error);
        setError(error.message || "An error occurred during login");
    }
};




export const LogOut = (setToken, navigate) => {
    localStorage.removeItem('accessToken');
    setToken('');
    navigate(apiConst.Home);
};

