const mongoose = require("mongoose");
const validator = require("validator");


const studentSchema = new mongoose.Schema({
    name: {
        type: String, require: true, minlength: 3
    },

    email: {
        type: String, require: true,
        unique: [true, "Email Id Is Already Presents"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email..")
            }
        }
    }, phone: {
        type: Number,
        unique: true,
        min: 10,
        require: true
    },
    address: {
        type: String,
        require: true,


    }
});
const Student = new mongoose.model('Student', studentSchema)
module.exports = Student;