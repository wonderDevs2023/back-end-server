import express from "express";
import cors from 'cors';
import { loginRouter,
         logOutRouter,
         userRouter,
         customerRouter
} from "./routes";

const app = express();
const PORT: number = 3300;

// middleware
app.use(cors())
app.use(express.json());


// endpoint
app.use('/login',loginRouter);
app.use('/logout',logOutRouter);
app.use('/user',userRouter);
app.use('/customer', customerRouter)

app.listen( PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})