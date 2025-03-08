import { NextFunction, Request, Response } from "express";
import Job from "../../models/job";

export async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const categories = await Job.findAll();
    res.json(categories);
  } catch (e) {
    next(e);
  }
}
