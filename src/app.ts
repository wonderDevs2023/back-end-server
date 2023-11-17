import express from "express";
import { loginRouter } from "./routes";

const app = express()
const PORT: number = 3000;


// middleware


// endpoint
app.use('/login',loginRouter)

app.listen( PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})