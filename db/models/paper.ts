import mongoose from 'mongoose'

const paperSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, default: '' },
    title: { type: String, required: true, default: '' },
    content: { type: String, required: true, default: '' },
    background: {
      type: String,
      required: true,
      default: 'yellow',
    },
  },
  {
    timestamps: true,
  },
)

// eslint-disable-next-line @typescript-eslint/dot-notation
const Paper = mongoose.models['Paper'] || mongoose.model('Paper', paperSchema)

export default Paper
