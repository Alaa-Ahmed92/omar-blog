import mongoose from 'mongoose'

const GallerySchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide a title for this post'],
    },
    status: {
        type: String,
        required: [true, 'Please provide a status for this post'],
    },
    image: {
        required: [true, 'Please provide an image url for this post.'],
        type: String,
    },
    categories: {
        type: Array,
        required: [true, 'Please provide at least one category for this post.'],
    },
    views: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

export default mongoose.models.Gallery || mongoose.model('Gallery', GallerySchema)