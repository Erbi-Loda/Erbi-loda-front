import mongoose from "mongoose";

const productosSchema = new mongoose.Schema({
    productosname: {
        type: String,
        required: true,
    },
    companyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        autopopulate: true
      }
})
export default mongoose.model('Productos', productosSchema)