import Post from "../../models/Post";
import Category from "../../models/Category";

export default async function handler(req, res) {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const { query } = req.query;
                const posts = await Post.find({ title: { $regex: query, $options: 'i' } }).collation({ locale: 'en_US', strength: 1 });
                // const categories = await Category.find({ name: { $regex: query, $options: 'i' } }).collation({ locale: 'en_US', strength: 1 });

                res.json({ posts });

            } catch (error) {
                console.log(error);
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }

}