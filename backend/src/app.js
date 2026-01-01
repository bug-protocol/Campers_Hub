import express from "express";
const app = express();

app.use(express.json());
app.get('/checkserver',(req, res)=>{
    res.json({status : "OK", service : "CampGrounds API"});
});

export default app;