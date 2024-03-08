const expressAsyncHandler = require("express-async-handler");
const nodemailer = require("nodemailer");
const User = require("../model/userRegistration");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Set secure to false since port 587 doesn't use TLS by default
  auth: {
    user: "saranshtripathi27@gmail.com",
    pass: "nnfg trtk frjl pkmx",
  },
});

const sendEmail = async (toEmail) => {
  try {
    const mailOptions = {
      from: "saranshtripathi27@gmail.com",
      to: toEmail,
      subject: "Hey, Congratulations on your first email",
      text: "Dhakichikki Dhakichikki Dhaa",
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully to:", toEmail);
  } catch (error) {
    console.error("Error sending email to:", toEmail, "Error:", error);
  }
};

const sendBulkEmails = async () => {
  try {
    const users = await User.find({}, { email: 1 });

    // Extract email addresses from the users
    const emails = users.map((user) => user.email);

    // Send email to each recipient
    for (const email of emails) {
      await sendEmail(email);
    }

  } catch (error) {
    console.error("Error sending emails:", error);
  }
};

module.exports = {
  sendBulkEmails,
};
