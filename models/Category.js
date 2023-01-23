import mongoose from 'mongoose'

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name for this category.'],
    },
    posts: {
        type: Array,
    },
    galleries: {
        type: Array,
    },
}, { timestamps: true })


export default mongoose.models.Category || mongoose.model('Category', CategorySchema)