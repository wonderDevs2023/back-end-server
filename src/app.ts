import express from "express";
import { loginRouter,
         logOutRouter,
         addUserRouter, 
         findUsersRouter,
         updateDailyCustomerRouter
} from "./routes";

const app = express();
const PORT: number = 3300;

// middleware


// endpoint
app.use('/login',loginRouter);
app.use('/logout',logOutRouter);
app.use('/addUser',addUserRouter);
app.use('/findUser',findUsersRouter);
app.use('/updateDailyCustomer',updateDailyCustomerRouter);

app.listen( PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})