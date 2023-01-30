import Productos from "../models/Productos.js";
import Company from "../models/Company.js";

export const postProducto = async (req, res) => {
try{

    const { productosname,companyId} = req.body
    const company = await Company.findById(companyId)
    const producto = await Productos.create({
        productosname:productosname,
        companyId:company._id
    })

    const savedProducto= await producto.save()
    company.productos=company.productos.concat(savedProducto._id)
    await company.save()
    return res.json(savedProducto)
}catch (e) {
    return res.json({ msg: `Error - ${e}` })
}

}


export const deleteProducto=async (req,res)=>{
    const {id} = req.params
    try{
        const result = await Productos.findByIdAndDelete(id)
        res.send(result)
    }catch (e) {
        return res.json({ msg: `Error - ${e}` })
    }
}