import mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  // role: { type: String, default: 'user' },
});

const UserModel = mongoose.models?.user || mongoose.model('user', UserSchema);

export default UserModel;
