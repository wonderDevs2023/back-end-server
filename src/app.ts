import express from "express";
import cors from 'cors';
import { loginRouter,
         logOutRouter,
         addUserRouter, 
         findUsersRouter,
         updateDailyCustomerRouter,
         addCustomerRouter
} from "./routes";

const app = express();
const PORT: number = 3300;

// middleware
app.use(cors())
app.use(express.json());


// endpoint
app.use('/login',loginRouter);
app.use('/logout',logOutRouter);
app.use('/addUser',addUserRouter);
app.use('/findUser',findUsersRouter);
app.use('/updateDailyCustomer',updateDailyCustomerRouter);
app.use('/addCustomer', addCustomerRouter)

app.listen( PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})