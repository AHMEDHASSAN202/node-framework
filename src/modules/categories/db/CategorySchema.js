import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    title: String,
    parentId: mongoose.Schema.Types.ObjectId || null,
    status: Boolean,
    createdAt: {type: Date, default: Date.now},
});

export const Category = mongoose.model('Category', categorySchema);
