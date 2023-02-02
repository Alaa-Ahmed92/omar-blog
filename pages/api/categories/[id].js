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
                const oldCategory = await Category.findById(id);
                const category = await Category.findByIdAndUpdate(id, { name: req.body.name }, {
                    new: true,
                    runValidators: true
                }).populate('posts');

                await category.updateName(oldCategory.name, category.name);

                if (!category) {
                    return res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, data: category })
            } catch (error) {
                console.log(error);
                res.status(400).json({ success: false })
            }
            break
        case 'DELETE' /* Delete a model by its ID */:
            try {
                const category = await Category.findById({ _id: id }).populate('posts')
                const categoryItem = await Category.findById({ _id: id });

                await Promise.all(category.posts.map(async post => {
                    if (post.categories.length === 1) {
                        await post.categories.map(async cat => {
                            if (cat.toString() === category.name.toString()) {
                                await Post.deleteOne({ _id: post._id }); // Delete Post
                                await categoryItem.removePost(post._id); // Delete Post From This Category
                                await Category.findByIdAndDelete({ _id: id }); // Delete This Category
                            }
                        })
                    } else {
                        await Post.updateMany({ _id: { $in: category.posts } }, { $pull: { categories: category.name } }); // Remove Category Name from Categories array
                        await Category.findByIdAndDelete({ _id: id }); // Delete This Category
                    }

                }))

                res.status(200).json({ success: true, data: {} })
            } catch (error) {
                console.log(error);
                res.status(400).json({ success: false })
            }
            break

        default:
            res.status(400).json({ success: false })
            break
    }
}