// require('dotenv').config({path:'./env'});
// another way to write above line ---- 

import dotenv from 'dotenv';
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
    path:'./env'
});

connectDB()
.then( () => {
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is listening at port ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGO DB CONNECTION FAILED !!",err);

})


/*
const mongoose = require("mongoose");
import {DB_NAME} from "./constants";


const express = require("express");
const app = express();
// function connectDB(){}
// connectDB();
( async () => {

    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        app.on("error",(error)=>{
            console.log("ERROR",error);
            throw error
        });

        app.listen(process.env.PORT,()=>{
            console.log(`App is Listening on port : ${process.env.PORT}`);
        });
    }
    catch (error){
        console.log("ERROR : ",error)
        throw error
    }

})()

*/