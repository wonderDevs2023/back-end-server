import { Router } from "express";
import bodyParser from "body-parser";

import { db } from "../firebase.config";
import { 
    collection, 
    getDocs,
    doc,
    getDoc 
} from "firebase/firestore"; 

export const router = Router();

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({extended:true}))
// parse application/json
router.use(bodyParser.json())


router.get('/', async (req, res) => {
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
router.get('/:id', async (req, res) => {
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
router.get('/today-customer', async (req, res) => {
    // 
})


