import mongoose from "mongoose";

const memoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, default: "" },
    content: { type: String, required: true, default: "" },
  },
  {
    timestamps: true,
  },
);

const Memo = mongoose.models["Memo"] || mongoose.model("Memo", memoSchema);

export default Memo;
