import express from "express";
import {
  checkIfUserExist,
  deactivateAccount,
  forgetPassword,
  login,
  logout,
  register,
  sendOtp,
  updateUserDetails,
  validateOtp,
} from "../../controller/admincontroller/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/resetpassword", forgetPassword);
router.post("/sendotp", sendOtp);
router.post("/validateotp", validateOtp);
router.post("/checkifuserexist", checkIfUserExist);
router.post("/deactivateaccount", deactivateAccount);
router.post("/updateuserdetails", updateUserDetails);

export default router;
