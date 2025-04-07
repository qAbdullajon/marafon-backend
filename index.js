const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.static("static"));
app.use(fileUpload());

// Routes
app.use("/api", require("./routes/user.route"));

const PORT = process.env.PORT || 8080;

const bootstrap = async () => {
  try {
    await mongoose.connect(process.env.DB_URL).then(() => console.log("Connected DB"));
    app.listen(PORT, () => console.log(`Listening on - http://localhost:${PORT}`));
  } catch (error) {
    console.log(`Error connecting with DB: ${error}`);
  }
};

bootstrap();