import { Router } from "express"
import { postProducto,deleteProducto } from "../controllers/productosControllers.js"

const router = Router()

router.post("/company/postProduct", postProducto)
router.delete("/company/deleteProduct/:id", deleteProducto)

export default router