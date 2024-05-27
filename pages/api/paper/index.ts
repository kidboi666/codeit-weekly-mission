import dbConnect from "@/backend/config";
import Paper from "@/backend/models/paper";
import cors from "@/backend/middlewares/cors";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  cors(req, res, async () => {
    await dbConnect();

    switch (req.method) {
      case "POST":
        const newPaper = await Paper.create(req.body);
        res.status(200).send(newPaper);
        break;

      case "GET":
        const foundPaper = await Paper.find();
        res.status(200).send({ data: foundPaper });
        break;

      default:
        res.status(404).send("Not Found");
        break;
    }
  });
};

export default handler;
