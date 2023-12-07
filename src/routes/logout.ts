import { Router } from "express";
import { signOut } from "firebase/auth";
import { auth } from "../firebase.config"


export const router = Router();


router.post('/', (req,res) => {
    signOut(auth).then(() => {
        // Sign-out successful.
        res.send('SIGN OUT')
      }).catch((error) => {
        // An error happened.
    });
})