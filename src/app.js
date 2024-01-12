require('dotenv').config();
const express = require("express");
// require("./db/conn");

// const Student=require("./models/students")
const connectDb = require("./db/conn");
const studentRouter = require("./router/Student");

const app=express();
const port=process.env.PORT || 2003;

app.use(express.json());
app.use(studentRouter);



// app.listen(port,()=>{
//     console.log(`Succes.. ${port}`)
// });

connectDb().then(()=>{
    app.listen(port,()=>{
        console.log('Server Is Running as: ${PORT}');
    });
    });
