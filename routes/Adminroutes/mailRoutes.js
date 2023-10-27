import express from 'express';

// import  apply  from '../controller/applytojob.js';
import sendOtpForForgetPassword from '../controller/admincontroller/sendOtpForForgetPassword.js';

const router = express.Router();
//http request
// router.post('/mailsend/apply',apply)
router.post('/mailsend/sendotp',sendOtpForForgetPassword)


export default router
