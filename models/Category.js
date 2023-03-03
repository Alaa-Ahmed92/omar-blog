import mongoose from 'mongoose'
import Post from './Post';
import Gallery from './Gallery';

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name for this category.'],
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }],
    galleries: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Gallery'
    }],
}, { timestamps: true })

// Post Methods
CategorySchema.methods.addPost = function (post) {
    this.posts.push(post);
    return this.save();
};

CategorySchema.methods.removePost = function (postId) {
    console.log(postId);
    this.posts = this.posts.filter(pId => pId.toString() !== postId.toString());
    return this.save();
};

CategorySchema.methods.updateName = async function (oldName, newName) {
    this.name = newName;
    const category = await this.save();

    await Post.updateMany({ _id: { $in: category.posts } }, { $pull: { categories: oldName } });
    await Gallery.updateMany({ _id: { $in: category.galleries } }, { $pull: { categories: oldName } });

    await Post.updateMany({ _id: { $in: category.posts } }, { $push: { categories: newName } });
    await Gallery.updateMany({ _id: { $in: category.galleries } }, { $push: { categories: newName } });

    return category;
};

// Gallery Methods
CategorySchema.methods.addGallery = function (gallery) {
    this.galleries.push(gallery);
    return this.save();
};

CategorySchema.methods.removeGallery = function (galleryId) {
    console.log(galleryId);
    this.galleries = this.galleries.filter(gId => gId.toString() !== galleryId.toString());
    return this.save();
};


export default mongoose.models.Category || mongoose.model('Category', CategorySchema)