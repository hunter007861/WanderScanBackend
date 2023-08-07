const express = require('express');
const cors = require("cors");
require('dotenv').config();
const mongoose = require("mongoose");
const initateDB = require('./src/config/db.config');

//app config
const app = express();
const port = process.env.PORT || 5000;
const cookieParser = require("cookie-parser");

//middleware
app.use(cookieParser());
//app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var corsOptions = {
    methods: "GET, PUT, POST, DELETE, PATCH",
    credentials: true,
    origin: "http://localhost:3000"
};


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', '*');
    res.header("Access-Control-Allow-Credentials", "true");
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,Authorization,User-Authorization');
    res.header('responseType', 'blob')
    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});


var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, PATCH, OPTIONS');
    res.header('Access-Control-Allow-Headers', '*');
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");

    next();
}

app.use(allowCrossDomain);
app.options('*', cors())
app.use(cors(corsOptions));

//db config
initateDB();

const uri = process.env.MONGO_URI;

const conn = mongoose.createConnection(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
);

//routes
app.get("/", (req, res) => res.status(200).send("Art Server Connected"))

//Listening
app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
