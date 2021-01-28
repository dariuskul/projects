import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import posts from './routes/posts.js';
const app = express();
app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));

app.use('/posts', posts);

const CONNECTION_URL = 'mongodb+srv://darius_kulevicius:paskola1@cluster0.vhbaf.mongodb.net/<dbname>?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=> 
app.listen(PORT,()=> console.log(`Server running on port: ${PORT}`))).catch((error)=> console.log(error));