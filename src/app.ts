import express from "express";
import { loginRouter,
         addUserRouter, 
         findUsersRouter,
         updateDailyCustomerRouter
} from "./routes";

const app = express()
const PORT: number = 3000;

const name: string = "John Calimoso"
// middleware


// endpoint
app.use('/login',loginRouter)
app.use('/addUser',addUserRouter)
app.use('/findUser',findUsersRouter)
app.use('/updateDailyCustomer',updateDailyCustomerRouter)

app.listen( PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})