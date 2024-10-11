import express from "express"

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("hii")
})

app.listen(PORT, () => {
    console.log("The port is listening on port 3000");
})