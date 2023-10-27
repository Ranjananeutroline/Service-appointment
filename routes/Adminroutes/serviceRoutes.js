import express from "express";
// import { login, logout, register } from "../controller/authController.js";
import {
  createService,
  deleteServiceById,
  editServiceById,
  getAllServices,
  getServiceById,
} from "../../controller/admincontroller/createService.js";
const router = express.Router();

router.post("/new", createService);
router.get("/allServices", getAllServices);
router.get("/:id", getServiceById);
router.patch("/:id", editServiceById);
router.delete("/:id", deleteServiceById);
export default router;
