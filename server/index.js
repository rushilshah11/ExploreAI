const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { mongoose } = require("mongoose");

mongoose.connect(process.env.MONGO_URI)
  .then(() => {console.log("DB connected");})
  .catch((err) => {console.log("DB connection failed", err);}
  );

const app = express();

app.use("/", require("./routes/authRoutes"));

const port = 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
