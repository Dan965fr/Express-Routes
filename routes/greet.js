import express from 'express';

const router = express.Router();


router.get('/greet',(req,res)=>{
    res.json({msg:'Hello from /grett'})
});

export default router;