import app from "./src/app.js";

const Port = process.env.port || 5000;

app.listen(Port, () => {
    console.log(`Server running on Port ${Port}`)
})