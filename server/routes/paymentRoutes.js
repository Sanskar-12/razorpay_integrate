import express from "express";
import { checkout, paymentvalidation } from "../controllers/paymentControllers.js";

const router =express.Router()

router.post("/checkout",checkout)
router.post("/paymentvalidation",paymentvalidation)

export default router