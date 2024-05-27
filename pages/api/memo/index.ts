import dbConnect from "@/backend/config";
import Memo from "@/backend/models/memo";
import cors from "@/backend/middlewares/cors";
import { createRouter } from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";

const handler = createRouter<NextApiRequest, NextApiResponse>();

handler.use(cors);

handler.post(async (req, res) => {
  await dbConnect();
  const newMemo = await Memo.create(req.body);
  res.status(200).send(newMemo);
});

handler.get(async (req, res) => {
  await dbConnect();
  const foundMemo = await Memo.find();
  res.status(200).send({ data: foundMemo });
});

export default handler;
