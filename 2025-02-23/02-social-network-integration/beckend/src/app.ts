import express, { json } from "express";
import config from "config";
import sequelize from "./db/sequelize";
import profileRouter from "./routers/profile";
import followsRouter from "./routers/follows";
import commentsRouter from "./routers/comments";
import feedRouter from "./routers/feed";
import authRouter from "./routers/auth";
import errorLogger from "./middlewares/error/error-logger";
import errorResponder from "./middlewares/error/error-responder"; // אם כבר יש לך Error Responder מותאם, תוכל להוסיף את התמיכה ב-TwitterError שם
import notFound from "./middlewares/not-found";
import TwitterError from "./errors/twitter-error"; // יש לוודא שזה הנתיב הנכון לקובץ
import { StatusCodes } from "http-status-codes";
import enforceAuth from "./middlewares/enforce-auth";
import cors from "cors";

const port = config.get<string>("app.port");
const name = config.get<string>("app.name");
const force = config.get<boolean>("sequelize.sync.force");

const app = express();

(async () => {
  await sequelize.sync({ force });

  // middlewares
  app.use(cors());
  app.use(json()); // middleware לפרס את הנתונים בפוסט/פוט/פאץ' ולשמור אותם באובייקט הבקשה

  app.use("/profile", enforceAuth, profileRouter);
  app.use("/follows", enforceAuth, followsRouter);
  app.use("/comments", enforceAuth, commentsRouter);
  app.use("/feed", enforceAuth, feedRouter);
  app.use("/auth", authRouter);

  // special notFound middleware
  app.use(notFound);

  // error middleware
  app.use(errorLogger);

  // error responder middleware (אם יש לך)
  app.use((err: any, req, res, next) => {
    if (err instanceof TwitterError) {
      return res.status(err.status).json({ error: err.message });
    }
    // אם לא TwitterError, עובר לשגיאה ברירת מחדל
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  });

  app.listen(port, () => console.log(`${name} started on port ${port}...`));
})();
