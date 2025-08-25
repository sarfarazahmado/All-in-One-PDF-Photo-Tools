const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5500;

// Public folder serve karna
app.use(express.static(path.join(__dirname, "public")));

// Agar koi unknown route hai to index.html bhejna
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Server start
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
