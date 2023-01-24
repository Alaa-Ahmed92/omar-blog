import dbConnect from "../../../utils/dbConnect";
import Post from "../../../models/Post";
import Category from "../../../models/Category";

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
                const post = await Post.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true,
                })
                if (!post) {
                    return res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, data: post })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break

        case 'DELETE' /* Delete a model by its ID */:
            try {
                const post = await Post.findOne({ _id: id });
                const deletedPost = await Post.deleteOne({ _id: id });

                await Promise.all(post.categories.map(async category => {
                    Category.updateOne(
                        { name: category },
                        { $pull: { posts: { _id: post._id } } }
                    ).then((result) => {
                        console.log('result', result);
                    })
                        .catch((error) => {
                            console.log('error', error);
                        });
                }));

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