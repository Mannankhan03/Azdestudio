import Mainbannermodel from "../models/Mainbanner.js";
import cloudinary from "cloudinary";

const herosectionbanner = async (req, res) => {
  try {
    const { title, subtitle } = req.body;
    const imageFile = req.file;

    if (!title || !subtitle || !imageFile) {
      return res
        .status(400)
        .json({ success: false, message: "Missing details" });
    }

    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });

    const imageUrl = imageUpload.secure_url;

    const herodata = {
      title,
      bannerimage: imageUrl,
      subtitle,
    };

    const newHerodata = new Mainbannermodel(herodata);
    await newHerodata.save();

    res.status(201).json({ success: true, message: "Data added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const getHeroSectionBanners = async (req, res) => {
  try {
    const banners = await Mainbannermodel.find({});
    res.status(200).json({ success: true, data: banners });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export { herosectionbanner, getHeroSectionBanners };
