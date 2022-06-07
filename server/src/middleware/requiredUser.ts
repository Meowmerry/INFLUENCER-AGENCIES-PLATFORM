import { Request, Response, NextFunction } from "express";
import AppError from "../utils/app.error.utils";

const requiredUser = (req: Request, res: Response, next: NextFunction) => {
    const user = res.locals.user;
    if (!user) {
        return next(new AppError(`Invalid token or token has expired`, 401));
    }

    return next();
};
export default requiredUser;
