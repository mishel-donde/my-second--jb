import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import giftRoutes from "./routes/gifts";
import targetRoutes from "./routes/targets";
import sequelize from "./db";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use("/gifts", giftRoutes);
app.use("/targets", targetRoutes);

sequelize.sync().then(() => {
  console.log("Database connected");
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
