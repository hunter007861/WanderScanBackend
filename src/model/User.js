const mongoose = require('mongoose');

const User = mongoose.Schema({
    email:{
        type:String,
        required: true,
        unique: true
    },
    password: {
        type:String,
        required: true,
    },
    mobile: {
        type:String,
        required: true,
    },
    entityName:{
        type:String,
        required: true,
    },
    entityAddress:{
        type:String,
        required: true,
    },
    entityDescription:{
        type:String,
    },
    activeToken: []
},
    { timestamps: true }
);


module.exports = mongoose.model("User", User);