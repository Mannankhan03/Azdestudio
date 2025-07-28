import mongoose from "mongoose";

const MainbannerSchema = new mongoose.Schema({
  bannerimage: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
});

const Mainbannermodel =
  mongoose.models.Mainbanner || mongoose.model("Mainbanner", MainbannerSchema);

export default Mainbannermodel;
