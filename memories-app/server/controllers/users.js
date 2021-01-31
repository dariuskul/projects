import User from '../models/user.js';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();
export const login = async (req,res) =>{
    const {username, password} = req.body;
    const user = await User.findOne({username});
    if(!user){
        return res.status(402).json('Credentials are invalid');
    }
    const comparer = await bcrypt.compare(password, user.password);
    if(!comparer){
       return res.status(402).json('Credentials are invalid');
    }
    let payLoad = {username: username};
   let acessToken = jwt.sign(payLoad,process.env.PRIVATE, {expiresIn: '1h'});
   res.cookie("jwt",acessToken, {httpOnly: true});
   res.send();
}

export const register = async (req,res) =>{
    const {password, username} = req.body;
    if(User.find({username})){
       return res.status(404).json({message: 'There is already a user with this username '});
    }
    const hashedPassword = await bcrypt.hash(password,12);
    const newUser = new User({
        username: username,
        password: hashedPassword
    });
    try {
        await newUser.save();
        
    } catch (error) {
        res.status(404).json({message: error.message});
    }
    res.json(200).json({message: 'User was succesfully created!'});


}