import nodemailer from "nodemailer";
const apply = async (req, res) => {
  // const userData = req.body;
  
  // console.log('User email received', userData);
 
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
    to: userData.email, // list of receivers
    subject: "Someone Applied for a Job", // Subject line
    text: "Hello world k xa bro?", // plain text body
    html: ``, // html body
  });

  res.status(201).json("You should receive an email");
};

export default apply;
