require('dotenv').config({path:"./.env"});
const express = require('express');
const app = express();
//db
require("./models/dbconfig").dbconnection();

//routes
const userRouter = require('./routes/userRoutes');

//logger
const logger = require('morgan');
app.use(logger("tiny"));

//body parser
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/user",userRouter);

// const PORT = process.env.PORT;



//server
app.listen(process.env.PORT,()=>{
    console.log(`the server is running on ${process.env.PORT}`)
})