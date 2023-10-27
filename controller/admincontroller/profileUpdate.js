import User from "../../model/user.js";
import Service from "../../model/serviceSchema.js";
import bcrypt from "bcryptjs";
import { createError } from "../../utils/error.js";
import { connect } from "../../db/connect.js";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

export const uploadImage = async (req, res, next) => {
  const data = req.body;
  // console.log('just img',data.imageData.data);
  // console.log('data email',data.userEmail);
  // console.log('imagedata',data.imageData);
  // console.log(data.data);
  try {
    const user = await User.findOne({ email: data.userEmail });
    user.myImageFile = data.imageData.data;
    await user.save();
    const userupdated = await User.findOne({ email: data.userEmail });
    // console.log(userupdated);
    res.status(201).json({ msg: "New Image Uploaded..." });
  } catch (error) {
    res.status(409).json({ msg: error.message });
  }
};
// export const login = async (req, res, next) => {
//   try {
//     const user = await User.findOne({ email: req.body.email });
//     console.log(req.body.email);
//     if (!user) return next(createError(404, "User not Found"));

//     console.log(user);
//     const services = await Service.findOne({ userid: user._id });
//     console.log(services);

//     const isPasswordCorrect = await bcrypt.compare(
//       req.body.password,
//       user.password
//     );
//     if (!isPasswordCorrect)
//       return next(createError(400, "Wrong email or password"));

//     // Check for account restoration
//     if (!user.isActive && user.lastActivity) {
//       const currentDate = new Date();
//       const lastActivityDate = new Date(user.lastActivity);
//       const daysSinceLastActivity = Math.floor(
//         (currentDate - lastActivityDate) / (24 * 60 * 60 * 1000)
//       );
//       if (daysSinceLastActivity <= 10) {
//         user.isActive = true;
//         if (services) {
//           for (const service of services) {
//             console.log("ok xa ta");
//             service.expirationDate = expirationDate;
//             await service.save();
//           }
//         }
//         user.expirationDate = null;
//         await user.save();
//       } else {
//         return next(createError(401, "Account permanently deactivated"));
//       }
//     }
//     const token = jwt.sign({ id: user._id }, process.env.JWT);
//     const { password, ...otherDetails } = user._doc;
//     res
//       .cookie("access_token", token, { httpOnly: true })
//       .status(200)
//       .json({ details: { ...otherDetails } });
//   } catch (error) {
//     next(error);
//   }
// };
// export const logout = async (req, res, next) => {
//   try {
//     res
//       .clearCookie("access_token", { httpOnly: true })
//       .status(200)
//       .json({ message: "Logged out successfully" });
//   } catch (error) {
//     next(error);
//   }
// };
// export const checkIfUserExist = async (req, res, next) => {
//   try {
//     console.log(req.body.email);
//     const user = await User.findOne({ email: req.body.email });
//     // console.log(user);
//     res.status(200).json({ user });
//   } catch (error) {
//     next(error);
//   }
// };
// const generateOTP = () => {
//   const length = 4; // Set the desired length of the OTP
//   const charset = "0123456789"; // You can include alphabets and special characters as well if needed
//   let otp = "";
//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * charset.length);
//     otp += charset[randomIndex];
//   }
//   return otp;
// };

// export const sendOtp = async (req, res, next) => {
//   try {
//     console.log("ok");
//     const user = await User.findOne({ email: req.body.email });
//     const otp = generateOTP();
//     const email = req.body.email;
//     let config = {
//       service: "gmail",
//       auth: {
//         user: "Deepakb.neutroline@gmail.com",
//         pass: "fsgfepuhfaplccsc",
//       },
//     };
//     const transporter = nodemailer.createTransport(config);

//     let message = await transporter.sendMail({
//       from: '"Deepak.Neutroline👻" <foo@example.com>', // sender address
//       to: email, // list of receivers
//       subject: "OTP", // Subject line
//       text: "Enter the Otp", // plain text body
//       html: `Your OTP is ${otp}`, // html body
//     });

//     // res.status(201).json("You should receive an email");

//     const token = jwt.sign({ otp }, process.env.JWT, { expiresIn: "1h" });
//     if (user) {
//       user.otpToken = token;
//     }
//     await user.save();
//     console.log(user);
//     res.status(200).json({ otp });
//   } catch (error) {
//     next(error);
//   }
// };
// export const validateOtp = async (req, res, next) => {
//   try {
//     console.log("ok");

//     const userOtp = req.body.otp;
//     const userEmail = req.body.email;
//     const user = await User.findOne({ email: req.body.email });
//     console.log("from databases", user.otpToken);
//     const decoded = jwt.verify(user.otpToken, process.env.JWT);
//     console.log(decoded);

//     if (decoded.otp === userOtp) {
//       console.log("yesma aayena rw");

//       res.status(200).json({ message: "Token is verified Successfully" });
//     } else {
//       res.status(400).json({ message: "Wrong OTP" });
//     }
//   } catch (error) {
//     next(error);
//   }
// };
// export const forgetPassword = async (req, res, next) => {
//   try {
//     console.log(req.body);
//     const user = await User.findOne({ email: req.body.email });
//     const salt = bcrypt.genSaltSync(10);
//     const hash = bcrypt.hashSync(req.body.password, salt);
//     user.password = hash;
//     await user.save();
//     res.status(200).json({ user });
//   } catch (error) {
//     next(error);
//   }
// };

// export const deactivateAccount = async (req, res, next) => {
//   try {
//     const newemail = req.body.email;
//     const user = await User.findOne({ email: newemail });
//     const services = await Service.find({ userId: user._id });
//     user.isActive = false;
//     user.lastActivity = new Date();
//     const expirationDate = new Date();
//     expirationDate.setDate(expirationDate.getDate() + 30); // Set expiration to 10 days from now
//     user.expirationDate = expirationDate;
//     services.expirationDate = expirationDate;

//     if (services && Array.isArray(services)) {
//       for (const service of services) {
//         service.expirationDate = expirationDate;
//         console.log(service);
//         await service.save();
//       }
//     }
//     await user.save();
//     if (user) {
//       let message = "Account has been Deactivated";
//       res.status(200).json({ message: message });
//     } else {
//       res.status(404).json({ message: "User not found" });
//     }
//   } catch (error) {
//     next(error);
//   }
// };
