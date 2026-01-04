const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs"); // <-- bcryptjs for Windows safe
const User = require("../models/User");

// ===== SIGNUP =====
router.post("/signup", async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    // Check if email already exists
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ error: "Email already registered" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = new User({ username, email, password: hashedPassword, role: role || "user" });
    await user.save();

    res.json({
      message: "Signup successful",
      user: { username: user.username, email: user.email, role: user.role },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ===== LOGIN =====
router.post("/login", async (req, res) => {
  try {
    const { email, password, role, adminPassword } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "User not found" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ error: "Invalid password" });

    // Optional: Admin password check
    if (role === "admin" && adminPassword !== "Admin1199") {
      return res.status(400).json({ error: "Invalid admin password" });
    }

    res.json({
      message: "Login successful",
      user: { username: user.username, email: user.email, role: user.role },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
