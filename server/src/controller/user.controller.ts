import { NextFunction, Request, Response } from "express";
import { omit } from "lodash";
import { excludedToClientFields } from "../constants/exclude.constants";
import { CreateUserInput } from "../schema/user.schema";
import { createUser, findUsers } from "../services/user.service";
import { response } from "../utils/api.response.utils";
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

export const getUsersHandler = async (
    req: Request,
    res: Response,
    next: NextFunction) => {
    try {

        const users = await findUsers();
        res.status(200).json({
            status: 'success',
            data: {
                users,
            },
        });
    } catch (err: any) {
        next(err);
    }
}

export const getProfileHandler = async (
    req: Request,
    res: Response,
    next: NextFunction) => {
    try {
        const user = res.locals.user;
        return response(res, 200, {
            status: 'success',
            data: {
                user,
            },
        })
    } catch (err: any) {
        next(err);
    }
}

