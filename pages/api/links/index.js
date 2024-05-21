import dbConnect from "@/db/dbConnect";

const handler = async (req, res) => {
  await dbConnect();

  switch (req.method) {
    case "GET":
      res.send();
      break;
    case "POST":
      res.send(req.body);
      break;

    default:
      res.status(404).send();
      break;
  }
};

export default handler;
