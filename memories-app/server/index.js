import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
import posts from './routes/posts.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use('/posts', posts);

const PORT = process.env.PORT || 5000;
mongoose.set('useFindAndModify', false);
mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=> 
app.listen(PORT,()=> console.log(`Server running on port: ${PORT}`))).catch((error)=> console.log(error));