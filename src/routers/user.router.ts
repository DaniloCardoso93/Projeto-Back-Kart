import { Router } from "express"
import { deleteUserController, getAllUserController, getProfileController, patchUserController, postUserController, retrieveUserController } from "../controllers/user.controller"
import { registerUserShape, updateUserShape } from "../schemas"
import { ensureAuthMiddleware, validateSchemaMiddleware, verifyCpfExists, verifyEmailExists } from "../middlewares"


export const userRouter = Router()

userRouter.get("", getAllUserController)

userRouter.post("", 
validateSchemaMiddleware(registerUserShape), 
verifyEmailExists, 
verifyCpfExists, 
postUserController,
)

userRouter.get("/profile", ensureAuthMiddleware, getProfileController)

userRouter.get("/:id", retrieveUserController)

userRouter.patch("/:id", ensureAuthMiddleware, validateSchemaMiddleware(updateUserShape), patchUserController)

userRouter.delete("/:id", ensureAuthMiddleware, deleteUserController)



export default userRouter
