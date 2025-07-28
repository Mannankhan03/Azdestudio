import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectcloudinary from "./config/cloudinary.js";
import Mainbannerroutes from "./routes/Mainbannerroutes.js"


const app = express();

const PORT = 4000;

connectDB();
connectcloudinary();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/hero", Mainbannerroutes)

app.get("/user", (req, res) => {
  res.send("API IS WORKING");
});

app.listen(PORT, () => console.log("server started", PORT));
