import mongoose from "mongoose";
const { Schema } = mongoose;

//question model
const OfferSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    validity: {
      type:Date,
      required:true,
    }
  },
  { timestamps: true }
);
export default mongoose.model("offer", OfferSchema);
