import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    passwordCPU:{
        type:String,
        required:true
    }
})

export default mongoose.model('User', userSchema)