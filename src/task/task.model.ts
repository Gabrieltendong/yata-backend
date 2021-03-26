import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
  id: {type: Number, default: Date.now},
  title: { type: String, required: true },
  description: { type: String, required: false },
  isActive: { type: Boolean, default: true },
});

export interface Task extends mongoose.Document {
    id: number;
    title: string;
    description: string;
    isActive: boolean
}