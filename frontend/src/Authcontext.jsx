import React, { createContext, useContext, useState, useEffect } from 'react';
import { Profile } from './api/allApis';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(() => localStorage.getItem('accessToken') || null);
    const [me, setMe] = useState(null); // Changed to null for clearer state management
    const [loading, setLoading] = useState(true); // To handle loading state

    const fetchUserProfile = async () => {
        try {
            if (token) {
                const userProfile = await Profile(token);
                setMe(userProfile);
            }
        } catch (error) {
            console.error("Failed to fetch user profile:", error);
            setMe(null); // Reset user profile on error
        } finally {
            setLoading(false); // Set loading to false regardless of success or failure
        }
    };

    useEffect(() => {
        fetchUserProfile();
    }, [token]); // Fetch user profile when token changes

    useEffect(() => {
        const storedToken = localStorage.getItem('accessToken');
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ token, setToken, me, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
