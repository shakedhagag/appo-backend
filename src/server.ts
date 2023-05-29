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

/**
 * @route all the routes for the barber
 */
app.post("/barbers/signup", (req, res) => {});
app.post("/barbers/login", (req, res) => {});
app.post("/barbers/logout", (req, res) => {});
app.get("/barbers", (req, res) => {});
app.get("/barbers/:id", (req, res) => {});
app.put("/barbers/:id", (req, res) => {});
app.delete("/barbers/:id", (req, res) => {});

/**
 * @route all the routes for the client
 */
app.post("/clients/signup", (req, res) => {});
app.post("/clients/login", (req, res) => {});
app.post("/clients/logout", (req, res) => {});
app.get("/clients", (req, res) => {});
app.get("/clients/:id", (req, res) => {});
app.put("/clients/:id", (req, res) => {});
app.delete("/clients/:id", (req, res) => {});

/**
 * @route all the routes for the appointment
 */
app.post("/appointments", (req, res) => {});
app.get("/appointments", (req, res) => {});
app.get("/appointments/:id", (req, res) => {});
app.put("/appointments/:id", (req, res) => {});
app.delete("/appointments/:id", (req, res) => {});

/**
 * @route all the routes for the availability
 */
app.post("/availabilities", (req, res) => {});
app.get("/availabilities", (req, res) => {});
app.get("/availabilities/:id", (req, res) => {});
app.put("/availabilities/:id", (req, res) => {});
app.delete("/availabilities/:id", (req, res) => {});

export default app;
