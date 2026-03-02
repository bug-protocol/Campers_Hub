import express from "express";
import mongoose from "mongoose";
import connectDB from "./config/database.js";

const app = express();

// Connect to MongoDB
connectDB();

app.use(express.json());

app.get("/checkserver", (req, res) => {
  res.json({ status: "OK", service: "CampGrounds API" });
});

app.get("/db-status", (req, res) => {
  const state = mongoose.connection.readyState;
  const states = {
    0: "disconnected",
    1: "connected",
    2: "connecting",
    3: "disconnecting",
  };

  res.json({
    status: states[state] || "unknown",
    readyState: state,
  });
});

export default app;