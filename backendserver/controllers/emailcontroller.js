import nodemailer from "nodemailer";
import Forminput from "../models/Emailmodel.js";

const submitHeroForm = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newEntry = new Forminput({ name, email, message });
    await newEntry.save();

  
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.ADMIN_RECEIVER, 
      subject: `New Contact Request from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res
      .status(200)
      .json({ message: "Form submitted and email sent successfully." });
  } catch (error) {
    console.error("Error in submitHeroForm:", error);
    res
      .status(500)
      .json({ message: "Something went wrong.", error: error.message });
  }
};

export {submitHeroForm}
