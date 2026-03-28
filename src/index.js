import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";
import userRouter from "./routes/user.routes.js"; // 👈 import router

dotenv.config({
    path: './env'
});

const app = express();

// middleware
app.use(express.json()); // 👈 required

// routes
app.use("/api/v1/user", userRouter); // 👈 mount router

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port : ${process.env.PORT || 8000}`);
    });
})
.catch((err) => {
    console.log("MongoDB Connection FAILED!!!", err);
});