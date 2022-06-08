import { NextFunction, Request, Response } from "express";
import { omit } from "lodash";
import { excludedToClientFields } from "../constants/exclude.constants";
import { CreateCompanyInput} from "../schema/company.schema";
import { creteCompany, findCompanies } from "../services/company.service";
import { response } from "../utils/api.response.utils";
import logger from "../utils/logger";

export const creteCompanyHandler = async (
    req: Request<{}, {}, CreateCompanyInput["body"]>,
    res: Response) => {
        try {
            const user = await creteCompany(req.body);
            return res.send(omit(user.toJSON(), excludedToClientFields));
        } catch (e: any) {
            logger.error(e);
            return res.status(409).send(e.message);
        }
}


export const getCompanyHandler = async (
    req: Request,
    res: Response,
    next: NextFunction) => {
    try {

        const companies = await findCompanies();
        res.status(200).json({
            status: 'success',
            data: {
                companies,
            },
        });
    } catch (err: any) {
        next(err);
    }
}

export const getCompanyProfileHandler = async (
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

