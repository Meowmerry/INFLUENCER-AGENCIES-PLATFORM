import { Request, Response } from "express";
import { omit } from "lodash";
import { createRoleSchema } from "../schema/role.schema";
import { createRole } from "../services/role.service";
import logger from "../utils/logger";

export async function createRoleHandler(req: Request, res: Response) {
    try {
        const role = await createRole(req.body);
        return res.status(200).json(role)
    } catch (e: any) {
        logger.error(e);
        return res.status(409).send(e.message);
      }
}