import mongoose from "mongoose";
const { Schema } = mongoose;

//question model
const AppointmentSchema = new Schema(
  {
    timezone: {
      type: String,
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phonenumber: {
      type: Number,
      required: true,
    },
    companyname: {
      type: String,
    },
    message: {
      type: String,
    },
    isRequestPending: {
      type: Boolean,
      default: true,
    },
    toNotify:{
      type:Boolean,
      default:false,
    }
  },
  { timestamps: true }
);
export default mongoose.model("appointment", AppointmentSchema);
