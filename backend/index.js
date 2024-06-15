const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const multer = require("multer");
const { error } = require("console");
const { rootRouter } = require("./routers/index.js");

app.use(express.json());
app.use(cors());

app.use("/", rootRouter);

// Database Connection with Mongoose
mongoose.connect(
  "mongodb+srv://congthinh2312:231200@cluster0.g9mobch.mongodb.net/e-commerce"
);

// API Creation

app.get("/", (req, res) => {
  res.send("Express App is Running");
});

// Image Storage Engine

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

// Creating Upload Endpoint for images
app.use("/images", express.static("upload/images"));
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

app.listen(port, (error) => {
  if (!error) {
    console.log("server Running on Port" + port);
  } else {
    console.log("Error : " + error);
  }
});
