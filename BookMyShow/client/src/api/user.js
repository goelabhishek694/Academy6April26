import api from "./index.js";

export const registerUser = async (payload) => {
    const response = await api.post("/users/register", payload);
    return response.data;
}

export const loginUser = async (payload) => {
    const response = await api.post("/users/login", payload);
    return response.data;
}