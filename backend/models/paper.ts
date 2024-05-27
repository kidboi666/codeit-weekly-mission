import mongoose from "mongoose";

const paperSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, default: "" },
    content: { type: String, required: true, default: "" },
    background: {
      type: String,
      required: true,
      default: "yellow",
    },
  },
  {
    timestamps: true,
  },
);

const Paper = mongoose.models["Paper"] || mongoose.model("Paper", paperSchema);

export default Paper;
