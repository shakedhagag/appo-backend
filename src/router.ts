import { Router } from "express";
import { handleInputErrors } from "./modules/middleware";

const router = Router();

/**
 * @route all the routes for the appointment
 */
router.get("/appointments", (req, res) => {
  res.status(200);
  res.json({ message: req.requestTime });
});
router.get("/appointments/:id", handleInputErrors, () => {});
router.post("/appointments", () => {});
router.put("/appointments/:id", () => {});
router.delete("/appointments/:id", () => {});

/**
 * @route all the routes for the barber
 */
router.post("/barbers/signup", (req, res) => {});
router.post("/barbers/login", (req, res) => {});
router.post("/barbers/logout", (req, res) => {});
router.get("/barbers", (req, res) => {});
router.get("/barbers/:id", (req, res) => {});
router.put("/barbers/:id", (req, res) => {});
router.delete("/barbers/:id", (req, res) => {});

/**
 * @route all the routes for the client
 */
router.post("/clients/signup", (req, res) => {});
router.post("/clients/login", (req, res) => {});
router.post("/clients/logout", (req, res) => {});
router.get("/clients", (req, res) => {});
router.get("/clients/:id", (req, res) => {});
router.put("/clients/:id", (req, res) => {});
router.delete("/clients/:id", (req, res) => {});

/**
 * @route all the routes for the availability
 */
router.post("/availabilities", (req, res) => {});
router.get("/availabilities", (req, res) => {});
router.get("/availabilities/:id", (req, res) => {});
router.put("/availabilities/:id", (req, res) => {});
router.delete("/availabilities/:id", (req, res) => {});

export { router };
