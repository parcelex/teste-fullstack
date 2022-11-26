import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    id:
            {
              type: String,
            },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    birthDate: {
      type: Date,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

export default mongoose.model('users', UserSchema);
