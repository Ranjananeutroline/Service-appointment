import express from "express";
// import { login, logout, register } from "../controller/authController.js";
import {
  createAnnouncement,
createOffer, deleteAnnouncementById, deleteOfferById, editAnnouncementById, editOfferById, getAllAnnouncements, getAllOffers
} from "../../controller/admincontroller/announcement.js";
const router = express.Router();

router.post("/offer/new", createOffer);
router.get("/allOffers", getAllOffers);
router.patch("/offer/:id", editOfferById);
router.delete("/offer/:id", deleteOfferById);


router.post("/announcement/new", createAnnouncement);
router.get("/allAnnouncements", getAllAnnouncements);
router.patch("/announcement/:id", editAnnouncementById);
router.delete("/announcement/:id", deleteAnnouncementById);
// router.patch("/:id", editAnnouncementById);
// router.delete("/:id", deleteAnnouncementById);
// router.post("/new", createOffer);
// router.get("/allAppointments", getAllOffers);
// router.post("/mailsend/rescheduleAppointment", rescheduleAppointment)
// router.post("/mailsend/notifyAppointment", sentNotifyAppointment)
export default router;
