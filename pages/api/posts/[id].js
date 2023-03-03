import Post from "../../../models/Post";
import Category from "../../../models/Category";
import dbConnect from "../../../utils/dbConnect";
import { arraysAreEqual } from "../../../utils/helpers";

export default async function handler(req, res) {
    const {
        query: { id },
        method,
    } = req

    await dbConnect();

    switch (method) {
        case 'GET' /* Get a model by its ID */:
            try {
                await Post.findByIdAndUpdate(id, { $inc: { views: 1 } })
                const post = await Post.findById(id);

                if (!post) {
                    return res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, data: post })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break

        case 'PUT' /* Edit a model by its ID */:
            try {
                const oldPost = await Post.findById(id);
                const post = await Post.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true,
                })

                if (req.body) {
                    const arrEqual = await arraysAreEqual(oldPost.categories, req.body.categories);
                    if (!arrEqual) {
                        await Promise.all(oldPost.categories.map(async cat => {
                            const category = await Category.findOne({ name: cat })
                            await category.removePost(oldPost._id); // Delete Post From This Category
                        }))
                        await Promise.all(req.body.categories.map(async cat => {
                            const category = await Category.findOne({ name: cat })
                            await category.addPost(post); // Add Post From This Category
                        }))
                    }
                }

                if (!post) {
                    return res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, data: post })
            } catch (error) {
                console.log(error);
                res.status(400).json({ success: false })
            }
            break

        case 'DELETE' /* Delete a model by its ID */:
            try {
                const post = await Post.findOne({ _id: id });
                const deletedPost = await Post.deleteOne({ _id: id });

                await Promise.all(post.categories.map(async categoryItem => {
                    const category = await Category.findOne({ name: categoryItem })

                    await category.removePost(post._id);
                }))

                if (!deletedPost) {
                    return res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, data: {}, deletedPost: post })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break

        default:
            res.status(400).json({ success: false })
            break
    }
}