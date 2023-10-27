import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phonenumber: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    lastActivity: {
      type: Date,
      default: new Date(),
    },
    isActive: {
      type: Boolean,
      default: "true",
    },
    expirationDate: {
      type: Date,
    },
    otpToken: {
      type: String,
    },
    myImageFile: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);
UserSchema.index({ expirationDate: 1 }, { expireAfterSeconds: 10 });

export default mongoose.model("User", UserSchema);
