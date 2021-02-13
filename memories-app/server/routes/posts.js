import express from 'express';
import { getPosts, createPost,updatePost,deletePost,likePost } from '../controllers/posts.js'
import verify from '../middleware.js';
const router = express.Router();

router.get('/', getPosts);
router.post('/', verify,createPost);
router.patch('/:id',verify, updatePost);
router.delete('/:id',verify,deletePost);
router.patch('/:id/likePost',verify, likePost)
export default router;