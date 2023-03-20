import { Request, Response, NextFunction } from 'express'
import catchAsync from '../../common/error-handler/CatchAsyncError'
import Article from './article.model'
import Constant from '../../constant'
import ApplicationError from '../../common/error-handler/ApplicationError'

const Messages = Constant.messages

class ArticleController {
  getArticleHandler = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const articles = await Article.find({})
      if (!articles) {
        return next(new ApplicationError(Messages.articleUnavailable))
      }
      res.status(200).send(articles)
    },
  )

  getArticleByIdHandler = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const { id } = req.params
      const article = await Article.findById({ _id: id })
      if (!article) {
        return res.status(404).send({ message: Messages.articleExist })
      }
      return res.status(200).send(article)
    },
  )

  createArticleHandler = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const article = new Article(req.body)
      article.date = new Date().toLocaleDateString()
      await article.save()
      res.status(201).send(article)
    },
  )
}

export default new ArticleController()
