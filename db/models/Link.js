import mongoose from "mongoose";

const linkSchema = new mongoose.Schema(
  {
    title: { type: String, default: "" },
    url: { type: String, default: "" },
    imageSource: { type: String, default: "" },
    description: { type: String, default: "" },
    folderId: { type: Number, default: null },
  },
  {
    timestamps: true,
  },
);

const Link = mongoose.models["Link"] || mongoose.model("Link", linkSchema);

export default Link;
