const express = require('express');
const router = express.Router();
const Users = require('../models/User');
const { body, validationResult } = require('express-validator');

//ROUTE 1: Add a new user data using POST /api/user/addusr 
router.post('/addusr', [
    //required constraints
    body('name', 'enter a valid name (more than 3 characters)').isLength({ min: 3 }),
    body('ph_number', 'number must be a valid phone number').isLength( 10 ),
    body('email', 'email address must be valid').isEmail(),
    // body('rollNo', 'Please enter a valid roll number issued by college').isLength({min: 3}),
    body('institute', 'Please enter a valid Institute/College/University name').isLength({min: 3}),

], async (req, res) => {
    try {
        const { name, ph_number, email, rollNo, institute, alt_number, Shock_n_Awe, Fitoor_ae_Shayari, Prompt_it_Up, What_if, Aur_Batao } = req.body;
        //check for validation errors
        const errors = validationResult(req);
        //if errors are present
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        //if errors are empty
        const user = new Users({
            name, ph_number, email, rollNo, institute, alt_number, Shock_n_Awe, Fitoor_ae_Shayari, Prompt_it_Up, What_if, Aur_Batao
        })
        const savedUsr = await user.save();
        res.json(savedUsr);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured. Please see console for further details")
    }

})

//ROUTE 2: Get all the users data using GET   (REDUNDANT ENDPOINT)
router.get('/getallusr', async (req, res) => {
    try {
        const users = await Users.find()
        res.json(users);
    } catch (error) {
        console.error(err.message);
        res.status(500).send("Some error occured. Please see console for further details")
    }
})

//ROUTE 3: Update an existing user using PUT /api/user/updateusr  (UNUSED ENDPOINT)
router.put('/updateusr/:id', async (req, res) => {
    const { name, ph_number, email, rollNo, institute, alt_number } = req.body; //get updated details by user
    try {
        //create a newUser object
        const newUser = {};
        if (name) { newUser.name = name };
        if (ph_number) { newUser.ph_number = ph_number };
        if (email) { newUser.email = email };
        if (rollNo) { newUser.rollNo = rollNo };
        if (institute) { newUser.institute = institute };  
        if (alt_number) { newUser.alt_number = alt_number };  

        //find the user to be updated and update it
        let user = await Users.findById(req.params.id); //the id recieved from PUT url
        if (!user) { return res.status(404).send("User not found") }

        user = await Users.findByIdAndUpdate(req.params.id, { $set: newUser }, { new: true })
        res.json({ user });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured. Please see console for further details")
    }
})

//ROUTE 4: register an existing user for event1 using PUT /api/user/register/event1   (UNUSED ENDPOINT)
router.put('/register/event1/:id', async (req, res) => {
    try {

        //find the user to be updated and update it
        let user = await Users.findById(req.params.id); //the id recieved from PUT url
        if (!user) { return res.status(404).send("User not found") }
        
        //create a newUser object
        const newUser = {};
        newUser.name = user.name ;
        newUser.ph_number = user.ph_number ;
        newUser.email = user.email ;
        newUser.rollNo = user.rollNo ;
        newUser.institute = user.institute ;
        newUser.alt_number = user.alt_number ;
        newUser.event1= "yes"; //register the user

        //update the database
        user = await Users.findByIdAndUpdate(req.params.id, { $set: newUser }, { new: true })
        res.json({ user });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured. Please see console for further details")
    }
})

//ROUTE 5: register an existing user for 2 using PUT /api/user/register/event2    (UNUSED ENDPOINT)
router.put('/register/event2/:id', async (req, res) => {
    try {

        //find the user to be updated and update it
        let user = await Users.findById(req.params.id); //the id recieved from PUT url
        if (!user) { return res.status(404).send("User not found") }
        
        //create a newUser object
        const newUser = {};
        newUser.name = user.name ;
        newUser.ph_number = user.ph_number ;
        newUser.email = user.email ;
        newUser.rollNo = user.rollNo ;
        newUser.institute = user.institute ;
        newUser.alt_number = user.alt_number ;
        newUser.event2= "yes"; //register the user

        //update the database
        user = await Users.findByIdAndUpdate(req.params.id, { $set: newUser }, { new: true })
        res.json({ user });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured. Please see console for further details")
    }
})

//ROUTE 6: register an existing user for event3 using PUT /api/user/register/event3   (UNUSED ENDPOINT)
router.put('/register/event3/:id', async (req, res) => {
    try {

        //find the user to be updated and update it
        let user = await Users.findById(req.params.id); //the id recieved from PUT url
        if (!user) { return res.status(404).send("User not found") }
        
        //create a newUser object
        const newUser = {};
        newUser.name = user.name ;
        newUser.ph_number = user.ph_number ;
        newUser.email = user.email ;
        newUser.rollNo = user.rollNo ;
        newUser.institute = user.institute ;
        newUser.alt_number = user.alt_number ;
        newUser.event3= "yes"; //register the user

        //update the database
        user = await Users.findByIdAndUpdate(req.params.id, { $set: newUser }, { new: true })
        res.json({ user });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured. Please see console for further details")
    }
})

//ROUTE 7: Delete an existing Note using DELETE /api/user/deleteusr   (UNUSED ENDPOINT)
router.delete('/deleteusr/:id', async (req, res) => {
    
    try {
        //find the user to be deleted and delete it
        let user = await Users.findById(req.params.id); //the id recieved from DELETE url
        if (!user) { return res.status(404).send("User not found") }

        user = await Users.findByIdAndDelete(req.params.id)
        res.json({ "Success": "following user is deleted", user });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured. Please see console for further details")
    }
})
module.exports = router ;