import User from '../models/user.js';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();
export const login = async (req,res) =>{
    const {username, password} = req.body;
    const user = await User.findOne({username});
    if(!user){
        return res.status(402).json({message: 'Username or password inccorect'});
    }
    const comparer = await bcrypt.compare(password, user.password);
    if(!comparer){
       return res.status(402).json({message: 'Username or password inccorect'});
    }
   let payLoad = {username: username, id: user._id};
   let acessToken = jwt.sign(payLoad,process.env.PRIVATE, {expiresIn: '1h'});
   res.status(200).json({result: user, token:acessToken});
}


export const register = async (req,res) =>{
    const {password, username,name,lastName} = req.body;
    let user = await User.findOne({username});
    if(user){
       return res.status(409).json({message: "User already exists"});
    }
    const hashedPassword = await bcrypt.hash(password,12);
    const newUser = new User({
        username: username,
        name: name,
        lastName: lastName,
        password: hashedPassword
    });
    try {
        await newUser.save();
        
    } catch (error) {
        res.status(404).json({message: error.message});
    }
    res.status(200).json({result: newUser,message: 'User was succesfully created!'});


}