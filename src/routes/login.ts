import { Router } from "express";
import express from "express";
import bodyParser from "body-parser";

export const router = Router()

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({extended:true}))
// parse application/json
router.use(bodyParser.json())


router.post('/', (req,res) => {
    res.send(JSON.stringify(req.body, null,2))
})