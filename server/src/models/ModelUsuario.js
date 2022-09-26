import mongoose from 'mongoose';

const UsuarioSchema = new mongoose.Schema(
  {
    id:
            {
              type: String,
            },
    nome: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    dataNascimento: {
      type: Date,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

export default mongoose.model('usuarios', UsuarioSchema);
