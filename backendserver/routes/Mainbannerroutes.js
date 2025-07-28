import express from "express";
import {
  getHeroSectionBanners,
  herosectionbanner,
} from "../controllers/Mainbannercontroller.js";
import upload from "../middleware/multer.js";

const adminRouter = express.Router();

adminRouter.post("/add-data", upload.single("bannerimage"), herosectionbanner);
adminRouter.get("/get-banners", getHeroSectionBanners);

export default adminRouter;
