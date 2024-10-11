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

app.get("/api/users", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message : "Error fetching users", error: error.message})
    }
})

app.post("/api/users", async (req, res) => {
    const {name, email} = req.body;
    try {
        const newUser = new User({ name, email })
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({message: "Error creating user", error: error.message})
    }
})

// app.put("/", (req, res) => {
//     res.send("hii")
// })
// app.delete("/", (req, res) => {
//     res.send("hii")
// })

app.listen(3000, () => {
    console.log("The port is listening on port 3000");
})