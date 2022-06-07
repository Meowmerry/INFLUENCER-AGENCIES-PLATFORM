import { NextFunction, Request, Response } from "express";
import { omit } from "lodash";
import { excludedToClientFields } from "../constants/exclude.constants";
import { CreateUserInput } from "../schema/user.schema";
import { createUser } from "../services/user.service";
import logger from "../utils/logger";

export const createUserHandler = async (
    req: Request<{}, {}, CreateUserInput["body"]>,
    res: Response
) => {
    try {
        const user = await createUser(req.body);
        return res.send(omit(user.toJSON(), excludedToClientFields));
    } catch (e: any) {
        logger.error(e);
        return res.status(409).send(e.message);
    }
};

export const getMeHandler = async (
    req: Request,
    res: Response,
    next: NextFunction) => {
    try {
        const user = res.locals.user;
        res.status(200).json({
            status: 'success',
            data: {
                user,
            },
        });
    } catch (err: any) {
        next(err);
    }
}

