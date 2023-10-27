import mongoose from "mongoose";
const { Schema } = mongoose;

//question model
const AnnouncementSchema = new Schema(
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
export default mongoose.model("announcement", AnnouncementSchema);
