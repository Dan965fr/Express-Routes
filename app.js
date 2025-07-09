import express from 'express';
// import grettRouter from './routes/greet.js'
// import usersRouter from './routes/users.js'
import postsRouter from './routes/posts.js'


const app = express();

app.use(express.json());


app.use('/posts',postsRouter)


// app.use('/users',usersRouter);

const port = process.env.PORT || 3000



app.listen(port,()=>{
    console.log('Listening on port 3000')
})