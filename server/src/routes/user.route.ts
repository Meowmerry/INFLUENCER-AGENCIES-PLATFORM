import express from "express";
import { createUserHandler, getMeHandler, getUsersHandler } from "../controller/user.controller";
import deserializeUser from "../middleware/deserializeUser";
import requiredUser from "../middleware/requiredUser";
import validateResource from "../middleware/validateResource";
import { createUserSchema } from "../schema/user.schema";


const router = express.Router();

router.use(deserializeUser, requiredUser);

router.get('', getUsersHandler);

router.get('/me', getMeHandler);

router.post(`/create`, validateResource(createUserSchema), createUserHandler);



export default router;