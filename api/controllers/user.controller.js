import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js';
import { errorHandler } from '../utils/error.js';

export const test = (req,res) =>{
    res.json({
        "message": "Hello",
    });
};


export const updateUser = async (req,res,next) => {
    // checking iif we have the correct user from the token
    if (req.user.id !== req.params.id) {
        return next(errorHandler(401, "Can update your own account"));
    }
    // Updating the user for the other params
    try {
        if(req.body.password){
            req.body.password = bcryptjs.hashSync(req.body.password, 10);
        }
        const updateUser =await User.findByIdAndUpdate(req.params.id, {
            $set:{
                username:req.body.username,
                email:req.body.email,
                password:req.body.password,
                avatar:req.body.avatar
            }
        },{new:true});

        // need to seperate the passord field
        const {password, ...rest} = updateUser._doc;

        res.status(200).json(rest);
    }
    catch(error){
        next(error);
    }
};

export const deleteUser = async (req,res,next) => {
    if(req.user.id != req.params.id) return next(errorHandler(401, "Unauthorized account deletion"));
    try {
        await User.findByIdAndDelete(req.params.id);
        res.clearCookie("access_token").send();
        res.status(200).json("User Deleted!");
    }
    catch(error){
        next(error);
    }
}