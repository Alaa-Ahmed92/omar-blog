import Post from '../../../models/Post';
import Category from '../../../models/Category';
import dbConnect from "../../../utils/dbConnect";

export default async function handler(req, res) {
    const { method } = req;

    await dbConnect();

    switch (method) {
        case 'GET':
            try {
                const posts = await Post.find({});
                res.status(200).json({ success: true, data: posts });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'POST':
            try {
                const post = await Post.create(req.body);

                await Promise.all(req.body.categories.map(async category => {
                    await Category.findOneAndUpdate({ name: category }, { $push: { posts: post } });
                    post.categories.push(category);
                }));

                res.status(201).json({ success: true, data: post });
            } catch (error) {
                console.log(error);
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break
    }

}