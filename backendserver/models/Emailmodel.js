import mongoose from "mongoose";

const heroFormSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const Forminput =
  mongoose.models.Forminput || mongoose.model("Forminput", heroFormSchema);

export default Forminput;
