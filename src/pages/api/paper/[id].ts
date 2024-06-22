import dbConnect from '@/backend/config'
import Paper from '@/backend/models/paper'
import cors from '@/backend/middlewares/cors'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  cors(req, res, async () => {
    await dbConnect()
    const { id } = req.query

    switch (req.method) {
      case 'PATCH': {
        const updatedPaper = await Paper.findByIdAndUpdate(id, req.body, {
          new: true,
        })
        res.status(200).send(updatedPaper)
        break
      }

      case 'GET': {
        const foundPaper = await Paper.findById(id)
        res.status(200).send(foundPaper)
        break
      }

      case 'DELETE': {
        await Paper.findByIdAndDelete(id)
        res.status(204).end()
        break
      }

      default:
        res.status(404).send('Not Found')
        break
    }
  })
}

export default handler
