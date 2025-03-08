import { NextFunction, Request, Response } from "express";
import TwitterError from "../errors/twitter-error";
import { StatusCodes } from "http-status-codes";
import User from "../models/User";
import { verify } from "jsonwebtoken";
import config from "config";

declare global {
  namespace Express {
    interface Request {
      userId: string;
    }
  }
}

export default function enforceAuth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader)
    return next(
      new TwitterError(StatusCodes.UNAUTHORIZED, "missing authorization header")
    );

  const parts = authorizationHeader.split("");

  if (parts.length !== 2)
    return next(
      new TwitterError(StatusCodes.UNAUTHORIZED, "bad authorization header")
    );

  if (parts[0] !== "Bearer")
    return next(
      new TwitterError(StatusCodes.UNAUTHORIZED, "bad authorization header")
    );

  try {
    const user = verify(parts[1], config.get<string>("app.jwtSecret")) as User;
    req.userId = user.id;
    next();
  } catch (e) {
    next(new TwitterError(StatusCodes.UNAUTHORIZED, "invalid JWT"));
  }
}
