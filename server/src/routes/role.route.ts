import express from "express";

import { createRoleHandler, getRoleHandler } from "../controller/role.controller";
import validateResource from "../middleware/validateResource";
import { createRoleSchema } from "../schema/role.schema";


const router = express.Router();

router.get('', getRoleHandler);
router.post(`/create`, validateResource(createRoleSchema), createRoleHandler);


export default router;