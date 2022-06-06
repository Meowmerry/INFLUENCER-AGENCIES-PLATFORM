import {Express, Request, Response} from 'express';
import validateResource from '../middleware/validateResource';
import {createUserHandler} from '../controller/user.controller'
import { createRoleHandler } from '../controller/role.controller';
import { createUserSchema } from '../schema/user.schema'
import {createRoleSchema} from  '../schema/role.schema'

function routes(app: Express) {
    
    app.get('/welcome', (req: Request, res: Response) => res.sendStatus(200));

    app.post('/api/user.create', validateResource(createUserSchema), createUserHandler);

    app.post('/api/role.create', validateResource(createRoleSchema), createRoleHandler);


}
export default routes;     