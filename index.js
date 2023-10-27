import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import serviceRoutes from "./routes/Adminroutes/serviceRoutes.js";
import appointmentRoutes from "./routes/Generaluserroutes/appointmentRoutes.js"
import { connect } from "./db/connect.js";
import authRoutes from "./routes/Adminroutes/authRoutes.js"
import profileUpdateRoutes from "./routes/Adminroutes/profileUpdateRoutes.js"
import announcementRoutes from "./routes/Adminroutes/announcementRoutes.js"
const app = express();
const port = 8000;

// app.use(bodyParser.json());
app.use(bodyParser.json({ limit: '5mb' }));

app.use(express.json());
dotenv.config();

app.use(cors());
//routes
app.use("/api/user", appointmentRoutes)
app.use("/api/service", serviceRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/upload", profileUpdateRoutes)
app.use("/api/announcement",announcementRoutes )
app.get("/", (req, res) => {
  res.send("Hello World!");
});
const intializeServer = async () => {
  try {
    await connect();
    app.listen(port, () => {
      console.log(`Server listening to http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
intializeServer();
