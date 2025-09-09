const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const open = require("open");

const { runBasicScan } = require("./lib/scanner");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("frontend"));

// file upload setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

// upload endpoint
app.post("/scan", upload.single("contract"), async (req, res) => {
  try {
    const report = await runBasicScan(req.file.path);
    res.json({ success: true, report });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  open(`http://localhost:${PORT}`);   // opens frontend automatically
});
