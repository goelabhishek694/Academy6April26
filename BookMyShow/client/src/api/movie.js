import api from "./index.js";

export const getAllMovies = async () => {
  try {
    const response = await api.get("/movies");
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

export const addMovie = async (payload) => {
  try {
    const response = await api.post("/movies", payload);
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

export const updateMovie = async (movie_id, payload) => {
  try {
    const response = await api.put(`/movies/${movie_id}`, payload);
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

export const deleteMovie = async (movie_id) => {
  try {
    const response = await api.delete(`/movies/${movie_id}`);
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
