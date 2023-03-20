import { Router } from 'express'
import articleController from './article.controller'

const { getArticleHandler, createArticleHandler, getArticleByIdHandler } = articleController

const articleRouter = Router()

articleRouter
  .route('/articles')
  .get(getArticleHandler)
  .post(createArticleHandler)

articleRouter.get('/articles/:id', getArticleByIdHandler)

export default articleRouter
