import { Application, Request, Response } from 'express';

import { base_auth, base_role, base_user } from "../constants/base.url.contants";
import validateResource from '../middleware/validateResource';
import { createUserHandler } from '../controller/user.controller'
import { createRoleHandler, getRoleHandler } from '../controller/role.controller';
import { createUserSchema } from '../schema/user.schema'
import { createRoleSchema } from '../schema/role.schema'
import authRouter from "./auth.route";

const routes = (app: Application) => {

    app.use(base_auth, authRouter);

    app.get('/welcome', (req: Request, res: Response) => res.sendStatus(200));

    // User
    app.post(`${ base_user }.create`, validateResource(createUserSchema), createUserHandler);

    // Role
    app.post(`${ base_role }.create`, validateResource(createRoleSchema), createRoleHandler);
    app.get(base_role, getRoleHandler);

}
export default routes;     