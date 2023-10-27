import express from "express";
// import { login, logout, register } from "../controller/authController.js";
import {
  createAppointment,
  deleteAppointmentById,
  editAppointmentById,
  getAllAppointments,
  getAppointmentById,
  rescheduleAppointment,
  sentNotifyAppointment,
} from "../../controller/generalusercontroller/createAppointment.js";
const router = express.Router();

router.post("/new", createAppointment);
router.get("/allAppointments", getAllAppointments);
router.get("/:id", getAppointmentById);
router.patch("/:id", editAppointmentById);
router.delete("/:id", deleteAppointmentById);
router.post("/mailsend/rescheduleAppointment", rescheduleAppointment)
router.post("/mailsend/notifyAppointment", sentNotifyAppointment)
export default router;
