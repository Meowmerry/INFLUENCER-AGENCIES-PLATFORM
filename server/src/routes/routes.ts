import { Application, Request, Response } from 'express';
import { base_auth, base_role, base_user,base_comapany } from "../constants/base.url.contants";
import authRouter from "./auth.route";
import userRouter from "./user.route";
import companyRouter from './company.route';
import roleRouter from "./role.route";

const routes = (app: Application) => {

    app.get('/welcome', (req: Request, res: Response) => res.sendStatus(200));

    // auth
    app.use(base_auth, authRouter);

    // role
    app.use(base_role, roleRouter);

    // user
    app.use(base_user, userRouter);

    // comapany
    app.use(base_comapany, companyRouter); // set companyRouter

}
export default routes;     