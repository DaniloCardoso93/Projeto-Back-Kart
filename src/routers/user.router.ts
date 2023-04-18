import { Router } from "express"
import { deleteUserController, getAllUserController, patchUserController, postUserController, retrieveUserController } from "../controllers/user.controller"
import { registerUserShape, updateUserShape } from "../schemas"
import { validateSchemaMiddleware, verifyCpfExists, verifyEmailExists } from "../middlewares"


export const userRouter = Router()

userRouter.get("", getAllUserController)

userRouter.post("", 
validateSchemaMiddleware(registerUserShape), 
verifyEmailExists, 
verifyCpfExists, 
postUserController,
)


userRouter.get("/:id", retrieveUserController)

userRouter.patch("/:id",validateSchemaMiddleware(updateUserShape), patchUserController)

userRouter.delete("/:id", deleteUserController)

userRouter.get("/profile", )


export default userRouter
