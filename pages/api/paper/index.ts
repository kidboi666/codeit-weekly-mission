import dbConnect from '@/db/config'
import Paper from '@/db/models/paper'
import cors from '@/db/middlewares/cors'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  cors(req, res, async () => {
    await dbConnect()

    switch (req.method) {
      case 'POST': {
        const newPaper = await Paper.create(req.body)
        res.status(200).send(newPaper)
        break
      }

      case 'GET': {
        const page = Number(req.query.page) || 1
        const limit = Number(req.query.limit) || 5
        if (page && limit) {
          const foundPaper = await Paper.find()
            .skip((page - 1) * limit)
            .limit(limit)
            .sort({ createdAt: 'desc' })
          const totalPaper = await Paper.countDocuments()
          res.status(200).send({
            data: foundPaper,
            totalPage: Math.ceil(totalPaper / limit),
          })
        } else {
          res.status(404).send('Not Found')
        }
        break
      }

      default:
        res.status(404).send('Not Found')
        break
    }
  })
}

export default handler
