import { create } from 'zustand'
import { axiosInstance } from '../lib/axios.js'
import toast from 'react-hot-toast'
import { io } from 'socket.io-client'

const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:3000" : "/";

export const useAuthStore = create((set, get) => ({
    authUser: null,
    isSigningUp: false,
    isLoggingIn: false,
    isUpdatingProfile: false,
    isCheckingAuth: true,
    onlineUsers: [],
    socket: null,

    ckeckAuth: async () => {
        try {
            const res = await axiosInstance.get('/auth/check')
            set({ authUser: res.data })
            get().conectSocket()
        } catch (error) {
            console.log('error in checkAuth:', error)
            set({ authUser: null })
        } finally {
            set({ isCheckingAuth: false })
        }
    },

    signup: async (data) => {
        set({ isSigningUp: true });
        try {
            const res = await axiosInstance.post('/auth/signup', data)
            set({ authUser: res.data })
            toast.success('Account created succefully')
            get().conectSocket()
        } catch (error) {
            toast.error(error.response.data.message)
        } finally {
            set({ isSigningUp: false })
        }
    },

    logout: async () => {
        try {
            await axiosInstance.post('/auth/logout')
            set({ authUser: null })
            toast.success('Logged ot succesfully')
            get().disconectSocket()
        } catch (error) {
            toast.error(error.response.data.message)
        }
    },

    login: async (data) => {
        set({ isLoggingIn: true })
        try {
            const res = await axiosInstance.post('/auth/login', data)
            set({ authUser: res.data })
            toast.success('Account Login succefully')
            get().conectSocket()
        } catch (error) {
            toast.error(error.response.data.message)
        } finally {
            set({ isLoggingIn: false })
        }
    },

    updateProfile: async (data) => {
        set({ isUpdatingProfile: true })
        try {
            const res = await axiosInstance.put('/auth/update-profile', data)
            set({ authUser: res.data })
            toast.success('profile updated succesfully')
        } catch (error) {
            toast.error(error.response.data.message)
        } finally {
            set({ isUpdatingProfile: false })
        }
    },

    conectSocket: () => {
        const { authUser } = get();
        if (!authUser || get().socket?.connected) return;

        const socket = io(BASE_URL, {
            query: {
                userId: authUser._id,
            },
        });
        socket.connect();

        socket.on("getOnlineUsers", (userIds) => {
            set({ onlineUsers: userIds });
        });
        set({ socket: socket });
    },

    disconectSocket: () => {
        if (get().socket?.connected) get().socket.disconnect();
    }


}))