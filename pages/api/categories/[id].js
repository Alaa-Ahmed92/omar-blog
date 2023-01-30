import Gallery from '../../../models/Gallery';
import Post from '../../../models/Post';
import Category from './../../../models/Category';
import dbConnect from './../../../utils/dbConnect';

export default async function handler(req, res) {
    const {
        query: { id },
        method,
    } = req

    await dbConnect();

    switch (method) {
        case 'GET':
            try {
                const category = await Category.findById(id);
                if (!category) {
                    return res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, data: category })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        case 'PUT':
            try {
                const category = await Category.findByIdAndUpdate(id, { name: req.body.name }, {
                    new: true,
                    runValidators: true
                });
                // Posts
                await Promise.all(category.posts.map(async post => {
                    const postItem = await Post.findById(post._id);
                    await Post.findByIdAndUpdate(postItem._id, { 'categories': req.body.name });
                }));
                await Promise.all(category.posts.map(async post => {
                    const postItem = await Post.findById(post._id);
                    await Category.findByIdAndUpdate(category._id, { 'posts': postItem });
                }));

                // Galleries
                await Promise.all(category.galleries.map(async gallery => {
                    const galleryItem = await Gallery.findById(gallery._id);
                    await Gallery.findByIdAndUpdate(galleryItem._id, { 'categories': req.body.name });
                }));
                await Promise.all(category.galleries.map(async gallery => {
                    const galleryItem = await Gallery.findById(gallery._id);
                    await Category.findByIdAndUpdate(category._id, { 'galleries': galleryItem });
                }));


                if (!category) {
                    return res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, data: category })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        case 'DELETE' /* Delete a model by its ID */:
            try {
                const deletedCategory = await Category.deleteOne({ _id: id })
                if (!deletedCategory) {
                    return res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, data: {} })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break

        default:
            res.status(400).json({ success: false })
            break
    }
}