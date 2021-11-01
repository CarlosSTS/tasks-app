import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  owner: {
    type: String,
    required: true
  },
  hours:  {
    type: String,
    required: true
  },
}, {
  timestamps: true,
});

export default mongoose.model('Todo', TodoSchema)