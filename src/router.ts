import { Router } from "express";
import { handleInputErrors } from "./modules/middleware";
import {
  getAppointments,
  getAppointmentById,
  createAppointment,
  updateAppointment,
  deleteAppointment,
} from "./handlers/appointments";
import {
  deleteBarber,
  getBarberById,
  getBarbers,
  loginBarber,
  logoutBarber,
  signUpBarber,
  updateBarber,
} from "./handlers/barber";
const router = Router();

/**
 * @route all the routes for the appointment
 */
router.get("/appointments", getAppointments);
router.get("/appointments/:id", handleInputErrors, getAppointmentById);
router.post("/appointments", createAppointment);
router.put("/appointments/:id", updateAppointment);
router.delete("/appointments/:id", deleteAppointment);

/**
 * @route all the routes for the barber
 */
router.post("/barbers/signup", signUpBarber, loginBarber, (req, res) => {});
router.post("/barbers/login", loginBarber);
router.post("/barbers/logout", logoutBarber);
router.get("/barbers", getBarbers);
router.get("/barbers/:id", getBarberById);
router.put("/barbers/:id", updateBarber);
router.delete("/barbers/:id", deleteBarber);

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
