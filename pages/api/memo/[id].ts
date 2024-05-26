import dbConnect from "@/backend/config";
import Memo from "@/backend/models/memo";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();
  const { id } = req.query;

  switch (req.method) {
    case "PATCH":
      return;
    case "GET":
      const memo = await Memo.findById(id);
      return res.status(200).send(memo);
    case "DELETE":
      await Memo.findByIdAndDelete(id);
      return res.status(204).end();
  }
};

export default handler;
