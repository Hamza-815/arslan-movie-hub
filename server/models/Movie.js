import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    },

    category: {
      type: String,
      required: true
    },

    thumbnail: {
      type: String,
      required: true
    },

    videoUrl: {
      type: String,
      required: true
    },

    downloadUrl: {
      type: String,
      required: true
    },

    featured: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Movie", movieSchema);
