const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique:true,
        required:[true,"Email is required"],
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']

    },
    username:{
        type:String,
        trim:true,
        unique:true,
        required:[true,"username is required"],
        minLength:[3,"username must have at least 3 charachter"]

    },
    password:{
        type:String,
        trim:true,
        required:true,
        minLength:[3,"password must have at least 3 letters"],
        maxLength:[10,"password should have 10 or less than 10 letters"]


    },

},
{timestamps:true}
);

const user = mongoose.model('user',userModel);

module.exports = user;

