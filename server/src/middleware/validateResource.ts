import { Request, Response, NextFunction } from "express";
import { AnyZodObject, ZodError } from "zod";

const validateResource = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
    try {
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params
        })
        next()
    } catch (err: any) {
        // return res.status(400).send(err.errors);
        if (err instanceof ZodError) {
            return res.status(400).json({
                status: 'fail',
                error: err.errors,
            });
        }
        next(err);
    }
}
export default validateResource;