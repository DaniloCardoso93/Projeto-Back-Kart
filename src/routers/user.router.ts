import { Router } from "express"
import { deleteUserController, getAllUserController, patchUserController, postUserController, retrieveUserController } from "../controllers/user.controller"


export const userRouter = Router()

userRouter.get("", getAllUserController)

userRouter.post("", postUserController)

userRouter.get("/:id", retrieveUserController)

userRouter.patch("/:id", patchUserController)

userRouter.delete("/:id", deleteUserController)


export default userRouter
