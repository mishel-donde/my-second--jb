import { Router } from "express";
import {
  add,
  getEmployeeByJob,
  remove,
} from "../controllers/employees/controller";
import {
  deleteEmployeeValidator,
  newEmployeeValidator,
} from "../controllers/employees/validator";
import validation from "../middlewares/validation";
import paramsValidation from "../middlewares/params-validation";

const employeesRouter = Router();

employeesRouter.get("/:id", getEmployeeByJob);
employeesRouter.post("/", validation(newEmployeeValidator), add);
employeesRouter.delete(
  "/:id",
  paramsValidation(deleteEmployeeValidator),
  remove
);

export default employeesRouter;
