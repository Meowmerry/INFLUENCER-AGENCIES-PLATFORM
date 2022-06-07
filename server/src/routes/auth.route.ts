import express from "express";
import { base_auth } from "../constants/base.url.contants";
import { loginHandler } from "../controller/auth.controller";
import validateResource from "../middleware/validateResource";
import { loginUserSchema } from "../schema/user.schema";


const router = express.Router();

router.post('/login', validateResource(loginUserSchema), loginHandler);

export default router;