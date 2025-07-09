import express from 'express';

const app = express();

app.get('/greet',(req,res)=>{
    res.json({msg:'Hello from /grett'})
});



app.listen(3000,()=>{
    console.log('Listening on port 3000')
})