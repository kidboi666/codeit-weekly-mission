import dbConnect from "@/backend/config";
import Memo from "@/backend/models/memo";
import cors from "@/backend/middlewares/cors";
import { createRouter } from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";

const handler = createRouter<NextApiRequest, NextApiResponse>();

handler.use(cors);

handler.patch(async (req, res) => {
  await dbConnect();
  const { id } = req.query;
  const updatedMemo = await Memo.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.status(200).send(updatedMemo);
});

handler.get(async (req, res) => {
  await dbConnect();
  const { id } = req.query;
  const memo = await Memo.findById(id);
  res.status(200).send(memo);
});

handler.delete(async (req, res) => {
  await dbConnect();
  const { id } = req.query;
  await Memo.findByIdAndDelete(id);
  res.status(204).end();
});

export default handler;
