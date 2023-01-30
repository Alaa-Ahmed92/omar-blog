import Gallery from "../../../models/Gallery";
import Category from "../../../models/Category";
import dbConnect from "../../../utils/dbConnect";

export default async function handler(req, res) {
    const {
        query: { id },
        method
    } = req;

    await dbConnect();

    switch (method) {
        case 'GET':
            try {
                await Gallery.findByIdAndUpdate(id, { $inc: { views: 1 } });
                const gallery = await Gallery.findById(id);

                if (!gallery) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: gallery });

            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'PUT':
            try {
                const gallery = await Gallery.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true,
                })

                await Promise.all(gallery.categories.map(async category => {
                    await Category.updateOne({ name: category }, { $set: { 'galleries': gallery } });
                }));

                if (!gallery) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: gallery });

            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'DELETE':
            try {
                const gallery = await Gallery.findOne({ _id: id });
                const deletedGallery = await Gallery.deleteOne({ _id: id });

                await Promise.all(gallery.categories.map(async category => {
                    Category.updateOne(
                        { name: category },
                        { $pull: { galleries: { _id: gallery._id } } }
                    ).then((result) => {
                        console.log('result', result);
                    })
                        .catch((error) => {
                            console.log('error', error);
                        });
                }));

                if (!deletedGallery) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: {} });

            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }

}