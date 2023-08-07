const express = require('express');
const cors = require("cors");
require('dotenv').config();
const mongoose = require("mongoose");

//app config
const app = express();
const port = process.env.PORT||5000;
const cookieParser = require("cookie-parser");