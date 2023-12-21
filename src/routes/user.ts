import { Router } from "express";
import bodyParser from "body-parser";

import { db } from "../firebase.config";
import { collection, addDoc } from "firebase/firestore"; 

export const router = Router();


// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({extended:true}))
// parse application/json
router.use(bodyParser.json())

router.get('/', (req,res) => {
    res.send('User Endpoint')
})

router.post('/add', async (req, res) => {
    // add new user here
    try{
        //Add a new document with a generated id.
        const docRef = await addDoc(collection(db, "Customer"), {
            // firstName: req.body.firstName,
            // lastName: req.body.lastName
        });
        console.log("Document written with ID: ", docRef.id);
    }catch(err){
        console.log(err)
    }
})



