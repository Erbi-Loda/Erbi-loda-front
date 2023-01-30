import { Router } from "express"
import { postCompany, getCompany, loginCompany } from "../controllers/companyControllers.js"

const router = Router()

router.post("/company/register", postCompany)
router.post("/company/login", loginCompany)
router.get("/company/:id", getCompany)

export default router