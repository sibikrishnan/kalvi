import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true }, // Unique username
    password: { type: String, required: true } // Hashed password
});

const User = mongoose.model('User', UserSchema);
export default User;
