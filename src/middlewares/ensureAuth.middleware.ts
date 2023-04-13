import { NextFunction, Request, Response } from "express";

import jwt from "jsonwebtoken";
import "dotenv/config";
import { AppError } from "../errors";

const ensureAuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authToken = req.headers.authorization;

  if (!authToken) {
    throw new AppError("Missing authorization headers", 401);
  }

  const token = authToken.split(" ")[1];

  return jwt.verify(token, process.env.SECRET_KEY, (error, decoded: any) => {
    if (error) {
      throw new AppError("Invalid token", 401);
    }
    req.user = { id: decoded.sub };
    return next();
  });
};

export default ensureAuthMiddleware;