import { Router } from "express"
import { deleteAdvertiseController, retrieveAdvertiseController, getAllAdvertiseController, patchAdvertiseController, postAdvertiseController } from "../controllers/advertise.controller"
import { ensureAuthMiddleware, validateSchemaMiddleware } from "../middlewares"
import { registerAdvertise, updateAdvertise } from "../schemas"


export const advertiseRouter = Router()

advertiseRouter.get("", getAllAdvertiseController)

advertiseRouter.post("", ensureAuthMiddleware, validateSchemaMiddleware(registerAdvertise), postAdvertiseController)

advertiseRouter.get("/:id", retrieveAdvertiseController)

advertiseRouter.patch("/:id", validateSchemaMiddleware(updateAdvertise), patchAdvertiseController)

advertiseRouter.delete("/:id", deleteAdvertiseController)
