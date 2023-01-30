import mongoose from "mongoose";

/*
{
    name: name of product,
    price: price in float,
    description: description of product,
    img: [url1,url2,url3,...],
    views: int,
    company: _id of company,
    coments: [coments],
    score: sum all punctiations / count punctiations,
    state: ["paused","sale"],
    stock: count of products,
    favorite: count of people with favorite selected
}
*/


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