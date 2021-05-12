import User from '../models/User.js';

export const getUser = async (req, res) => {
    try{
        const user = await User.find({_id: req.params.userId});
        res.status(200).json(user);
    }catch(err){
        res.status(500).json({error: err});
    }
};

export const updateUser = async (req, res) => {
    try{
        const updateUser = req.body;
        const user = await User.findOneAndUpdate({_id: req.params.userId}, updateUser, {new: true});
        
        res.status(200).json(user);
    }catch(err){
        res.status(500).json({error: err});
    }
};