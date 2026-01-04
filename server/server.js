const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

// Admin email
const ADMIN_EMAIL = "areebamirza127@gmail.com";  // replace with your email

// Nodemailer transporter (Gmail example)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "areebamirza127@gmail.com",          // your email
    pass: "Ar33b@#amz@",             // Gmail App Password
  },
});

// ------------------ User sends message ------------------
app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: email,               // user email as sender
    to: ADMIN_EMAIL,           // admin receives
    subject: `New Contact Message: ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message sent to admin!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error sending message" });
  }
});

// ------------------ Admin replies to user ------------------
app.post("/api/reply", async (req, res) => {
  const { userEmail, replyMessage, replySubject } = req.body;

  const mailOptions = {
    from: ADMIN_EMAIL,      // admin sends
    to: userEmail,          // user receives
    subject: replySubject || "Reply from Admin",
    text: replyMessage,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Reply sent to user!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error sending reply" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
