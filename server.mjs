import express from "express"
import cors from "cors"

const app = express();
const PORT = 3000;

app.use(cors())
app.use(express.json())

function errorHandler(err, res, req, nex) {
    res.status(err.status || 500).json({
        message: err.message || "something went wrong",
        error: true,
    });
}

app.get("/", (req, res) => {
    res.send("hii")
})
app.push("/", (req, res) => {
    res.send("hii")
})
app.put("/", (req, res) => {
    res.send("hii")
})
app.delete("/", (req, res) => {
    res.send("hii")
})

app.use(errorHandler)

app.listen(PORT, () => {
    console.log("The port is listening on port 3000");
})