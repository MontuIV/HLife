import express from "express";
const router = express.Router();
import { getPattern } from "../controllers/patternController";

router.route("/").get();

export default router;
