import express from "express";
import { loginUserHandler ,loginCompanyHandler} from "../controller/auth.controller";
import validateResource from "../middleware/validateResource";
import { loginUserSchema } from "../schema/user.schema";
import { loginCompanySchema } from "../schema/company.schema";

const router = express.Router();

router.post('/loginUser', validateResource(loginUserSchema), loginUserHandler);

router.post('/loginCompany', validateResource(loginCompanySchema), loginCompanyHandler);

export default router;