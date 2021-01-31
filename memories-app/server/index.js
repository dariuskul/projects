import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
import posts from './routes/posts.js';
import user from './routes/user.js';
import verify from './middleware.js';
import cookieParser from 'cookie-parser';
dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(cookieParser());
app.use('/posts', verify,posts);
app.use('/',user);
const PORT = process.env.PORT || 5000;
mongoose.set('useFindAndModify', false);
mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=> 
app.listen(PORT,()=> console.log(`Server running on port: ${PORT}`))).catch((error)=> console.log(error));