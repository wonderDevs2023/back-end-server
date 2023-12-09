import { Router } from "express";
import bodyParser from "body-parser";

import { db } from "../firebase.config";
import { collection, addDoc } from "firebase/firestore"; 

export const router = Router();

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({extended:true}))
// parse application/json
router.use(bodyParser.json())

router.get('/',async (req,res) => {
    try {
        const docRef = await addDoc( collection(db,"Customer"),{
            contact: req.body.contact,
            firstGymAttended: req.body.firstGymAttended,
            firstName: req.body.firstName,
            height: req.body.height,
            lastGymAttended: req.body.lastGymAttended,
            lastName: req.body.lastName,
            member: req.body.member,
            memberType: req.body.memberType,
            trainor: req.body.trainor,
            violation: req.body.violation,
            weight: req.body.weight
        })

        res.status(201).json({ message: 'Data added successfully', documentId: docRef.id });
    } catch (error) {
        console.error('Error adding data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})