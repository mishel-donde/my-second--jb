import { Router } from "express";
import { getAll } from "../controllers/jobs/conttoller";

const jobsRouter = Router();

jobsRouter.get("/", getAll);

export default jobsRouter;
