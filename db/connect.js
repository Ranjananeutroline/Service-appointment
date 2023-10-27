import mongoose from "mongoose";

export const connect = async () => {
  try {
    mongoose
      .connect(
        "mongodb+srv://dbUsername:dbPassword@cluster0.hvzq96b.mongodb.net/appointment?retryWrites=true&w=majority",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      )
      .then(() => {
        console.log("Connected to MongoDB");
      })
      .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
      });
    
  } catch (error) {
    console.log(error);
  }
};
