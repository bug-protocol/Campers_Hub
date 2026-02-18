import express from "express";
import connectDB from "./config/database.js";

const app = express();

// Connect to MongoDB
connectDB();

app.use(express.json());

app.get('/checkserver',(req, res)=>{
    res.json({status : "OK", service : "CampGrounds API"});
});

export default app;