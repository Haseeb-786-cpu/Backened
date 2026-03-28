import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGN,
    credentials:true,

}))

app.use(express.json({limit:"12kb"}))
app.use(express.urlencoded({extended:true , limit:"12kb"}))
app.use(express.static("public"))
app.use(cookieParser())

//routes import
import userRouter from "./routes/user.routes.js"

//routes Declaration
app.use("/api/v1/user" , userRouter)

// http://localhost:8000/api/v1/user/register

export {app}