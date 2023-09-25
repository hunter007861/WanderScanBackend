const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const initateDB = require("./src/config/db.config");
const users = require("./src/routers/api/v1/users/users.routes");
//app config
const app = express();
const port = process.env.PORT || 5000;
const cookieParser = require("cookie-parser");

//middleware
app.use(cookieParser());
//app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  methods: ["GET", "PUT", "POST", "DELETE", "PATCH"],
  credentials: true,
  origin: ["http://localhost:3000", "http://192.168.0.115:3000", "*"],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

//db config
initateDB();

const uri = process.env.MONGO_URI;

const conn = mongoose.createConnection(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//routes
app.get("/", (req, res) => res.status(200).send("WanderScan Server Connected"));
app.use("/user", users);

//Listening
app.listen(port,'192.168.0.115', () => {
  console.log(`Server is running on port: ${port}`);
});
