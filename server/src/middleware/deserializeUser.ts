import { get } from "lodash";
import { Request, Response, NextFunction } from "express";
import AppError from "../utils/app.error.utils";
import { verifyJwt } from "../utils/jwt.utils";
//import { reIssueAccessToken } from "../service/session.service";

const deserializeUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const accessToken = get(req, "headers.authorization", "").replace(
            /^Bearer\s/,
            ""
        );

        if (!accessToken) {
            return next(new AppError('Not logged in', 401));
        }

        const { decoded, expired } = verifyJwt(accessToken);
        if(expired && !decoded){
            return next(new AppError(`Invalid token or token has expired`, 401));
        }

        // if (!decoded) {
        //     return next(new AppError(`Invalid token`, 401));
        // }

        res.locals.user = decoded;
        next();

    } catch (err: any) {
        next(err);
    }
}

// const deserializeUser = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const accessToken = get(req, "headers.authorization", "").replace(
//     /^Bearer\s/,
//     ""
//   );
//
//   // const refreshToken = get(req, "headers.x-refresh");
//
//   if (!accessToken) {
//     return next();
//   }
//
//   const { decoded, expired } = verifyJwt(accessToken);
//
//   if (decoded) {
//     res.locals.user = decoded;
//     return next();
//   }
//
// //   if (expired && refreshToken) {
// //     const newAccessToken = await reIssueAccessToken({ refreshToken });
//
// //     if (newAccessToken) {
// //       res.setHeader("x-access-token", newAccessToken);
// //     }
//
// //     const result = verifyJwt(newAccessToken as string);
//
// //     res.locals.user = result.decoded;
// //     return next();
// //   }
//
//   return next();
// };

export default deserializeUser;