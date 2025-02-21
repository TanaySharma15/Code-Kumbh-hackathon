import express from "express";
import { checkout } from "../controller/paymentController.js";

const router = express.Router();

router.post("/checkout", checkout);

export default router;
