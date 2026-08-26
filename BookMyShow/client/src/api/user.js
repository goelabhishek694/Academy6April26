import api from "./index.js";

export const registerUser = async (payload) => {
    const response = await api.post("/users/register", payload);
    return response.data;
}

export const loginUser = async (payload) => {
    const response = await api.post("/users/login", payload);
    return response.data;
}

export const getCurrentUser = async() => {
    const response = await api.get("/users/me");
    return response.data;
}

export const forgetPassword = async(payload) => {
    const response = await api.post("/users/forget", payload);
    return response.data;
}

export const resetPassword = async(email, payload) => {
    const response = await api.patch(`/users/reset/${email}`, payload);
    return response.data;
}

