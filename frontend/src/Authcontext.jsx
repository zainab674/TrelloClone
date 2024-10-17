import React, { createContext, useContext, useState, useEffect } from 'react';
import { Profile } from './api/allApis';
import { io } from 'socket.io-client';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(() => localStorage.getItem('accessToken') || null);
    const [me, setMe] = useState(null); // Changed to null for clearer state management
    const [loading, setLoading] = useState(true); // To handle loading state
    const socket = io('http://localhost:1234', {
        withCredentials: true,
        extraHeaders: {
            Authorization: token,
        },
    });



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
        socket.on('connect', () => {
            console.log('Connected to socket server');
        });

        socket.on('disconnect', () => {
            console.log('Disconnected from socket server');
        });

        return () => {
            socket.off('connect');
            socket.off('disconnect');
        };
    }, [token]);

    useEffect(() => {
        const storedToken = localStorage.getItem('accessToken');
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ token, setToken, me, loading, fetchUserProfile, socket }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
