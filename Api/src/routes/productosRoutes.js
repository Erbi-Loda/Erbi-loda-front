import { Router } from "express"
import { postProducto,deleteProducto,getProductos } from "../controllers/productosControllers.js"

const router = Router()

router.post("/company/postProduct", postProducto)
router.delete("/company/deleteProduct/:id", deleteProducto)
router.get("/getProductos", getProductos)

export default router