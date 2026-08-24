import api from "./index.js";

export const addShow = async (payload) => {
  try {
    const response = await api.post("/shows", payload);
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

export const getShowsByMovie = async (movieId, date) => {
  try {
    const response = await api.get(`/shows/by-movie?movieId=${movieId}&date=${date}`);
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

export const getShowsByTheatre = async (theatreId) => {
  try {
    const response = await api.get(`/shows/by-theatre?theatreId=${theatreId}`);
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

export const getShowById = async (showId) => {
  try {
    const response = await api.get(`/shows/${showId}`);
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