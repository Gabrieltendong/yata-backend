import * as mongoose from 'mongoose';
export declare const TaskSchema: mongoose.Schema<mongoose.Document<any, {}>, mongoose.Model<any, any>, undefined>;
export interface Task extends mongoose.Document {
    id: number;
    title: string;
    description: string;
    isActive: boolean;
}
