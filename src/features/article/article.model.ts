import mongoose from 'mongoose'

const articleSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    markdown: { type: String, required: true },
    date: { type: String }
  },
  {
    timestamps: true,
  },
)

const Article = mongoose.model('Article', articleSchema)
export default Article
