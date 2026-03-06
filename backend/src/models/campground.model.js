import mongoose from "mongoose";

const { Schema } = mongoose;

const pathSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    route: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    description: {
      type: String,
      trim: true,
    },
  },
  {
    _id: false,
  }
);

const campgroundSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    // For map pin – human-readable address + coordinates
    coordinates: {
      lat: {
        type: Number,
      },
      lng: {
        type: Number,
      },
    },
    // Primary image (thumbnail/cover)
    image: {
      type: String,
      required: true,
    },
    // Additional media
    images: [
      {
        type: String,
      },
    ],
    videos: [
      {
        type: String,
      },
    ],
    // Pricing for search/filter
    basePrice: {
      type: Number,
      min: 0,
    },
    minPrice: {
      type: Number,
      min: 0,
    },
    maxPrice: {
      type: Number,
      min: 0,
    },
    // Aggregated rating info for fast search/filter
    averageRating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    reviewCount: {
      type: Number,
      min: 0,
      default: 0,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
    paths: [pathSchema],
    // Commute options and crowd-sourced fare info
    commuteOptions: [
      {
        mode: {
          type: String,
          enum: ["car", "bus", "train", "bike", "walk", "rideshare", "other"],
          default: "other",
        },
        provider: {
          type: String,
          trim: true,
        },
        estimatedPrice: {
          type: Number,
          min: 0,
        },
        currency: {
          type: String,
          default: "INR",
        },
        notes: {
          type: String,
          trim: true,
        },
        source: {
          type: String,
          trim: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Campground = mongoose.model("Campground", campgroundSchema);

export default Campground;

