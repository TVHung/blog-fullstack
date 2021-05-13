import express, { Router } from 'express';
import {getPosts, createPost, updatePost, getDetailPost, deletePost} from '../controllers/posts.js';
import verifyToken from './verifyToken.js';

const router = express.Router();

router.get('/', getPosts);

router.get('/:postId', getDetailPost);

router.post('/', createPost);

router.post('/update/', updatePost);

router.post('/delete/', deletePost);

export default router;