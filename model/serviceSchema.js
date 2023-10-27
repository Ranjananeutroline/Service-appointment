import mongoose from "mongoose";
const { Schema } = mongoose;

//question model
const ServiceSchema = new Schema(
  {
    userId:{
      type: String,
      required:true,
    },
    title: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    expirationDate:{
      type:Date
    }
  },
  { timestamps: true }
);
export default mongoose.model("service", ServiceSchema);
