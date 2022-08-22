const mongoose = require('mongoose');
// const mongoURI= "mongodb://syahi:|8GK3G7<%5Da@cluster0-shard-00-00.npton.mongodb.net:27017,cluster0-shard-00-01.npton.mongodb.net:27017,cluster0-shard-00-02.npton.mongodb.net:27017/Kavyarangam?ssl=true&replicaSet=atlas-dygnjl-shard-0&authSource=admin&retryWrites=true&w=majority"
const mongoURI = process.env.MONGODB_URI;

const connectToMongo= async ()=> {
    await mongoose.connect(mongoURI,()=> {
        console.log("Connected to mongo successfully");
    });
}

module.exports = connectToMongo ;

// MongoDB credentials https://account.mongodb.com/account/login
// literaryassociationiitp@gmail.com
// password: yG32S4kwKA

// steps to get correct mongodb mongoURI
// use version 2.1.2 or later while generating connection string
// set allowed ip address to 0.0.0.0/0 (all users)
// enccode special characters in username or password. Use: https://en.wikipedia.org/wiki/Percent-encoding
//for mongosh shell use password |8GK3G7<]a
//to export, use (open windows terminal in location where output should be saved)
// mongoexport --uri mongodb+srv://syahi:%7C8GK3G7<%5Da@cluster0.npton.mongodb.net/Kavyarangam --collection users --type CSV --out syahiUsers.csv --fields "name,ph_number,email,rollNo,institute,alt_number,Shock_n_Awe,Fitoor_ae_Shayari,Prompt_it_Up,What_if,Aur_Batao"