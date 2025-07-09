import express from 'express'
import commentsRouter from './comments.js'

export const posts = [{id:1,title:'Hello'}];
export const comments = {1:[]};

const router = express.Router();

router.get('/',(req,res)=>{
    res.json(posts)
});


router.get('/:postId',(req,res)=>{
    const post = posts.find(p => p.id === Number(req.params.postId))
    if(!post) return res.status(404).json({msg:'post not found'});
    res.json(post)
});


router.use('/:postId/comments',commentsRouter);


export default router;