import express from 'express';
import User from '../models/User.js';
const router =  express.Router();
import {registerValidation, loginValidation} from '../validation.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { updateUser } from '../controllers/user.js';

router.post('/register', async (req, res) => {

    //lets validate the data before we a user
    // const {error} = registerValidation(req.body);
    // if(error){
    //     return res.status(400).send(error.details[0].message)
    // }


    //checking if the user is already in the database
    const userExist = await User.findOne({email: req.body.email});
    if(userExist){
        return res.status(400).send('Email already exists');
    }

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });
    try{
        const savedUser = await user.save();
        res.send(savedUser);
    }catch(err){
        res.status(400).send(err);
    }
});

router.post('/login', async (req, res) => {

    //lets validate the data before we a user
    // const {error} = loginValidation(req.body);
    // if(error){
    //     return res.status(400).send(error.details[0].message)
    // }

    //checking if the email exists
    const user = await User.findOne({email: req.body.email});
    if(!user){
        return res.status(400).send('Email is not found');
    }

    //password is correct
    const valiPass = await bcrypt.compare(req.body.password, user.password);
    if(!valiPass){
        return res.status(400).send('Invalid password');
    }
    
    //create and assign to token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);
    // res.json(req.body);
});

export default router;