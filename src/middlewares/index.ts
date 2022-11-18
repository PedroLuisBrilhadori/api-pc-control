import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export async function validateSanitizedRequest(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.dir(errors, { depth: null });
    return res.status(400).json({ ok: false, ...errors.array()[0].msg });
  } else {
    next();
  }
}
