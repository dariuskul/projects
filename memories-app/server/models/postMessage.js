import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    name: String,
    selectedFile: String,
    likes: [String],
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const postMessage = mongoose.model('PostMessage',postSchema);

export default postMessage;