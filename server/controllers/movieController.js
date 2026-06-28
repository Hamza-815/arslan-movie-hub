import Movie from "../models/Movie.js";

export const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find().sort({
      createdAt: -1
    });

    res.json(movies);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

export const addMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body);

    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

export const deleteMovie = async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);

    res.json({
      message: "Movie deleted"
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
