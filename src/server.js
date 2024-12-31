const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;
const JWT_SECRET = "super_secret_key"; // Replace with a secure secret key

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/usersDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePicture: { type: String, default: "" },
  watchlist: { type: [String], default: [] },
  ratedMovies: { type: [String], default: [] },
  reviews: { type: [String], default: [] },
});

const User = mongoose.model("User", userSchema);

// Routes

// Signup
app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    res.status(400).json({ error: "User registration failed." });
  }
});

// Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "User not found." });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.status(400).json({ error: "Invalid credentials." });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ error: "Login failed." });
  }
});

// Profile
app.get("/profile", async (req, res) => {
  const token = req.headers.authorization;

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(401).json({ error: "Unauthorized access." });
  }
});

// Update Profile
app.put("/profile", async (req, res) => {
  const token = req.headers.authorization;
  const { username, profilePicture } = req.body;

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.id);

    user.username = username || user.username;
    user.profilePicture = profilePicture || user.profilePicture;
    await user.save();

    res.status(200).json({ message: "Profile updated successfully!" });
  } catch (error) {
    res.status(400).json({ error: "Failed to update profile." });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
