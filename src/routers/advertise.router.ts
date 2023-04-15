import { Router } from "express"
import { deleteAdvertiseController, retrieveAdvertiseController, getAllAdvertiseController, patchAdvertiseController, postAdvertiseController } from "../controllers/advertise.controller"
import validateSchemaMiddleware from "../middlewares/validatedSchema.middleware"
import { registerAdvertise, updateAdvertise } from "../schemas"


export const advertiseRouter = Router()

advertiseRouter.get("", getAllAdvertiseController)

advertiseRouter.post("", validateSchemaMiddleware(registerAdvertise), postAdvertiseController)

advertiseRouter.get("/:id", retrieveAdvertiseController)

advertiseRouter.patch("/:id", validateSchemaMiddleware(updateAdvertise), patchAdvertiseController)

advertiseRouter.delete("/:id", deleteAdvertiseController)
