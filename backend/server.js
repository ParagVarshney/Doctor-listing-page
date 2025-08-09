const express = require("express");
const cors = require("cors");
const doctorRoutes = require("./routes/doctorRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/doctors", doctorRoutes);

// Root endpoint
app.get("/", (req, res) => {
  res.send("Doctor API is running");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

