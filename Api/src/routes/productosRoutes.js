import { Router } from "express"
import { postProducto,deleteProducto } from "../controllers/productosControllers.js"

const router = Router()

router.post("/company/postProducto", postProducto)
router.delete("/company/:id", deleteProducto)

export default router