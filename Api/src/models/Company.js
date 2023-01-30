import mongoose from "mongoose";
import autopopulate from 'mongoose-autopopulate'
const companySchema = new mongoose.Schema({
    companyname: {
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
    },
    productos:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Productos',
        autopopulate: true
      }]
})

companySchema.plugin(autopopulate);
export default mongoose.model('Company', companySchema)