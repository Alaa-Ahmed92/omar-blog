import Gallery from "../../../models/Gallery";
import Category from "../../../models/Category";
import dbConnect from "../../../utils/dbConnect";

export default async function handler(req, res) {
    const { method } = req;

    await dbConnect();

    switch (method) {
        case 'GET':
            try {
                const galleries = await Gallery.find({});

                res.status(200).json({ success: true, data: galleries });

            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'POST':
            try {
                const gallery = await Gallery.create(req.body);

                await Promise.all(req.body.categories.map(async category => {
                    return await Category.findOneAndUpdate({ name: category }, { $push: { galleries: gallery } });
                }));

                res.status(201).json({ success: true, data: gallery });

            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }

}