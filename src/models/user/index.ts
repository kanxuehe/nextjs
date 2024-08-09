import mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: { type: String, default: 'user' },
  password: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.models?.user || mongoose.model('user', UserSchema);

export default UserModel;
