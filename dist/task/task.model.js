"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskSchema = void 0;
const mongoose = require("mongoose");
exports.TaskSchema = new mongoose.Schema({
    id: { type: Number, default: Date.now },
    title: { type: String, required: true },
    description: { type: String, required: false },
    isActive: { type: Boolean, default: true },
});
//# sourceMappingURL=task.model.js.map