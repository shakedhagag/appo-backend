import { validationResult } from "express-validator";

export const handleInputErrors = (err: any, req: any, res: any, next: any) => {
  const errors = validationResult(req);
  if (err) {
    res.status(400);
    res.json({ error: err.message });
  } else {
    next();
  }
};
