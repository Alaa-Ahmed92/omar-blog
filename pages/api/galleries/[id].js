import Gallery from "../../../models/Gallery";
import Category from "../../../models/Category";
import dbConnect from "../../../utils/dbConnect";
import { arraysAreEqual } from "../../../utils/helpers";

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
                const oldGallery = await Gallery.findById(id);
                const gallery = await Gallery.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true,
                })

                if (req.body) {
                    const arrEqual = await arraysAreEqual(oldGallery.categories, req.body.categories);
                    if (!arrEqual) {
                        await Promise.all(oldGallery.categories.map(async cat => {
                            const category = await Category.findOne({ name: cat })
                            await category.removeGallery(oldGallery._id); // Delete Gallery From This Category
                        }))
                        await Promise.all(req.body.categories.map(async cat => {
                            const category = await Category.findOne({ name: cat })
                            await category.addGallery(gallery); // Add Gallery From This Category
                        }))
                    }
                }

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

                await Promise.all(gallery.categories.map(async categoryItem => {
                    const category = await Category.findOne({ name: categoryItem })

                    await category.removeGallery(gallery._id);
                }))

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