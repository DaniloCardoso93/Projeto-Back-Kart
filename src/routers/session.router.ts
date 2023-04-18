import { Router } from "express";
import { loginUserController } from "../controllers/session.controller";
import validateSchemaMiddleware from "../middlewares/validatedSchema.middleware";
import { loginShape } from "../schemas";

const loginRouter = Router()

loginRouter.post("", validateSchemaMiddleware(loginShape) ,loginUserController)

export default loginRouter