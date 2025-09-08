import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export const validate = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        return next();
    }

    const extratectErrors: object[] = [];

    errors.array().map((err) => {
        if ("param" in err && typeof err.param === "string") {
            extratectErrors.push({ [err.param]: err.msg });
        } else {
            // fallback genérico
            extratectErrors.push({ error: String(err.msg) });
        }
    });

    return res.status(422).json({
        errors: extratectErrors
    });
};
