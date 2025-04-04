import express from "express";
import {login,signup} from "./controllers/user.controller";
import { requestLog } from "../middlewares/user.middleware.js";
const router = express.Router();


router.post("/login",requestLog,login);
router.post("/signup", requestLog, signup);

export default router;