import Post from "../../models/Post";
import Gallery from "../../models/Gallery";
import Category from "../../models/Category";

export default async function handler(req, res) {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const { query } = req.query;
                const posts = await Post.find({ title: { $regex: query, $options: 'i' } }).collation({ locale: 'en_US', strength: 1 });
                const galleries = await Gallery.find({ title: { $regex: query, $options: 'i' } }).collation({ locale: 'en_US', strength: 1 });
                // const categories = await Category.find({ name: { $regex: query, $options: 'i' } }).collation({ locale: 'en_US', strength: 1 });
                const filteredPosts = posts.filter(post => post.status !== 'Draft');
                const filteredGalleries = galleries.filter(gallery => gallery.status !== 'draft');


                res.json({ filteredPosts, filteredGalleries });

            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }

}