import { Router } from "express";
import bodyParser from "body-parser";

import { db } from "../firebase.config";
import { 
    collection, 
    addDoc,
    doc,
    getDoc,
    getDocs
} from "firebase/firestore"; 

export const router = Router();

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({extended:true}))
// parse application/json
router.use(bodyParser.json())

router.get('/', (req,res) => {
    res.send('Customer Endpoint')
})

router.get('/add',async (req,res) => {
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


router.get('/find', async (req, res) => {
    // add new user here
    try{
        const querySnapshot = await getDocs(collection(db, "Customer"));
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${JSON.stringify(doc.data(),null, 2)}`);  
        });
    }catch(err){
        console.log(err)
    }
})

// for specific user
router.get('/find/:id', async (req, res) => {
    // add new user here
    const userID: string = req.params.id
    console.log(userID)
    try{
        
        const docRef = doc(db, "Customer", userID);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            
            //Send User Name
            res.send(`${docSnap.data().firstName} ${docSnap.data().lastName}`)
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
        }
    }catch(err){
        console.log(err)
    }
})

// get all the customer today
router.get('/find/today-customer', async (req, res) => {
    // 
})