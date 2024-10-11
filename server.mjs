import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express();
app.use(cors())
app.use(express.json())

const mongoUri = "mongodb://localhost:27017/user_management";

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then (() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.error("error connecting to MongoDB", err.message)
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
})

const User = mongoose.model("User", userSchema);

// app.get("/", (req, res) => {
//     res.send("hii")
// })
// app.push("/", (req, res) => {
//     res.send("hii")
// })
// app.put("/", (req, res) => {
//     res.send("hii")
// })
// app.delete("/", (req, res) => {
//     res.send("hii")
// })

app.listen(3000, () => {
    console.log("The port is listening on port 3000");
})