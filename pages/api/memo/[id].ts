import dbConnect from "@/backend/config";
import Memo from "@/backend/models/memo";
import cors from "@/backend/middlewares/cors";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  cors(req, res, async () => {
    await dbConnect();
    const { id } = req.query;

    switch (req.method) {
      case "PATCH":
        const updatedMemo = await Memo.findByIdAndUpdate(id, req.body, {
          new: true,
        });
        res.status(200).send(updatedMemo);
        break;

      case "GET":
        const foundMemo = await Memo.findById(id);
        res.status(200).send(foundMemo);
        break;

      case "DELETE":
        await Memo.findByIdAndDelete(id);
        res.status(204).end();
        break;

      default:
        res.status(404).send("Not Found");
        break;
    }
  });
};

export default handler;
