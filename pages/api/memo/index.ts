import dbConnect from "@/backend/config";
import Memo from "@/backend/models/memo";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();

  switch (req.method) {
    case "POST":
      const newMemo = await Memo.create(req.body);
      return res.status(200).send(newMemo);
    case "GET":
      const foundMemo = await Memo.find();
      return res.status(200).send(foundMemo);
    default:
      return res
        .status(405)
        .send({ message: `Method ${req.method} Not Allowed` });
  }
};

export default handler;
