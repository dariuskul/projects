import mongoose from 'mongoose';
const {Schema} = mongoose;

const userSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    creationDate: {type: Date, default: Date.now}
})


const user = mongoose.model('User',userSchema);
export default user;
