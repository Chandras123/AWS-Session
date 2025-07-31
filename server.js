const express = require("express");
const app = express();
const { resolve } = require("path");
const port = process.env.PORT || 3000;

// Load environment variables
require("dotenv").config();

// Set defaults if not provided in .env
const STATIC_DIR = process.env.STATIC_DIR || "client";
const DOMAIN = process.env.DOMAIN || `http://localhost:${port}`;

// Serve static files
app.use(express.static(resolve(__dirname, STATIC_DIR)));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Root route
app.get("/", (req, res) => {
  res.sendFile(resolve(__dirname, STATIC_DIR, "index.html"));
});

// Success page
app.get("/success", (req, res) => {
  res.sendFile(resolve(__dirname, STATIC_DIR, "success.html"));
});

// Cancel page
app.get("/cancel", (req, res) => {
  res.sendFile(resolve(__dirname, STATIC_DIR, "cancel.html"));
});

// Workshop pages
app.get("/workshop1", (req, res) => {
  res.sendFile(resolve(__dirname, STATIC_DIR, "workshops", "workshop1.html"));
});
app.get("/workshop2", (req, res) => {
  res.sendFile(resolve(__dirname, STATIC_DIR, "workshops", "workshop2.html"));
});
app.get("/workshop3", (req, res) => {
  res.sendFile(resolve(__dirname, STATIC_DIR, "workshops", "workshop3.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`✅ Server running on port: ${port}`);
  console.log(`🌐 Access your app at: ${DOMAIN}`);
});
