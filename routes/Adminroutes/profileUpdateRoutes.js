import express from "express";
import { uploadImage } from "../../controller/admincontroller/profileUpdate.js";

const router = express.Router();

router.post("/uploadimage", uploadImage );


export default router;
