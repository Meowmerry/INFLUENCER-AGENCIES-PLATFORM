import express from "express";
import { creteCompanyHandler, getCompanyHandler, getCompanyProfileHandler } from "../controller/company.controller";
import deserializeUser from "../middleware/deserializeUser";
import requiredUser from "../middleware/requiredUser";
import validateResource from "../middleware/validateResource";
import { createCompanySchema } from "../schema/company.schema";


const router = express.Router();

router.get('', getCompanyHandler);

router.get('/profile',deserializeUser, requiredUser, getCompanyProfileHandler);

router.post(`/create`, validateResource(createCompanySchema), creteCompanyHandler);


export default router;