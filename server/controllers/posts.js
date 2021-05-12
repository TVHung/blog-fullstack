import {PostModel} from '../models/PostModel.js';

export const getPosts = async (req, res) => {
    try{
        const posts = await PostModel.find();
        console.log(posts);
        res.status(200).json(posts);
    }catch(err){
        res.status(500).json({error: err});
    }
};

export const getDetailPost = async (req, res) => {
    try{
        const post = await PostModel.find({_id: req.params.postId});
        console.log(post);
        res.status(200).json(post);
    }catch(err){
        res.status(500).json({error: err});
    }
};

export const createPost = async (req, res) => {
    try{
        const newPost = req.body;
        const post = new PostModel(newPost);
        await post.save();
        res.status(200).json(post);
    }catch(err){
        res.status(500).json({error: err});
    }
};

export const updatePost = async (req, res) => {
    try{
        const updatePost = req.body;
        const post = await PostModel.findOneAndUpdate({_id: req.params.postId}, updatePost, {new: true});
        res.status(200).json(post);
    }catch(err){
        res.status(500).json({error: err});
    }
};

export const deletePost = async (req, res) => {
    try{
        const post = await PostModel.remove({_id: req.params.postId});
        res.status(200).json(post);
    }catch(err){
        res.status(500).json({error: err});
    }
};
