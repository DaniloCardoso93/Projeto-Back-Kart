import { Router } from "express"
import { deleteAdvertiseController, getAdvertiseByIdController, getAllAdvertiseController, patchAdvertiseController, postAdvertiseController } from "../controllers/advertise.controller"


export const advertiseRouter = Router()

advertiseRouter.get("", getAllAdvertiseController)

advertiseRouter.post("", postAdvertiseController)

advertiseRouter.get("/:id", getAdvertiseByIdController)

advertiseRouter.patch("/:id", patchAdvertiseController)

advertiseRouter.delete("/:id", deleteAdvertiseController)
