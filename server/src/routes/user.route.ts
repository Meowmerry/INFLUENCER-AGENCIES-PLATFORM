import express from "express";
import { createUserHandler, getProfileHandler, getUsersHandler } from "../controller/user.controller";
import deserializeUser from "../middleware/deserializeUser";
import requiredUser from "../middleware/requiredUser";
import validateResource from "../middleware/validateResource";
import { createUserSchema } from "../schema/user.schema";


const router = express.Router();



router.get('', getUsersHandler);

router.get('/profile',deserializeUser, requiredUser, getProfileHandler);

router.post(`/create`, validateResource(createUserSchema), createUserHandler);



export default router;