import { Router } from "express";
import { deleteCommentsController, getAllCommentsController, patchCommentsController, retrieveCommentsController } from "../controllers/comments.controller";
import { ensureAuthMiddleware, ensureCommentParamsIdExistsMiddleware, ensureLoggerUserOwnerCommentMiddleware, validateSchemaMiddleware } from "../middlewares";
import { registerCommentsShape } from "../schemas";

export const commentRouter = Router()

commentRouter.get("", ensureAuthMiddleware, getAllCommentsController)

commentRouter.get("/:id", ensureCommentParamsIdExistsMiddleware, ensureAuthMiddleware, retrieveCommentsController)

commentRouter.patch("/:id", validateSchemaMiddleware(registerCommentsShape), ensureAuthMiddleware, ensureCommentParamsIdExistsMiddleware, ensureLoggerUserOwnerCommentMiddleware, patchCommentsController)

commentRouter.delete("/:id", ensureAuthMiddleware, ensureCommentParamsIdExistsMiddleware, ensureLoggerUserOwnerCommentMiddleware, deleteCommentsController)