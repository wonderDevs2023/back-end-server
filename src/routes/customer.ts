import { Router } from "express";
import bodyParser from "body-parser";

import { db } from "../firebase.config";
import { 
    collection, 
    addDoc,
    doc,
    getDoc,
    getDocs,
    query,
    Timestamp,
    where,
    and
} from "firebase/firestore"; 

export const router = Router();

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({extended:true}))
// parse application/json
router.use(bodyParser.json())

router.get('/', (req,res) => {
    res.status(204).json({ error: 'Endpoint Unauthorized' });

})

router.get('/add',async (req,res) => {
    try {
        const docRef = await addDoc( collection(db,"Customer"),{
            contact: req.body.contact,
            firstGymAttended: Timestamp.fromDate(new Date(req.body.firstGymAttended)),
            firstName: req.body.firstName,
            height: req.body.height,
            lastGymAttended: Timestamp.fromDate(new Date(req.body.lastGymAttended)),
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

// ENDPOINT FIND via firstName and lastName
router.get('/find-customer', async (req, res) => {
    // add new user here
    try{
        const q = query(collection(db, "Customer"), 
        and(
            where("firstName", "==", req.body.firstName),
            where("lastName", "==", req.body.lastName)
        ));

        const querySnapshot = await getDocs(q);

        if (querySnapshot.size === 0) {
            // No documents found
            console.log("No documents found.");
            res.send({'result':"None"})
        }

        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
            const searchResult = doc.data()

            searchResult.lastGymAttended = searchResult.lastGymAttended.toDate();
            searchResult.lastGymAttended = searchResult.lastGymAttended.toISOString();

            searchResult.firstGymAttended = searchResult.firstGymAttended.toDate();
            searchResult.firstGymAttended = searchResult.firstGymAttended.toISOString();

            res.send(searchResult)
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