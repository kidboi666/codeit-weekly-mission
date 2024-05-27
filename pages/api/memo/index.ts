import dbConnect from "@/backend/config";
import Memo from "@/backend/models/memo";
import cors from "@/backend/middlewares/cors";
import { createRouter } from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  cors(req, res, async () => {
    await dbConnect();

    switch (req.method) {
      case "POST":
        const newMemo = await Memo.create(req.body);
        res.status(200).send(newMemo);
        break;

      case "GET":
        const foundMemo = await Memo.find();
        res.status(200).send({ data: foundMemo });
        break;

      default:
        res.status(404).send("Not Found");
        break;
    }
  });
};

export default handler;
