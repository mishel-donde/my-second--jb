import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";
import TwitterError from "../errors/twitter-error";

// export default function paramsValidation(validator: ObjectSchema) {
//   return async function (req: Request, res: Response, next: NextFunction) {
//     try {
//       req.params = await validator.validateAsync(req.params);
//       next();
//     } catch (e) {
//       next({
//         status: 422, // 422 http code for Unprocessable Entity
//         message: e.message,
//       });
//     }
//   };
// }
const validateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    throw new TwitterError(401, "No token provided");
  }
  try {
    // המשך לוגיקת האימות...
  } catch (err) {
    throw new TwitterError(401, "Invalid token");
  }
};
