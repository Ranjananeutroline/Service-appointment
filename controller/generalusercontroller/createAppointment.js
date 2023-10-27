import Appointment from "../../model/appointmentSchema.js";
import nodemailer from "nodemailer";

export const createAppointment = async (req, res, next) => {
  console.log(req.body);
  const newAppointment = new Appointment(req.body);
  try {
    const savednewAppointment = await newAppointment.save();
    res.status(200).json(savednewAppointment);
  } catch (error) {
    throw error;
    next(error);
  }
};

export const getAllAppointments = async (req, res, next) => {
  try {
    const allAppointments = await Appointment.find();
    res.status(200).json(allAppointments);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAppointmentById = async (req, res, next) => {
  const searchId = req.params.id;
  console.log(searchId);
  try {
    const Appointment = await Appointment.findById(searchId);
    res.status(200).json(Appointment);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const editAppointmentById = async (req,res,next)=>{
  const toEditId = req.params.id;
  console.log(toEditId);
  console.log(req.body);
  try {
    const updatedAppointments = await Appointment.findByIdAndUpdate(
      toEditId,
      {
        $set: req.body,
      },
      { new: true }
    );
    // console.log('k vb');
    res.status(200).json(updatedAppointments);
  } catch (error) {
    res.status(500).json(error);
  }

}
export const deleteAppointmentById = async (req, res, next) => {
  const AppointmentId = req.params.id;
  try {
    await Appointment.findByIdAndDelete(AppointmentId);
    res.status(200).json("Appointment has been deleted");
    } 
  catch (error) {
    res.status(500).json(err);
  }
};

export const rescheduleAppointment = async (req,res,next) =>{
  console.log(req.body);
  const email = req.body.email
  try {
    let config = {
      service: "gmail",
      auth: {
        user: "Deepakb.neutroline@gmail.com",
        pass: "fsgfepuhfaplccsc",
      },
    };
    const transporter = nodemailer.createTransport(config);

    let message = await transporter.sendMail({
      from: '"Deepak.Neutroline👻" <foo@example.com>', // sender address
      to: email, // list of receivers
      subject: "Appointment has been Reschedule", // Subject line
      text: "Appointment has been reschedule", // plain text body
      html: `Your Appointment has been rescheduled,`, // html body
    });
    console.log(message);
    res.status(200).json("Appointment has been Reschedule, Please try to create a new Appointment");
  } catch (error) {
    
  }
}
export const sentNotifyAppointment = async (req,res,next) =>{
  console.log(req.body);
  const email = req.body.email
  const item = req.body.item;
  console.log('item is ', item);
  try {
    let config = {
      service: "gmail",
      auth: {
        user: "Deepakb.neutroline@gmail.com",
        pass: "fsgfepuhfaplccsc",
      },
    };
    const transporter = nodemailer.createTransport(config);

    let message = await transporter.sendMail({
      from: '"Deepak.Neutroline👻" <foo@example.com>', // sender address
      to: email, // list of receivers
      subject: "Appointment Notification", // Subject line
      text: "This email is to inform you for your Upcomming Appointment", // plain text body
      html: `You have a Appointment of ${item.services} in ${item.date} Time : ${item.time}`, // html body
    });
    console.log(message);
    res.status(200).json("You have an Appointment soon");
  } catch (error) {
    console.log(error);
  }
}
