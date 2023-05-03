import { Router } from "express"
import { deleteAdvertiseController, retrieveAdvertiseController, getAllAdvertiseController, patchAdvertiseController, postAdvertiseController } from "../controllers/advertise.controller"
import { ensureAnnouncementParamsIdExistsMiddleware, ensureAuthMiddleware, ensureLoggerUserOwnerAnnouncementMiddleware, validateSchemaMiddleware } from "../middlewares"
import { registerAdvertise, registerCommentsShape, updateAdvertise } from "../schemas"
import { postCommentsController } from "../controllers/comments.controller"


export const advertiseRouter = Router()

advertiseRouter.get("", getAllAdvertiseController)

advertiseRouter.post("", validateSchemaMiddleware(registerAdvertise), ensureAuthMiddleware, postAdvertiseController)

advertiseRouter.get("/:id", ensureAnnouncementParamsIdExistsMiddleware, retrieveAdvertiseController)

advertiseRouter.patch("/:id", validateSchemaMiddleware(updateAdvertise), ensureAuthMiddleware, ensureAnnouncementParamsIdExistsMiddleware, ensureLoggerUserOwnerAnnouncementMiddleware, patchAdvertiseController)

advertiseRouter.delete("/:id", ensureAuthMiddleware, ensureAnnouncementParamsIdExistsMiddleware, ensureLoggerUserOwnerAnnouncementMiddleware, deleteAdvertiseController)

advertiseRouter.post("/:id/comments", validateSchemaMiddleware(registerCommentsShape), ensureAuthMiddleware, ensureAnnouncementParamsIdExistsMiddleware, postCommentsController)

