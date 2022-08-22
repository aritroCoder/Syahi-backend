// mongoDB database model for users
const mongoose = require('mongoose');
const { Schema }= mongoose;

//unique attribute- phone number(main), email
const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    ph_number:{
        type: Number,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    rollNo:{
        type: String,
        required: false,
        unique: false
    },
    institute:{
        type: String,
        required: true
    },
    alt_number:{
        type: Number
    },
    Shock_n_Awe:{
        type: String,
        default: 'no'
    },
    Fitoor_ae_Shayari:{
        type: String,
        default: 'no'
    },
    Prompt_it_Up:{
        type: String,
        default: 'no'
    },
    What_if:{
        type: String,
        default: 'no'
    },
    Aur_Batao:{
        type: String,
        default: 'no'
    },
});

module.exports = mongoose.model('Users', UserSchema);