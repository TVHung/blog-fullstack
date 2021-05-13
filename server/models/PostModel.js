import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
        default: 'Anonymous'
    }, 
    attachment: {
        type: String,
        default: ''
    },
    likeCount: {
        type: Number,
        default: 0
    }
    //createAt, updateAt
}, {timestamps: true})

export const PostModel = mongoose.model('Post', schema);