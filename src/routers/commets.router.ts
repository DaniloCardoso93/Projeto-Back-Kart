import { Router } from "express";
import { deleteCommentsController, getAllCommentsController, patchCommentsController, retrieveCommentsController } from "../controllers/comments.controller";
import { ensureAuthMiddleware, validateSchemaMiddleware } from "../middlewares";
import { registerCommentsShape } from "../schemas";

export const commentRouter = Router()

commentRouter.get("", ensureAuthMiddleware, getAllCommentsController)

commentRouter.get("/:id", ensureAuthMiddleware, retrieveCommentsController)

commentRouter.patch(":/id", ensureAuthMiddleware, validateSchemaMiddleware(registerCommentsShape), patchCommentsController)

commentRouter.delete(":/id", ensureAuthMiddleware, deleteCommentsController)