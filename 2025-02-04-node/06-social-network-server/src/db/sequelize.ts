import { Sequelize } from "sequelize-typescript";
import User from "../models/User";
import config from "config";

const sequelize = new Sequelize({
  models: [User],
  logging: process.env.NODE_ENV === "production" ? false : console.log,
  dialect: "mysql",
  ...config.get("db"),
});

export default sequelize;
