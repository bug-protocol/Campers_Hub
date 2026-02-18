import app from "./src/app.js";

const Port = process.env.PORT || 5000;

app.listen(Port, () => {
    console.log(`Server running on Port ${Port}`);
});