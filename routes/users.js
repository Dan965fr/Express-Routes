import express from 'express';

let users = [{id:1,name:'Alice'}];

const router = express.Router();


router.get('/',(req,res)=>{
    res.json(users);
});


router.post('/',(req,res)=>{
    const newUser = {id:Date.now(),name:req.body.name};
    users.push(newUser);
    res.status(201).json(newUser)
})


router.get('/:id',(req,res)=>{
    const user = users.find(u => u.id === Number(req.params.id));
    if(!user) return res.status(404).json({msg:'User not found'});
    res.json(user);
})


router.put('/:id',(req,res)=>{
    const user = users.find(u => u.id === Number(req.params.id));
    if(!user) return res.status(404).json({msg:'User not found'});
    user.name = req.body.name;
    res.json(user)
});


router.delete('/:id',(req,res)=>{
    const id = Number(req.params.id);
    const index = users.findIndex(u => u.id === id)
    if(index === -1) return res.status(404).json({msg:'User not fond'});
    users.splice(index,1);
    res.status(204).send();
});

export default router
