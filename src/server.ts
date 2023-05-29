import express from "express";
import { router } from "./router";
import morgan from "morgan";
import cors from "cors";
import { protect } from "./modules/auth";
import { createUser } from "./handlers/user";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});
app.get("/", (req, res) => {
  res.status(200);
  res.json({ message: "Hello World!" });
});

app.use("/api", protect, router);
app.post("/user", createUser);

export default app;
