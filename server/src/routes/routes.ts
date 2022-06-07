import { Application, Request, Response } from 'express';
import validateResource from '../middleware/validateResource';
import {createUserHandler} from '../controller/user.controller'
import { createRoleHandler, getRoleHandler } from '../controller/role.controller';
import { createUserSchema } from '../schema/user.schema'
import {createRoleSchema} from  '../schema/role.schema'

const routes = (app: Application)=> {
    
    app.get('/welcome', (req: Request, res: Response) => res.sendStatus(200));

    app.post('/api/user.create', validateResource(createUserSchema), createUserHandler);

    app.post('/api/role.create', validateResource(createRoleSchema), createRoleHandler);

    app.get('/api/roles',  getRoleHandler);

}
export default routes;     