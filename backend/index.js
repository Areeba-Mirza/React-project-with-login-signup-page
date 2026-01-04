// ===== IMPORTS =====
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs"); // Windows-safe bcrypt
const app = express();

// ===== MIDDLEWARE =====
app.use(cors());
app.use(express.json());

// ===== MONGODB CONNECT =====
mongoose.connect("mongodb://127.0.0.1:27017/myapp")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("MongoDB connection error:", err));

// ===== SCHEMAS =====

// 1️⃣ User Schema
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role:     { type: String, default: "user" } // user/admin
});
const User = mongoose.model("User", UserSchema);

// 2️⃣ Contact Schema
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});
const Contact = mongoose.model("Contact", ContactSchema);

// 3️⃣ Booking Schema
const BookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  tour: { type: String, required: true },
  date: { type: Date, default: Date.now },
  status: { type: String, default: "pending" }
});
const Booking = mongoose.model("Booking", BookingSchema);

// ===== ROUTES =====

// Home test route
app.get("/", (req, res) => res.send("Backend is running"));

// ===== SIGNUP =====
app.post("/signup", async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ error: "Email already registered" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword, role: role || "user" });
    await user.save();

    res.json({ message: "Signup successful", user: { username, email, role: user.role } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ===== LOGIN =====
app.post("/login", async (req, res) => {
  try {
    const { email, password, role, adminPassword } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "User not found" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ error: "Invalid password" });

    if (role === "admin" && adminPassword !== "Admin1199") {
      return res.status(400).json({ error: "Invalid admin password" });
    }

    res.json({ message: "Login successful", user: { username: user.username, role: user.role, _id: user._id } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ===== CONTACT FORM =====
app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const contact = new Contact({ name, email, message });
    await contact.save();
    res.json({ message: "Message submitted successfully", contact });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ===== BOOKING =====

// User books a tour
app.post("/bookings/book", async (req, res) => {
  try {
    const { userId, tour } = req.body;
    if (!userId || !tour) return res.status(400).json({ error: "Missing data" });

    const booking = new Booking({ user: userId, tour });
    await booking.save();

    res.json({ message: "Booking successful", booking });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Admin fetch all bookings
app.get("/bookings/all", async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("user", "username email")
      .sort({ date: -1 });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ===== FETCH USERS =====
app.get("/users", async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ===== FETCH CONTACTS =====
app.get("/contacts", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ===== START SERVER =====
app.listen(5000, () => console.log("Server running on port 5000"));
