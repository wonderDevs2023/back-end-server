import { Router } from "express";
import bodyParser from "body-parser";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config"

export const router = Router()

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({extended:true}))
// parse application/json
router.use(bodyParser.json())


router.post('/', (req,res) => {
    try {
        signInWithEmailAndPassword(auth, req.body.email, req.body.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                res.send(user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
})