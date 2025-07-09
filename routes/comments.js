import express from 'express';
import {posts,comments} from './posts.js'


const router = express.Router({mergeParams:true})

router.use((req,res,next)=>{
    const postId = Number(req.params.postId);
    const postExsist = posts.some(p => p.id === postId);
    if(!postExsist) return res.status(404).json({msg:'post not found'});
    next();

});


router.get('/',(req,res)=>{
    const pid = req.params.postId;
    res.json(comments[pid] || []);
});


router.post('/',(req,res)=>{
    const pid = req.params.postId;
    const newComment = {id:Date.now(),text:req.body.text};
    comments[pid] = comments[pid] || [];
    comments[pid].push(newComment);
    res.status(201).json(newComment)
})


export default router
