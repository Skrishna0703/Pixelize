import express from "express";
import cors from "cors";
import "dotenv/config";

import imageRouter from "./routes/imageRoutes.js";

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/image", imageRouter);

app.get("/", (req, res) => res.send("API Working fine"));

app.listen(PORT, () => console.log("Server Running on Port" + PORT));
