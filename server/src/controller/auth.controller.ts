import { NextFunction, Request } from "express";
import { comparePasswords } from "../models/user.model";
import { LoginUserInput } from "../schema/user.schema";
import { findUser, signToken } from "../services/user.service";
import AppError from "../utils/app.error.utils";

export const loginHandler = async (
    req: Request<{}, {}, LoginUserInput["body"]>,
    res: Response,
    next: NextFunction
) => {
    try {
        // Get the user from the collection
        const user = await findUser({ email: req.body.email });

        // Check if user exist and password is correct
        if (
            !user ||
            !(await comparePasswords(req.body.password, user.password))
        ) {
            return next(new AppError('Invalid email or password', 401));
        }

        const { accessToken } = await signToken(user);

        res.status(200).json({
            status: 'success',
            accessToken,
        });
    } catch (err: any) {
        next(err);
    }
};