const express = require("express");
const router = new express.Router();
const Student= require("../models/students");

router.get("/",(req,res)=>{
    res.send("Hello Welcome To StudentsApi ")

})

// app.post("/students",(req,res)=>{
//     console.log(req.body);
//     const user = new Student(req.body);
//     user.save().then(()=>{
//         res.status(201).send(user);
//     }).catch((e)=>{
//         res.status(401).send(e);
//     })
    
// });


router.post("/Students",async(req,res)=>{
    try{
        const user = new Student(req.body);
        console.log(req.body);
        const createuser=await user.save();
        res.status(201).send(createuser);
        
    }catch(e){res.status(400).send(e);

    }
})

router.get("/Students",async(req,res)=>{
    try{
        const studentsData=await Student.find();
        res.send(studentsData);
    }catch(e){
        res.send(e);
    }
});

router.get("/Student/:id",async(req,res)=>{
    try {
        const _id = req.params.id;
        const studentData = await Student.findById(_id);
        console.log(studentData)

        if(!studentData){
            return res.status(404).send();
        }else{
            res.send(studentData);
        }
    } catch (error) {
        res.status(500).send(error);
    }
});


                // update
    router.patch("/Student/:id",async(req,res)=>{
       try {
        const _id= req.params.id;
        const updateStudents= await Student.findByIdAndUpdate(_id , req.body,{
            new:true
        });
            res.send(updateStudents);
            console.log(updateStudents)
       } catch (error) {
        res.status(500).send(error);
       }
    })



    // Delete


    router.delete("/Students/:id",async(req,res)=>{
        try {

            const deleteData = await Student.findByIdAndDelete(req.params.id);
            if(!req.params.id){
                return res.status(500).send();
            }
            res.send(deleteData);
            console.log("delete data",deleteData);

        } catch (error) {
            res.status(500).send(error);
        }
    })



module.exports=router;
