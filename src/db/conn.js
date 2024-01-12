const mongoose=require("mongoose");
// mongoose.connect('mongodb://127.0.0.1:27017/students-api')
// .then(()=>
//     console.log("Connection Succesfully.."))
// .catch((err)=>console.log(err)); 


const URI = process.env.MONGODB_URI;

const connectDb =async() =>{
    try {
        await mongoose.connect(URI);
        console.log("Connection Success To Db...")
    } catch (error) {
        console.error("database connection failed")
        process.exit(0);
    }
}

module.exports = connectDb;