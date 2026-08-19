import api from "./index.js";

export const getPartnerTheatres = async () => {
  try {
    const response = await api.get("/theatres/partner");
    return response.data;
  } catch (error) {
    return (
      error.response.data || {
        success: false,
        message: error.message,
      }
    );
  }
};

export const addTheatre = async (payload) => {
  try {
    const response = await api.post("/theatres", payload);
    return response.data;
  } catch (error) {
    return (
      error.response.data || {
        success: false,
        message: error.message,
      }
    );
  }
};

export const getAllTheatres = async () => {
  try {
    const response = await api.get("/theatres/all");
    return response.data;
  } catch (error) {
    return (
      error.response.data || {
        success: false,
        message: error.message,
      }
    );
  }
};

export const approveTheatre = async (theatre_id, payload) => {
  try {
    const response = await api.put(`/theatres/${theatre_id}`, payload);
    return response.data;
  } catch (error) {
    return (
      error.response.data || {
        success: false,
        message: error.message,
      }
    );
  }
};