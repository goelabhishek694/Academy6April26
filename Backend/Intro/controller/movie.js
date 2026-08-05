const movies = [
  { id: 1, title: "Movie 1", language: "English" },
  { id: 2, title: "Movie 2", language: "Hindi" },
  { id: 3, title: "Movie 3", language: "Marathi" },
];

const getAllMovies = (req, res) => {
  const { lang, sort, genre } = req.query;
  console.log(lang, sort, genre);
  let updatedMovies = movies;
  if (lang) {
    updatedMovies = updatedMovies.filter(
      (movie) => movie.language.toLowerCase() === lang.toLowerCase(),
    );
    console.log(updatedMovies);
  }
  if (sort) {
  }
  if (genre) {
  }

  res.json({
    success: true,
    message: "movies fetched successfully",
    data: updatedMovies,
  });
};

const getMovieById = (req, res) => {
  const { id } = req.params;
  const movie = movies.find((movie) => movie.id == Number(id));
  if (!movie) {
    return res.json({
      success: false,
      message: "Movie not found",
    });
  }
  res.json({
    success: true,
    data: movie,
  });
};

const createMovie = (req, res) => {
  // try {
    const data = req.body;
    console.log(data);
    movies.push(data);
    res.json({
      success: true,
      message: "Movie created successfully",
      data: movies,
    });
  // } catch (error) {
  //   res.json({
  //     success: false,
  //     message: "Movie creation failed",
  //     error: error.message,
  //   });
  // }
};

const updateMovie = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  console.log(id, data);
  const movie = movies.find((movie) => movie.id == Number(id));
  if (!movie) {
    return res.json({
      success: false,
      message: "Movie not found",
    });
  }
  // movie.language = data.language;
  // update the movie with new field
  // ["title"]
  Object.keys(data).forEach((key) => {
    movie[key] = data[key];
  });

  res.json({
    success: true,
    message: "Movie updated successfully",
    data: movies,
  });
};

const testError = (req,res,next) => {
  const error = new Error("This is a test error");
  error.statusCode = 400;
  next(error);
};

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  testError,
};
